import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  ['Home', '#home'],
  ['Collections', '#collections'],
  ['Best Sellers', '#best-sellers'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

const Navbar = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/40 bg-pearl/[0.76] shadow-sm backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Soulor home">
          {logo ? (
            <img src={logo} alt="Soulor" className="h-11 w-11 rounded-full object-cover ring-1 ring-champagne/50" />
          ) : null}
          <span className={`font-serif text-3xl font-medium tracking-wide ${scrolled ? 'text-ink' : 'text-pearl'}`}>
            Soulor
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm uppercase tracking-[0.22em] transition hover:text-champagne ${
                scrolled ? 'text-ink/[0.74]' : 'text-pearl/[0.86]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full border transition md:hidden ${
            scrolled ? 'border-ink/10 bg-white/50 text-ink' : 'border-white/30 bg-white/10 text-white'
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mb-4 rounded-[1.75rem] border border-white/50 bg-pearl/[0.92] p-4 shadow-luxury backdrop-blur-xl md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-ink/[0.76] hover:bg-ivory"
              >
                {label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
