import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

const FeaturedGrid = ({ products }) => (
  <section id="best-sellers" className="bg-pearl py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal className="mb-12 max-w-3xl">
        <p className="eyebrow">Best sellers</p>
        <h2 className="section-title">Pieces with an effortless glow, styled for every mood.</h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 0.05} className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}>
            <article className="group relative h-full min-h-[360px] overflow-hidden rounded-[1.75rem] bg-ink shadow-luxury">
              {product.image ? (
                <img
                  src={product.gallery[index % product.gallery.length] || product.image}
                  alt={product.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.72] via-black/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{product.mood}</p>
                <h3 className="mt-2 font-serif text-3xl">{product.name}</h3>
                <div className="mt-5 flex items-center justify-between opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="text-sm text-white/80">{product.price}</span>
                  <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-ink">
                    View Collection <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGrid;
