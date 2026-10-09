import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  HeartHandshake,
  Sprout,
  TrendingUp,
  MapPin,
  Award,
  Target,
  Leaf,
  Droplets,
  Sun,
  Globe,
  Shield,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Impact stats with icons and gradients
const stats = [
  {
    value: 6000,
    suffix: "+",
    label: "People Reached",
    description: "Across rural communities in Karnataka",
    icon: Users,
    gradient: "from-[#005EB8] to-[#0E7C7B]",
    accent: "#005EB8",
  },
  {
    value: 105,
    suffix: "",
    label: "Families Supported",
    description: "Through IGA and landless family support",
    icon: HeartHandshake,
    gradient: "from-[#0E7C7B] to-[#16A085]",
    accent: "#0E7C7B",
  },
  {
    value: 369,
    suffix: "",
    label: "Farming Families",
    description: "Benefiting from soil health & micro-irrigation",
    icon: Sprout,
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
  },
  {
    value: 9700,
    suffix: "+",
    label: "Plants Distributed",
    description: "Mango & sapota saplings under dry-land horticulture",
    icon: Leaf,
    gradient: "from-[#C9A227] to-[#E0B53D]",
    accent: "#C9A227",
  },
];

// Approach pillars
const approachPillars = [
  {
    icon: Users,
    title: "Community-Led",
    description: "Communities guide every project from planning to execution.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Locally Rooted",
    description: "Solutions designed to fit local needs, culture, and context.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Sustainable",
    description: "Impact that continues long after a project completes.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Transparent",
    description: "Audited reporting with verifiable field-level data.",
    gradient: "from-purple-500 to-fuchsia-500",
  },
];

// Animated counter hook
function useCountUp(target, duration = 2200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let raf;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

// Format numbers with Indian notation
function formatNumber(num) {
  if (num >= 1000) return num.toLocaleString("en-IN");
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
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle, ${stat.accent}40, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-7 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-slate-300 group-hover:shadow-2xl group-hover:shadow-slate-900/10">
        {/* Top gradient accent */}
        <div
          className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Corner ornament */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-slate-50 to-transparent transition-transform duration-700 group-hover:scale-150" />

        {/* Icon */}
        <div className="relative">
          <div
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
          >
            <Icon size={26} className="text-white" strokeWidth={2} />
          </div>

          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-40"
            style={{ borderColor: stat.accent, animationDuration: "2.5s" }}
          />
        </div>

        {/* Value */}
        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-serif text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {formatNumber(count)}
          </span>
          {stat.suffix && (
            <span
              className="font-serif text-3xl font-black md:text-4xl"
              style={{ color: stat.accent }}
            >
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.15em] text-slate-800">
          {stat.label}
        </p>

        {/* Divider */}
        <div
          className={`mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${stat.gradient} transition-all duration-500 group-hover:w-20`}
        />

        {/* Description */}
        <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
          {stat.description}
        </p>

        {/* Watermark */}
        <div className="pointer-events-none absolute bottom-3 right-3 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.10]">
          <Icon size={90} className="text-slate-900" strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
}

// Approach pillar card
function ApproachPillar({ pillar, index, isVisible }) {
  const Icon = pillar.icon;

  return (
    <div
      className={`group relative transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:bg-white group-hover:shadow-xl">
        {/* Icon */}
        <div className="relative">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
          >
            <Icon size={22} className="text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-serif text-lg font-bold text-slate-900">
          {pillar.title}
        </h3>

        {/* Divider */}
        <div
          className={`mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r ${pillar.gradient} transition-all duration-500 group-hover:w-14`}
        />

        {/* Description */}
        <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
          {pillar.description}
        </p>
      </div>
    </div>
  );
}

function Impact() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [approachVisible, setApproachVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const approachRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const setup = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const observers = [
      setup(heroRef, setHeroVisible),
      setup(statsRef, setStatsVisible),
      setup(approachRef, setApproachVisible),
      setup(ctaRef, setCtaVisible),
    ];

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .impact-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .impact-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes impact-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes impact-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes impact-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        .impact-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: impact-shimmer 6s linear infinite;
        }
        
        .impact-float { animation: impact-float 9s ease-in-out infinite; }
        .impact-pulse-soft { animation: impact-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="impact-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-24 text-white md:py-32"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="impact-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="impact-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0891B2]/10 blur-[120px]" />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Floating ornaments */}
            <div className="impact-float absolute top-24 right-[12%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="impact-float absolute bottom-32 left-[8%] h-14 w-14 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

            {/* Diagonal light streaks */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute -left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl">

            {/* Section Badge */}
            <div
              className={`inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2 backdrop-blur-md transition-all duration-1000 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                Our Impact
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`impact-serif mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Measuring change,
              <br />
              one community{" "}
              <span className="impact-gradient-text">at a time.</span>
            </h1>

            {/* Decorative underline */}
            <div
              className={`mt-8 flex items-center gap-2 transition-all duration-1000 delay-300 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              <span className="h-[3px] w-8 rounded-full bg-[#C9A227]" />
              <span className="h-[3px] w-4 rounded-full bg-white/40" />
            </div>

            {/* Subtitle */}
            <p
              className={`mt-7 max-w-2xl text-lg font-medium leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-500 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Real numbers, real families, and{" "}
              <span className="font-semibold text-white">real field results</span> from
              SPEECH NGO's work across rural Karnataka.
            </p>

            {/* Hero metric pills */}
            <div
              className={`mt-12 flex flex-wrap gap-3 transition-all duration-1000 delay-700 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {[
                { icon: BarChart3, label: "Audited Reporting", gradient: "from-cyan-400 to-blue-500" },
                { icon: MapPin, label: "Field Verified", gradient: "from-emerald-400 to-teal-500" },
                { icon: Award, label: "80G Certified", gradient: "from-amber-400 to-orange-500" },
              ].map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-md"
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${pill.gradient} shadow-sm`}
                    >
                      <Icon size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/90">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section
          ref={statsRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-28"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#005EB8]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#0E7C7B]/5 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #005EB8 1.5px, transparent 0)`,
                backgroundSize: "44px 44px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2">
                <TrendingUp size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Numbers That Matter
                </span>
              </div>

              <h2 className="impact-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Impact you can{" "}
                <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                  measure and trust.
                </span>
              </h2>

              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-600">
                Every figure is backed by field-level verification, audited reporting,
                and the communities we serve alongside.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={index}
                  isVisible={statsVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= APPROACH SECTION ================= */}
        <section
          ref={approachRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-28"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0E7C7B]/5 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">

            {/* Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2">
                <Target size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Our Approach
                </span>
              </div>

              <h2 className="impact-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Sustainable change starts{" "}
                <span className="bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227] bg-clip-text text-transparent">
                  with people.
                </span>
              </h2>

              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-slate-600">
                We work <span className="font-semibold text-[#0B3B8C]">with</span> communities
                rather than simply working <span className="font-semibold text-[#0B3B8C]">for</span> them.
                This helps create solutions that respond to local needs and can
                continue long after a project ends.
              </p>
            </div>

            {/* Approach Pillars */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approachPillars.map((pillar, index) => (
                <ApproachPillar
                  key={pillar.title}
                  pillar={pillar}
                  index={index}
                  isVisible={approachVisible}
                />
              ))}
            </div>

            {/* Quote block */}
            <div
              className={`mt-16 transition-all duration-1000 delay-500 ${
                approachVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-10 text-center md:p-14">
                {/* Top accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

                {/* Corner glows */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#005EB8]/5 blur-3xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#C9A227]/5 blur-3xl" />

                <div className="relative">
                  {/* Quote icon */}
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] shadow-lg">
                    <HeartHandshake size={26} className="text-white" />
                  </div>

                  <p className="impact-serif mx-auto mt-7 max-w-3xl text-xl italic leading-relaxed text-slate-700 md:text-2xl">
                    "When communities lead, change doesn't just happen — it lasts.
                    Every project we build is owned, shaped, and sustained by the
                    people it serves."
                  </p>

                  <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                    <span className="h-px w-12 bg-slate-300" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-slate-500">
                      SPEECH Field Team
                    </span>
                    <span className="h-px w-12 bg-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section
          ref={ctaRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              {/* Ambient glows inside */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="impact-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="impact-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <Globe size={30} className="text-cyan-300" />
                </div>

                {/* Heading */}
                <h2 className="impact-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Be part of the{" "}
                  <span className="impact-gradient-text">next chapter.</span>
                </h2>

                {/* Underline */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Your support helps us reach more families, protect more land, and
                  build stronger communities across Karnataka.
                </p>

                {/* CTAs */}
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/donate"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B3B8C] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-white/30"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#0B3B8C]/30" />
                      <span className="relative h-2 w-2 rounded-full bg-[#0B3B8C]" />
                    </span>
                    <span>Support SPEECH</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
                  >
                    <span>Get In Touch</span>
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Trust markers */}
                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/15 pt-7">
                  <div className="flex items-center gap-2">
                    <Shield size={12} className="text-[#C9A227]" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
                      80G Certified
                    </span>
                  </div>
                  <span className="hidden h-3 w-px bg-white/20 md:block" />
                  <div className="flex items-center gap-2">
                    <Award size={12} className="text-cyan-300" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
                      NGO Darpan Registered
                    </span>
                  </div>
                  <span className="hidden h-3 w-px bg-white/20 md:block" />
                  <div className="flex items-center gap-2">
                    <Leaf size={12} className="text-emerald-300" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
                      Transparent Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Impact;