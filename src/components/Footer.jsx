import { Instagram, Mail, Send, Youtube } from 'lucide-react';

const Footer = ({ logo }) => (
  <footer id="contact" className="bg-ink px-5 py-14 text-pearl sm:px-8">
    <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/[0.12] pt-10 lg:grid-cols-[1fr_1.2fr_1fr]">
      <div>
        <div className="flex items-center gap-3">
          {logo ? <img src={logo} alt="Soulor" className="h-12 w-12 rounded-full object-cover" /> : null}
          <span className="font-serif text-3xl">Soulor</span>
        </div>
        <p className="mt-4 max-w-xs text-sm leading-7 text-pearl/[0.62]">
          Anti-tarnish artificial jewelry with a refined daily glow.
        </p>
      </div>

      <form className="rounded-[1.5rem] border border-white/[0.12] bg-white/[0.04] p-4">
        <label htmlFor="newsletter" className="mb-3 block text-xs uppercase tracking-[0.24em] text-champagne">
          Newsletter
        </label>
        <div className="flex gap-3">
          <input
            id="newsletter"
            type="email"
            placeholder="Email address"
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-white/[0.42] focus:border-champagne"
          />
          <button type="submit" className="grid h-12 w-12 place-items-center rounded-full bg-champagne text-ink" aria-label="Subscribe">
            <Send size={17} />
          </button>
        </div>
      </form>

      <div className="flex flex-col justify-between gap-6 lg:items-end">
        <div className="flex gap-3">
          <a href="https://soulor.in" className="social-button" aria-label="Soulor website">
            <Mail size={18} />
          </a>
          <a href="https://www.instagram.com/soulor.shop/" className="social-button" aria-label="Soulor Instagram soulor.shop">
            <Instagram size={18} />
          </a>
          <a href="https://www.youtube.com/@soulor-shop" className="social-button" aria-label="Soulor YouTube soulor-shop">
            <Youtube size={19} />
          </a>
        </div>
        <div className="text-sm text-pearl/50 lg:text-right">
          <p>@soulor.shop · youtube.com/@soulor-shop</p>
          <p className="mt-2">© {new Date().getFullYear()} Soulor. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
