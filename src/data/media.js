const mediaModules = import.meta.glob('../../media/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,mp4,MP4}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const imageTypes = ['png', 'jpg', 'jpeg', 'webp', 'avif'];
const videoTypes = ['mp4', 'webm', 'mov'];
const moods = ['Soft Gold', 'Everyday Shine', 'Evening Poise', 'Pearl Noir', 'Gift Ready', 'Daily Luxury'];

const byName = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare;

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
}).sort((a, b) => byName(a.folder, b.folder) || byName(a.file, b.file));

const rootMedia = mediaEntries.filter((item) => item.folder === 'root');
const grouped = mediaEntries.reduce((acc, item) => {
  if (item.folder === 'root') return acc;
  acc[item.folder] = acc[item.folder] || [];
  acc[item.folder].push(item);
  return acc;
}, {});

const products = Object.entries(grouped)
  .sort(([folderA], [folderB]) => byName(folderA, folderB))
  .map(([folder, assets], index) => {
    const images = assets.filter((asset) => imageTypes.includes(asset.file.split('.').pop().toLowerCase()));
    const videos = assets.filter((asset) => videoTypes.includes(asset.file.split('.').pop().toLowerCase()));
    const cover = images.find((image) => /^1[_\s-]/i.test(image.file)) || images[0];

    return {
      id: folder.toLowerCase().replace(/\s+/g, '-'),
      name: titleCase(folder.replace(/\bwatch\b/i, 'Watch')),
      image: cover?.url,
      gallery: images.map((image) => image.url),
      video: videos[0]?.url,
      assetCount: assets.length,
      mood: moods[index % moods.length],
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
