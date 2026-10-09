import { Link } from "react-router-dom";
import {
  Sprout,
  Leaf,
  Droplets,
  Users,
  HeartHandshake,
  TreePine,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Target,
  Globe,
  TrendingUp,
  Award,
  Shield,
  LeafyGreen,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced programs data with unique gradients and metrics
const programs = [
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Supporting farming communities through sustainable and climate-resilient agricultural practices.",
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
    category: "Farming",
    stat: "424",
    statLabel: "WADI Farms",
  },
  {
    icon: Leaf,
    title: "Environment",
    description:
      "Promoting conservation and environmentally responsible development.",
    gradient: "from-green-500 to-lime-600",
    accent: "#16A34A",
    category: "Ecology",
    stat: "50+",
    statLabel: "Villages",
  },
  {
    icon: Droplets,
    title: "Water & Soil Conservation",
    description:
      "Helping communities protect water resources and improve soil health.",
    gradient: "from-cyan-500 to-blue-600",
    accent: "#0891B2",
    category: "Conservation",
    stat: "792",
    statLabel: "Families",
  },
  {
    icon: Users,
    title: "Tribal Development",
    description:
      "Supporting vulnerable communities through sustainable development initiatives.",
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
    category: "Inclusion",
    stat: "529",
    statLabel: "Households",
  },
  {
    icon: HeartHandshake,
    title: "Women Empowerment",
    description:
      "Creating opportunities for women to participate and build sustainable livelihoods.",
    gradient: "from-rose-500 to-pink-600",
    accent: "#E11D48",
    category: "Livelihood",
    stat: "105",
    statLabel: "Families",
  },
  {
    icon: TreePine,
    title: "Community Development",
    description:
      "Working directly with communities to create long-term positive change.",
    gradient: "from-amber-500 to-orange-600",
    accent: "#D97706",
    category: "Grassroots",
    stat: "25+",
    statLabel: "Years",
  },
];

// Program card component
function ProgramCard({ program, index, isVisible }) {
  const Icon = program.icon;

  return (
    <article
      className={`group relative overflow-hidden bg-white transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient border effect on hover */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
        />
        <div className="absolute inset-[1.5px] bg-white transition-all duration-700" />
      </div>

      {/* Radial glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${program.accent}30, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
        {/* Category label */}
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: program.accent }}
          >
            {program.category}
          </span>
          <span
            className="flex h-1.5 w-1.5 rounded-full"
            style={{ background: program.accent }}
          />
        </div>

        {/* Icon */}
        <div className="relative mt-6">
          <div
            className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${program.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl`}
            style={{
              boxShadow: `0 10px 30px -8px ${program.accent}40`,
            }}
          >
            <Icon size={28} className="text-white drop-shadow-sm" strokeWidth={2} />
          </div>

          {/* Decorative pulse ring */}
          <div
            className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-700 group-hover:animate-ping group-hover:opacity-40"
            style={{ borderColor: program.accent, animationDuration: "2.5s" }}
          />
        </div>

        {/* Title */}
        <h3 className="mt-8 font-serif text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-500">
          {program.title}
        </h3>

        {/* Accent divider */}
        <div
          className={`mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r ${program.gradient} transition-all duration-500 group-hover:w-20`}
        />

        {/* Description */}
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">
          {program.description}
        </p>

        {/* Stat footer */}
        <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-3">
          <span
            className="font-serif text-xl font-bold"
            style={{ color: program.accent }}
          >
            {program.stat}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
            {program.statLabel}
          </span>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
          style={{ color: program.accent }}
        >
          <span className="relative">
            Learn More
            <span
              className="absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-500 group-hover:w-full"
              style={{ background: program.accent }}
            />
          </span>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ background: `${program.accent}20` }}
          >
            <ArrowUpRight size={14} style={{ color: program.accent }} />
          </span>
        </a>
      </div>

      {/* Corner number watermark */}
      <span className="pointer-events-none absolute -bottom-6 -right-3 select-none font-serif text-[120px] font-black leading-none text-slate-100/80 transition-all duration-700 group-hover:text-slate-200/90 group-hover:-translate-y-1">
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

function Programs() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const setup = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const observers = [
      setup(heroRef, setHeroVisible),
      setup(gridRef, setGridVisible),
      setup(ctaRef, setCtaVisible),
    ];

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .programs-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .programs-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes programs-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes programs-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes programs-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        .programs-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: programs-shimmer 6s linear infinite;
        }
        
        .programs-float { animation: programs-float 9s ease-in-out infinite; }
        .programs-pulse-soft { animation: programs-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="programs-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-24 text-white md:py-32"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="programs-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="programs-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
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
            <div className="programs-float absolute top-24 right-[12%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="programs-float absolute bottom-32 left-[8%] h-14 w-14 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

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
                Our Work
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`programs-serif mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Turning community needs
              <br />
              into{" "}
              <span className="programs-gradient-text">meaningful action.</span>
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
              className={`mt-7 max-w-3xl text-lg font-medium leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-500 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Six core programs that strengthen communities, protect the
              environment, and build{" "}
              <span className="font-semibold text-white">sustainable futures</span>{" "}
              across rural Karnataka.
            </p>

            {/* Trust pills */}
            <div
              className={`mt-12 flex flex-wrap gap-3 transition-all duration-1000 delay-700 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {[
                { icon: Target, label: "6 Core Programs", gradient: "from-cyan-400 to-blue-500" },
                { icon: Globe, label: "120+ Villages", gradient: "from-emerald-400 to-teal-500" },
                { icon: TrendingUp, label: "25+ Years", gradient: "from-amber-400 to-orange-500" },
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

        {/* ================= PROGRAMS GRID ================= */}
        <section
          ref={gridRef}
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
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2">
                <LeafyGreen size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Six Focus Areas
                </span>
              </div>

              <h2 className="programs-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Programs built around{" "}
                <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                  people and planet.
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
                Each program is designed with communities, for communities —
                responding to local needs with locally-rooted solutions.
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-200/60 shadow-[0_20px_60px_-25px_rgba(11,59,140,0.15)] md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <ProgramCard
                  key={program.title}
                  program={program}
                  index={index}
                  isVisible={gridVisible}
                />
              ))}
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

          <div className="relative mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              {/* Ambient glows inside */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="programs-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="programs-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

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
                <h2 className="programs-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Partner with us to expand{" "}
                  <span className="programs-gradient-text">this work.</span>
                </h2>

                {/* Underline */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Whether through funding, volunteering, or partnership — your
                  support helps us bring these programs to more communities.
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
                    <span>Support a Program</span>
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

export default Programs;