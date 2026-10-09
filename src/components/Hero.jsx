import { ArrowRight, Play, Sparkles, Heart, Users, Leaf, Droplets, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

// Rotating hero words
const rotatingWords = ["Better Futures", "Greener Tomorrow", "Stronger Communities"];

// Hero stats
const heroStats = [
  { icon: Users, value: "10,000+", label: "Lives Touched" },
  { icon: Leaf, value: "50+", label: "Villages Reached" },
  { icon: Droplets, value: "25+", label: "Years of Service" },
];

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .hero-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .hero-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes hero-ken-burns {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.18) translate(-2%, -1%); }
        }
        
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes hero-word-in {
          0% { opacity: 0; transform: translateY(20px) rotateX(-40deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes hero-scroll-pulse {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
        }
        
        @keyframes hero-shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes hero-pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes hero-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .hero-bg-image {
          animation: hero-ken-burns 20s ease-out infinite alternate;
        }
        
        .hero-fade-up {
          opacity: 0;
          animation: hero-fade-up 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .hero-word-anim {
          animation: hero-word-in 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .hero-float { animation: hero-float 6s ease-in-out infinite; }
        
        .hero-scroll-chevron { animation: hero-scroll-pulse 2s ease-in-out infinite; }
        
        .hero-gradient-text {
          background: linear-gradient(90deg, #FFD75C, #FFFFFF, #7FE7E0, #FFFFFF, #FFD75C);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hero-shine 4s linear infinite;
        }
        
        .hero-cta-primary {
          background: linear-gradient(135deg, #005EB8 0%, #0E7C7B 100%);
          background-size: 200% 200%;
          animation: hero-gradient-shift 5s ease infinite;
        }
        
        .hero-pulse-ring::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid currentColor;
          animation: hero-pulse-ring 2.2s ease-out infinite;
        }
      `}</style>

      <section className="hero-font relative min-h-[calc(100vh-84px)] overflow-hidden bg-[#0A1018]">

        {/* ================= BACKGROUND LAYERS ================= */}
        <div
          className="hero-bg-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2000&q=85')",
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />

        {/* Layered gradient overlays for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1018]/95 via-[#0A1018]/75 to-[#0A1018]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1018] via-transparent to-[#0A1018]/30" />
        <div className="absolute inset-0 bg-[#005EB8]/10 mix-blend-overlay" />

        {/* Ambient color glows */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#005EB8]/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 right-1/3 h-[300px] w-[300px] rounded-full bg-[#C9A227]/10 blur-[100px]" />

        {/* Subtle noise/dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "44px 44px",
          }}
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-84px)] max-w-7xl items-center px-6 lg:px-8">
          <div className="w-full max-w-4xl text-white">

            {/* ============ BADGE ============ */}
            <div
              className={`hero-fade-up inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 sm:gap-3 sm:px-4 sm:py-2 backdrop-blur-md`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative flex h-5 w-5 shrink-0 items-center justify-center sm:h-6 sm:w-6">
                <span className="absolute inset-0 rounded-full bg-[#C9A227]/40 hero-pulse-ring text-[#C9A227]" />
                <Sparkles size={12} className="relative text-[#C9A227]" />
              </div>
              <span className="truncate text-[9px] font-bold uppercase tracking-[0.15em] text-white/90 sm:text-[10.5px] sm:tracking-[0.25em]">
                Society for Public Education · Environment · Cultural & Health
              </span>
            </div>

            {/* ============ HEADLINE ============ */}
            <h1 className="mt-6 tracking-tight leading-[0.95] sm:mt-8 sm:leading-[0.92]">
              {/* Line 1 */}
              <span
                className="hero-fade-up hero-serif block text-3xl font-bold text-white/95 sm:text-5xl md:text-7xl lg:text-[88px]"
                style={{ animationDelay: "0.25s" }}
              >
                Building
              </span>

              {/* Line 2 - rotating word */}
              <span
                className="hero-fade-up relative mt-1 block min-h-[1.15em] overflow-hidden sm:mt-2 md:mt-3"
                style={{ animationDelay: "0.4s" }}
              >
                <span
                  key={wordIndex}
                  className="hero-serif hero-word-anim hero-gradient-text block text-3xl font-bold sm:text-5xl md:text-7xl lg:text-[88px]"
                >
                  {rotatingWords[wordIndex]}
                </span>
              </span>

              {/* Line 3 */}
              <span
                className="hero-fade-up hero-serif mt-1 block text-3xl font-bold text-white/95 sm:mt-2 md:mt-3 sm:text-5xl md:text-7xl lg:text-[88px]"
                style={{ animationDelay: "0.55s" }}
              >
                Together.
              </span>
            </h1>

            {/* Decorative gradient underline */}
            <div
              className={`hero-fade-up mt-8 flex items-center gap-3`}
              style={{ animationDelay: "0.7s" }}
            >
              <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
              <span className="h-[3px] w-8 rounded-full bg-[#C9A227]" />
              <span className="h-[3px] w-4 rounded-full bg-white/40" />
            </div>

            {/* ============ DESCRIPTION ============ */}
            <p
              className="hero-fade-up mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
              style={{ animationDelay: "0.85s" }}
            >
              We work alongside communities to create{" "}
              <span className="font-semibold text-white">sustainable livelihoods</span>,
              protect our environment, and build a more{" "}
              <span className="relative inline-block font-semibold text-white">
                inclusive future
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-[#0E7C7B] to-[#C9A227]/60" />
              </span>
              .
            </p>

            {/* ============ CTA BUTTONS ============ */}
            <div
              className="hero-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "1s" }}
            >
              {/* Primary CTA */}
              <a
                href="#donate"
                className="hero-cta-primary group relative flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white shadow-2xl shadow-[#005EB8]/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[#005EB8]/60"
              >
                {/* Shine sweep */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute -inset-x-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-full" />
                </span>
                <Heart size={16} className="relative transition-transform duration-300 group-hover:scale-125" fill="currentColor" />
                <span className="relative">Donate Now</span>
                <ArrowRight
                  size={16}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#work"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all duration-500 hover:border-white/50 hover:bg-white/15"
              >
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 transition-all duration-500 group-hover:bg-[#C9A227] group-hover:ring-[#C9A227]">
                  <Play size={11} fill="white" className="text-white" />
                </span>
                <span>Watch Our Story</span>
              </a>
            </div>

            {/* ============ STATS ============ */}
            <div
              className="hero-fade-up mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
              style={{ animationDelay: "1.15s" }}
            >
              {heroStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="group">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-[#C9A227]/40 group-hover:bg-[#C9A227]/15">
                        <Icon size={13} className="text-[#C9A227]" />
                      </span>
                      <span className="hero-serif text-xl font-bold text-white md:text-2xl">
                        {stat.value}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <div
          className={`hero-fade-up absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70`}
          style={{ animationDelay: "1.4s" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
          <div className="hero-scroll-chevron flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F9FC] to-transparent" />
      </section>
    </>
  );
}

export default Hero;