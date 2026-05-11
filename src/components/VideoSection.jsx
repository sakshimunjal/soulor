import Reveal from './Reveal.jsx';

const VideoSection = ({ brandVideo, productVideo }) => (
  <section className="relative overflow-hidden bg-ink py-24 text-pearl sm:py-32">
    <div className="absolute inset-0 bg-grain bg-[length:5px_5px] opacity-[0.12]" />
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <p className="eyebrow text-champagne">Cinematic shine</p>
        <h2 className="section-title text-pearl">Designed to stay beautiful through motion, light, and time.</h2>
        <p className="mt-6 max-w-md leading-8 text-pearl/[0.68]">
          Every Soulor piece carries a polished anti-tarnish finish, balancing daily practicality with a boutique
          jewelry mood.
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-luxury">
          {brandVideo || productVideo ? (
            <video
              src={brandVideo || productVideo}
              className="aspect-[16/10] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.48] via-transparent to-champagne/10" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/[0.14] bg-black/[0.24] p-5 backdrop-blur-xl">
            <p className="font-serif text-3xl">Lasting shine, softly worn.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default VideoSection;
