import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  ArrowUp,
  Sparkles,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="currentColor" className={props.className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="currentColor" className={props.className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="currentColor" className={props.className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="currentColor" className={props.className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/programs" },
  { label: "Our Impact", href: "/impact" },
  { label: "Activities", href: "/activities" },
  { label: "Our Team", href: "/team" },
];

const programLinks = [
  { label: "Agriculture", href: "/programs" },
  { label: "Environment", href: "/programs" },
  { label: "Women Empowerment", href: "/programs" },
  { label: "Renewable Energy", href: "/programs" },
  { label: "Tribal Development", href: "/programs" },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "https://speech.1ngo.in/" },
  { icon: TwitterIcon, label: "Twitter", href: "https://speech.1ngo.in/" },
  { icon: InstagramIcon, label: "Instagram", href: "https://speech.1ngo.in/" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://speech.1ngo.in/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://speech.1ngo.in/" },
];

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .footer-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .footer-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes footer-shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes footer-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes footer-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .footer-gradient-text {
          background: linear-gradient(90deg, #005EB8, #0E7C7B, #C9A227, #0E7C7B, #005EB8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: footer-shine 8s ease infinite;
        }
        
        .footer-float { animation: footer-float 5s ease-in-out infinite; }
        
        .footer-ring::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: inherit;
          animation: footer-pulse-ring 2s ease-out infinite;
        }
        
        .footer-link-shine {
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 0% 100%;
          background-repeat: no-repeat;
          background-size: 0% 1px;
          transition: background-size 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .footer-link-shine:hover {
          background-size: 100% 1px;
        }
      `}</style>

      {/* ================= SCROLL TO TOP BUTTON ================= */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`footer-font fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] text-white shadow-2xl shadow-[#005EB8]/40 transition-all duration-500 hover:scale-110 hover:shadow-[#005EB8]/60 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <ArrowUp size={20} />
      </button>

      <footer
        id="contact"
        className="footer-font relative overflow-hidden bg-gradient-to-b from-[#0B1220] via-[#0F1829] to-[#0A1018] text-white"
      >
        {/* ================= BACKGROUND DECORATIONS ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top edge gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

          {/* Radial glows */}
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#005EB8]/10 blur-[120px]" />
          <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/10 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-[100px]" />

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          {/* ============ TOP SECTION ============ */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">

            {/* ---- Brand Column ---- */}
            <div className="lg:col-span-5">
              <div className="flex items-start gap-4">
                {/* Logo with glow */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] opacity-40 blur-lg" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-2 shadow-xl">
                    <img
                      src="/images/logo.png"
                      alt="SPEECH NGO Emblem Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <h2 className="footer-serif text-3xl font-bold tracking-tight text-white">
                      SPEECH
                    </h2>
                    <Sparkles size={14} className="text-[#C9A227]" />
                  </div>
                  <p className="mt-1.5 text-[10.5px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-cyan-400/90">
                    Society for Public Education,<br />
                    Environment, Cultural & Health
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-md text-[14.5px] leading-relaxed text-slate-400">
                Working with economically marginalized sections of society to improve
                health, education, sustainable livelihood, environment, and
                socio-economic conditions at the grassroots level.
              </p>

              {/* Trust badges */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
                  <Shield size={12} className="text-[#C9A227]" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-300">
                    Registered NGO
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
                  <Heart size={12} className="fill-[#0E7C7B] text-[#0E7C7B]" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-300">
                    Grassroots Community Impact
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Follow Us
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005EB8]/50 hover:bg-gradient-to-br hover:from-[#005EB8] hover:to-[#0E7C7B] hover:shadow-lg hover:shadow-[#005EB8]/40"
                      >
                        <Icon
                          size={16}
                          className="text-slate-400 transition-colors duration-300 group-hover:text-white"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ---- Explore Column ---- */}
            <div className="lg:col-span-2">
              <h3 className="footer-serif text-sm font-bold uppercase tracking-[0.2em] text-white">
                Explore
              </h3>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />

              <ul className="mt-6 space-y-3.5">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link-shine group inline-flex items-center gap-1.5 text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---- Programs Column ---- */}
            <div className="lg:col-span-2">
              <h3 className="footer-serif text-sm font-bold uppercase tracking-[0.2em] text-white">
                Programs
              </h3>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#0E7C7B] to-[#C9A227]" />

              <ul className="mt-6 space-y-3.5">
                {programLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link-shine group inline-flex items-center gap-1.5 text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---- Contact Column ---- */}
            <div className="lg:col-span-3">
              <h3 className="footer-serif text-sm font-bold uppercase tracking-[0.2em] text-white">
                Get in Touch
              </h3>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#C9A227] to-[#005EB8]" />

              <div className="mt-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MapPin size={14} className="text-[#0E7C7B]" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-slate-400">
                    SPEECH, Ganesha Krupa, Nrupatunga Extention,
                    Bank Colony, Chitradurga, Karnataka – 577501
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Mail size={14} className="text-[#005EB8]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Email
                    </p>
                    <a
                      href="mailto:speech.cta@gmail.com"
                      className="footer-link-shine mt-0.5 inline-block text-[13.5px] font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      speech.cta@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Phone size={14} className="text-[#C9A227]" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Phone
                    </p>
                    {["+91 9740114246", "+91 9110867090", "+91 9964765246"].map((num) => (
                      <a
                        key={num}
                        href={`tel:${num.replace(/\s/g, "")}`}
                        className="footer-link-shine block text-[13.5px] font-medium text-slate-300 transition-colors hover:text-white"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============ DIVIDER ============ */}
          <div className="relative mt-16">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0F1829]">
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
            </div>
          </div>

          {/* ============ BOTTOM BAR ============ */}
          <div className="mt-8 flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-[13px] text-slate-500">
                © {new Date().getFullYear()}{" "}
                <span className="footer-serif font-semibold text-slate-300">
                  SPEECH NGO
                </span>
                . All rights reserved.
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Building sustainable futures with communities across Karnataka.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <a
                href="/about"
                className="footer-link-shine text-[12.5px] font-medium text-slate-500 transition-colors hover:text-white"
              >
                About Us
              </a>
              <span className="h-3 w-px bg-white/10" />
              <a
                href="/contact"
                className="footer-link-shine text-[12.5px] font-medium text-slate-500 transition-colors hover:text-white"
              >
                Contact
              </a>
              <span className="h-3 w-px bg-white/10" />
              <a
                href="/donate"
                className="footer-link-shine text-[12.5px] font-medium text-slate-500 transition-colors hover:text-white"
              >
                Donate
              </a>
            </div>
          </div>

          {/* ============ CRAFTED WITH LOVE ============ */}
          <div className="mt-10 flex items-center justify-center gap-2 text-[11px] text-slate-600">
            <span>Crafted with</span>
            <Heart size={11} className="fill-[#C9A227] text-[#C9A227] footer-float" />
            <span>for communities we serve</span>
          </div>
        </div>

        {/* Bottom edge gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#005EB8]/40 to-transparent" />
      </footer>
    </>
  );
}

export default Footer;