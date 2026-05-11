import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ video }) => (
  <section id="home" className="relative min-h-screen overflow-hidden bg-ink text-pearl">
    {video ? (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    ) : (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(231,210,168,0.35),transparent_36%),linear-gradient(135deg,#161412,#6f5b4c)]" />
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-black/[0.45] via-black/[0.35] to-black/70" />
    <div className="absolute inset-0 bg-grain bg-[length:5px_5px] opacity-[0.16]" />

    <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:pb-28">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-5 text-xs uppercase tracking-[0.42em] text-champagne"
      >
        soulor.in
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl font-serif text-6xl font-medium leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl"
      >
        Delicate Pieces, Lasting Shine
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.52 }}
        className="mt-6 max-w-xl text-lg leading-8 text-pearl/[0.82] sm:text-xl"
      >
        Anti-Tarnish Jewelry For Every Mood
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.68 }}
        className="mt-9 flex flex-col gap-4 sm:flex-row"
      >
        <a className="btn-primary group" href="#collections">
          Shop Collection <ArrowRight className="transition group-hover:translate-x-1" size={18} />
        </a>
        <a className="btn-ghost" href="#best-sellers">
          Explore Best Sellers
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
