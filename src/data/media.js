const mediaModules = import.meta.glob('../../media/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,mp4,MP4}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const imageTypes = ['png', 'jpg', 'jpeg', 'webp'];
const videoTypes = ['mp4'];

const titleCase = (value) =>
  value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

// Vite turns every file in /media into a deployable URL, then folder names become product records.
const mediaEntries = Object.entries(mediaModules).map(([path, url]) => {
  const normalized = path.replace(/\\/g, '/');
  const relative = normalized.split('/media/')[1] || '';
  const parts = relative.split('/');
  const file = parts.at(-1);
  const folder = parts.length > 1 ? parts[0] : 'root';
  const extension = file.split('.').pop().toLowerCase();

  return {
    path: normalized,
    url,
    folder,
    file,
    type: videoTypes.includes(extension) ? 'video' : 'image',
  };
});

const rootMedia = mediaEntries.filter((item) => item.folder === 'root');
const grouped = mediaEntries.reduce((acc, item) => {
  if (item.folder === 'root') return acc;
  acc[item.folder] = acc[item.folder] || [];
  acc[item.folder].push(item);
  return acc;
}, {});

const products = Object.entries(grouped).map(([folder, assets], index) => {
  const images = assets.filter((asset) => asset.type === 'image');
  const videos = assets.filter((asset) => asset.type === 'video');

  return {
    id: folder.toLowerCase().replace(/\s+/g, '-'),
    name: titleCase(folder.replace(/\bwatch\b/i, 'Watch')),
    image: images[0]?.url,
    gallery: images.map((image) => image.url),
    video: videos[0]?.url,
    price: ['₹899', '₹1,099', '₹749', '₹999', '₹1,299'][index % 5],
    mood: ['Soft Gold', 'Everyday Shine', 'Evening Poise', 'Pearl Noir', 'Gift Ready'][index % 5],
  };
});

const findRoot = (match) => rootMedia.find((item) => item.file.toLowerCase().includes(match))?.url;

export const brandMedia = {
  logo: findRoot('logo') || products[0]?.image,
  introVideo: findRoot('brand_intro') || rootMedia.find((item) => item.type === 'video')?.url,
  antiTarnishVideo: findRoot('anti_tarnish') || rootMedia.find((item) => item.type === 'video')?.url,
};

export const productCatalog = products.length
  ? products
  : [
      {
        id: 'signature-fallback',
        name: 'Signature Shine',
        image: undefined,
        gallery: [],
        video: undefined,
        price: '₹899',
        mood: 'Anti-Tarnish',
      },
    ];

export const socialGallery = productCatalog.flatMap((product) =>
  product.gallery.slice(0, 3).map((image, index) => ({
    id: `${product.id}-${index}`,
    image,
    label: product.name,
  })),
);
