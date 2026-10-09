import { Users, Sprout, Droplets, MapPin, TrendingUp, Award, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Stats data with gradient themes
const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Empowering rural families and vulnerable communities across Karnataka.",
    gradient: "from-[#005EB8] to-[#0E7C7B]",
    accent: "#005EB8",
  },
  {
    icon: Sprout,
    value: 120,
    suffix: "+",
    label: "Villages Covered",
    description: "Promoting sustainable agriculture and natural resource management.",
    gradient: "from-[#0E7C7B] to-[#16A085]",
    accent: "#0E7C7B",
  },
  {
    icon: Droplets,
    value: 15000,
    suffix: "+",
    label: "Hectares Restored",
    description: "Enhancing soil health and water conservation structures.",
    gradient: "from-[#0891B2] to-[#005EB8]",
    accent: "#0891B2",
  },
  {
    icon: MapPin,
    value: 25,
    suffix: "+",
    label: "Years of Service",
    description: "Dedicated to community development and environmental preservation.",
    gradient: "from-[#C9A227] to-[#E0B53D]",
    accent: "#C9A227",
  },
];

// Animated counter hook
function useCountUp(target, duration = 2200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

// Format numbers with proper Indian/International notation
function formatNumber(num) {
  if (num >= 1000) {
    return num.toLocaleString("en-IN");
  }
  return num.toString();
}

// Individual stat card
function StatCard({ stat, index, isVisible }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, 2000 + index * 200, isVisible);

  return (
    <div
      className={`group relative transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Ambient glow on hover */}
      <div
        className={`pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40`}
      />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:shadow-2xl group-hover:shadow-black/20">
        
        {/* Top gradient accent line */}
        <div
          className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Corner ornament */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/[0.06] to-transparent transition-transform duration-700 group-hover:scale-150" />

        {/* Icon */}
        <div className="relative mb-6">
          <div
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg shadow-black/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon size={26} className="text-white drop-shadow-sm" strokeWidth={2} />
          </div>
          {/* Pulse ring on hover */}
          <div
            className={`absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-100`}
            style={{ animationDuration: "2s" }}
          />
        </div>

        {/* Value + Suffix */}
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-4xl font-black tracking-tight text-white md:text-5xl">
            {formatNumber(count)}
          </span>
          <span
            className="font-serif text-3xl font-black md:text-4xl"
            style={{ color: stat.accent }}
          >
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <div className="mt-3 text-base font-bold tracking-tight text-white/95">
          {stat.label}
        </div>

        {/* Divider */}
        <div
          className={`mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${stat.gradient} transition-all duration-500 group-hover:w-20`}
        />

        {/* Description */}
        <p className="mt-3 text-[13.5px] leading-relaxed text-white/70">
          {stat.description}
        </p>

        {/* Bottom-right floating icon watermark */}
        <div className="pointer-events-none absolute bottom-4 right-4 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]">
          <Icon size={72} className="text-white" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .impact-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .impact-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes impact-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes impact-float-ornament {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        
        @keyframes impact-particle-rise {
          0% { transform: translateY(100%) scale(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
        
        @keyframes impact-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes impact-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        
        .impact-gradient-text {
          background: linear-gradient(90deg, #FFFFFF, #C9E8FF, #7FE7E0, #FFE5A0, #FFFFFF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: impact-shimmer 6s linear infinite;
        }
        
        .impact-float-ornament {
          animation: impact-float-ornament 9s ease-in-out infinite;
        }
        
        .impact-particle {
          animation: impact-particle-rise linear infinite;
        }
        
        .impact-pulse-soft {
          animation: impact-pulse-soft 4s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="impact-font relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] py-20 md:py-28"
      >
        {/* ================= BACKGROUND DECORATIONS ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Radial color glows */}
          <div className="impact-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
          <div className="impact-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0891B2]/10 blur-[120px]" />

          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Diagonal decorative lines */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute -left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute left-3/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          {/* Floating ornaments */}
          <div className="impact-float-ornament absolute top-20 right-[10%] h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
          <div className="impact-float-ornament absolute bottom-24 left-[8%] h-14 w-14 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm" style={{ animationDelay: "3s" }} />
          <div className="impact-float-ornament absolute top-1/3 left-[15%] h-8 w-8 rotate-45 rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "5s" }} />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* ============ HEADER ============ */}
          <div
            className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A227] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A227]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/90">
                Our Reach & Impact
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h2 className="impact-serif mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Making a{" "}
              <span className="impact-gradient-text">measurable difference</span>
              <br />
              in communities
            </h2>

            {/* Decorative underline */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
              <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
              <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
              <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
              <span className="h-[3px] w-12 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
            </div>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Numbers that tell the story of our journey alongside communities —
              built on trust, transparency, and measurable results.
            </p>
          </div>

          {/* ============ STATS GRID ============ */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* ============ BOTTOM TRUST BAR ============ */}
          <div
            className={`mt-14 flex flex-col items-center gap-6 transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Divider */}
            <div className="flex w-full items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
                <Award size={13} className="text-[#C9A227]" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Trust text */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              <div className="flex items-center gap-2">
                <TrendingUp size={13} className="text-[#0E7C7B]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Audited Impact Reports
                </span>
              </div>
              <span className="hidden h-3 w-px bg-white/15 md:block" />
              <div className="flex items-center gap-2">
                <Award size={13} className="text-[#C9A227]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  NGO Darpan Registered
                </span>
              </div>
              <span className="hidden h-3 w-px bg-white/15 md:block" />
              <div className="flex items-center gap-2">
                <Users size={13} className="text-[#005EB8]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Community Verified
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom gradient edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      </section>
    </>
  );
}

export default ImpactStats;