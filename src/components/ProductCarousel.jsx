import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

const ProductCarousel = ({ products }) => (
  <section id="collections" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
    <div className="ambient ambient-left" />
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Featured collection</p>
          <h2 className="section-title max-w-3xl">Anti-tarnish pieces made for quiet luxury days.</h2>
        </div>
        <div className="flex gap-3">
          <button className="carousel-button carousel-prev" aria-label="Previous product">
            <ArrowLeft size={18} />
          </button>
          <button className="carousel-button carousel-next" aria-label="Next product">
            <ArrowRight size={18} />
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: '.carousel-prev', nextEl: '.carousel-next' }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3600, disableOnInteraction: false }}
          loop={products.length > 3}
          spaceBetween={22}
          breakpoints={{
            0: { slidesPerView: 1.08 },
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.15 },
          }}
          className="soulor-swiper !pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <article className="group rounded-[1.75rem] border border-white/70 bg-pearl p-3 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-champagne/20">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="grid h-full place-items-center font-serif text-3xl text-ink/50">Soulor</div>
                  )}
                  <div className="absolute inset-x-4 top-4 flex justify-between">
                    <span className="rounded-full bg-white/[0.72] px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink/70 backdrop-blur">
                      {product.mood}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-5">
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{product.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-taupe">Anti-tarnish finish</p>
                  </div>
                  <p className="text-sm font-medium text-ink">{product.price}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </div>
  </section>
);

export default ProductCarousel;
