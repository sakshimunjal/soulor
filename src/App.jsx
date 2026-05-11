import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductCarousel from './components/ProductCarousel.jsx';
import FeaturedGrid from './components/FeaturedGrid.jsx';
import VideoSection from './components/VideoSection.jsx';
import Footer from './components/Footer.jsx';
import Reveal from './components/Reveal.jsx';
import { brandMedia, productCatalog, socialGallery } from './data/media.js';

const testimonials = [
  {
    quote: 'The finish feels premium and delicate without being precious. I wear my necklace almost every day.',
    name: 'Aarohi M.',
  },
  {
    quote: 'Beautiful packaging, soft gold tone, and the shine holds up so well for daily styling.',
    name: 'Nisha R.',
  },
  {
    quote: 'Soulor has that quiet luxury look I wanted, but still feels easy and affordable.',
    name: 'Meera S.',
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: -120, y: -120 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const heroProductVideo = productCatalog.find((product) => product.video)?.video;

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      {/* Subtle desktop-only glow gives movement without taking over the shopping experience. */}
      <motion.div
        className="pointer-events-none fixed z-[60] hidden h-24 w-24 rounded-full bg-champagne/[0.16] blur-2xl md:block"
        animate={{ x: cursor.x - 48, y: cursor.y - 48 }}
        transition={{ type: 'spring', stiffness: 160, damping: 28, mass: 0.45 }}
      />

      {loading ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink text-pearl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.65, duration: 0.45 }}
          onAnimationComplete={() => setLoading(false)}
        >
          <div className="text-center">
            <p className="font-serif text-5xl">Soulor</p>
            <div className="mx-auto mt-5 h-px w-40 overflow-hidden bg-white/[0.12]">
              <motion.div className="h-full bg-champagne" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 0.9 }} />
            </div>
          </div>
        </motion.div>
      ) : null}

      <motion.div className="fixed left-0 top-0 z-[70] h-1 origin-left bg-champagne" style={{ scaleX, width: '100%' }} />
      <Navbar logo={brandMedia.logo} />

      <main>
        <Hero video={brandMedia.introVideo} />
        <ProductCarousel products={productCatalog} />

        {/* Editorial pause section gives the cinematic layout room to breathe between product moments. */}
        <section id="about" className="relative overflow-hidden bg-pearl py-24 sm:py-36">
          <div className="ambient ambient-right" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <h2 className="font-serif text-5xl font-medium leading-tight text-ink sm:text-7xl lg:text-8xl">
                  Jewelry that stays beautiful through every moment.
                </h2>
                <div className="rounded-[2rem] border border-ink/[0.08] bg-ivory/70 p-7 shadow-sm backdrop-blur">
                  <p className="text-lg leading-8 text-ink/70">
                    Soulor creates high-quality artificial jewelry with a minimal luxury aesthetic: refined enough for
                    gifting, light enough for everyday wear, and made to keep its shine.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <FeaturedGrid products={productCatalog} />
        <VideoSection brandVideo={brandMedia.antiTarnishVideo} productVideo={heroProductVideo} />

        <section className="bg-ivory py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12 text-center">
              <p className="eyebrow">Kind words</p>
              <h2 className="section-title mx-auto max-w-3xl">A little shine, a lot of everyday confidence.</h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.08}>
                  <article className="h-full rounded-[1.75rem] border border-white/80 bg-pearl p-7 shadow-sm">
                    <p className="font-serif text-3xl leading-snug text-ink">“{item.quote}”</p>
                    <p className="mt-7 text-sm uppercase tracking-[0.22em] text-taupe">{item.name}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-pearl py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Social gallery</p>
                <h2 className="section-title max-w-3xl">Styled in soft light for the Soulor moodboard.</h2>
              </div>
              <a className="text-sm uppercase tracking-[0.22em] text-ink/[0.62] hover:text-ink" href="https://www.instagram.com/">
                Instagram
              </a>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
              {socialGallery.slice(0, 12).map((item, index) => (
                <Reveal key={item.id} delay={(index % 6) * 0.035}>
                  <div className="group relative aspect-square overflow-hidden rounded-[1.2rem] bg-champagne/20">
                    <img src={item.image} alt={item.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/30" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer logo={brandMedia.logo} />
    </>
  );
};

export default App;
