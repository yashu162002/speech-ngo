import { Heart, ArrowRight, Sparkles, Shield, HandHeart, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function DonationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&display=swap');
        
        .donation-cta-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .donation-brand-font {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
        
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        .animate-pulse-heart { animation: pulse-heart 2s ease-in-out infinite; }
        .animate-gradient-shift { 
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: translateX(-100%) skewX(-15deg);
        }
        
        .shine-effect:hover::after {
          animation: shine 1s ease-out;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="donate"
        className="donation-cta-font relative overflow-hidden bg-gradient-to-br from-[#FFC72C] via-[#FFD75C] to-[#FFC72C] py-20 md:py-28"
      >
        {/* ================= DECORATIVE BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large radial glow */}
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#005EB8]/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#0E7C7B]/10 blur-3xl" />
          
          {/* Floating decorative shapes */}
          <div className="animate-float-slow absolute top-16 right-[15%] h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm rotate-12" />
          <div className="animate-float-slower absolute bottom-20 left-[10%] h-14 w-14 rounded-full bg-[#005EB8]/15 backdrop-blur-sm" />
          <div className="animate-float-slow absolute top-1/2 left-[5%] h-8 w-8 rounded-lg bg-white/30 rotate-45" />
          
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #005EB8 1.5px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

            {/* ================= LEFT CONTENT ================= */}
            <div
              className={`max-w-3xl transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#005EB8]/20 bg-white/60 px-5 py-2.5 backdrop-blur-md shadow-sm">
                <div className="relative flex h-6 w-6 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#005EB8]/30" />
                  <Heart
                    size={16}
                    fill="#005EB8"
                    className="relative animate-pulse-heart text-[#005EB8]"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#005EB8]">
                  Make a Difference
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 leading-[1.05]">
                <span className="donation-brand-font block text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
                  Your support can
                </span>
                <span className="donation-brand-font relative mt-2 block text-5xl font-bold tracking-tight md:text-7xl">
                  <span className="bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-clip-text text-transparent animate-gradient-shift">
                    create lasting change.
                  </span>
                  {/* Decorative underline */}
                  <svg
                    className="absolute -bottom-3 left-0 h-3 w-64 md:w-96"
                    viewBox="0 0 400 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C80 2 160 2 240 6C280 8 340 10 398 4"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="400" y2="0">
                        <stop stopColor="#005EB8" />
                        <stop offset="0.5" stopColor="#0E7C7B" />
                        <stop offset="1" stopColor="#C9A227" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              {/* Description */}
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-gray-800 md:text-xl">
                Every contribution helps us work alongside communities and create
                opportunities for a more{" "}
                <span className="font-semibold text-[#005EB8] underline decoration-[#005EB8]/30 decoration-2 underline-offset-4">
                  sustainable future
                </span>
                .
              </p>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#005EB8]/10">
                    <Shield size={13} className="text-[#005EB8]" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                    80G Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0E7C7B]/10">
                    <Users size={13} className="text-[#0E7C7B]" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                    10,000+ Lives Touched
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A227]/20">
                    <Sparkles size={13} className="text-[#B8860B]" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Transparent Reporting
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT CTA ================= */}
            <div
              className={`relative shrink-0 transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Glow behind button */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#005EB8]/30 via-[#0E7C7B]/30 to-[#005EB8]/30 blur-2xl" />

              {/* Main CTA Button */}
              <a
                href="/donate"
                className="shine-effect group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#005EB8] via-[#0068C9] to-[#00458a] bg-[length:200%_100%] px-10 py-7 shadow-2xl shadow-[#005EB8]/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[#005EB8]/60"
                style={{ backgroundSize: "200% 100%" }}
              >
                {/* Animated shine sweep */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute -inset-x-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 group-hover:left-full" />
                </span>

                {/* Icon with circle */}
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30 transition-all duration-500 group-hover:bg-[#C9A227] group-hover:ring-[#C9A227]">
                  <HandHeart size={22} className="text-white transition-transform duration-500 group-hover:scale-110" />
                </span>

                {/* Text */}
                <span className="relative flex flex-col items-start">
                  <span className="donation-brand-font text-lg font-bold tracking-wide text-white">
                    Donate Now
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Secure & Instant
                  </span>
                </span>

                {/* Arrow */}
                <ArrowRight
                  size={22}
                  className="relative ml-2 text-white transition-transform duration-500 group-hover:translate-x-2"
                />
              </a>

              {/* Bottom micro-text */}
              <p className="mt-4 text-center text-xs font-medium text-gray-700/80">
                Every rupee counts. Every act of kindness matters.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#005EB8]/30 to-transparent" />
      </section>
    </>
  );
}

export default DonationCTA;