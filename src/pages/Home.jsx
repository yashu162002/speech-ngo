import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  Sprout,
  Droplets,
  Users,
  Sparkles,
  MapPin,
  Award,
  TrendingUp,
  Leaf,
  Sun,
  ChevronRight,
  Target,
  Globe,
  Shield,
  Calendar,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ActivitiesPreview from "../components/ActivitiesPreview";

// Programs data with gradient themes
const programs = [
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Support farmers with sustainable agricultural practices and stronger livelihoods.",
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
    stat: "424",
    statLabel: "WADI Farms",
  },
  {
    icon: Droplets,
    title: "Water & Environment",
    description:
      "Encourage water conservation, soil protection, and environmental sustainability.",
    gradient: "from-cyan-500 to-blue-600",
    accent: "#0891B2",
    stat: "792",
    statLabel: "Families",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "Work alongside rural communities to support inclusive and lasting development.",
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
    stat: "529",
    statLabel: "Households",
  },
];

// Hero stats
const heroStats = [
  { icon: Users, value: "50,000+", label: "Lives Touched", gradient: "from-cyan-400 to-blue-500" },
  { icon: MapPin, value: "120+", label: "Villages", gradient: "from-emerald-400 to-teal-500" },
  { icon: Award, value: "25+", label: "Years", gradient: "from-amber-400 to-orange-500" },
];

// Trust markers
const trustMarkers = [
  { icon: Shield, label: "80G Certified" },
  { icon: Award, label: "NGO Darpan Registered" },
  { icon: Leaf, label: "Transparent Impact" },
];

// Animated counter hook
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    let startTime = null;
    let raf;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(numericTarget);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

// Hero stat pill
function HeroStatPill({ stat, index, isVisible }) {
  const Icon = stat.icon;
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-md transition-all duration-700 hover:border-white/30 hover:bg-white/[0.10] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${900 + index * 100}ms` }}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${stat.gradient} shadow-md transition-transform duration-500 group-hover:scale-110`}
      >
        <Icon size={15} className="text-white" strokeWidth={2.5} />
      </div>
      <div>
        <p className="font-serif text-lg font-bold leading-none text-white">
          {stat.value}
        </p>
        <p className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.15em] text-cyan-200">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

// Program card
function ProgramCard({ program, index, isVisible }) {
  const Icon = program.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Top gradient accent */}
      <div
        className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${program.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Corner ornament */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-50 to-transparent transition-transform duration-700 group-hover:scale-150" />

      {/* Icon */}
      <div className="relative">
        <div
          className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
        >
          <Icon size={26} className="text-white" strokeWidth={2} />
        </div>

        {/* Pulse ring */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-40`}
          style={{ borderColor: program.accent, animationDuration: "2.5s" }}
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 font-serif text-xl font-bold leading-tight tracking-tight text-slate-900">
        {program.title}
      </h3>

      {/* Accent divider */}
      <div
        className={`mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${program.gradient} transition-all duration-500 group-hover:w-16`}
      />

      {/* Description */}
      <p className="mt-4 leading-relaxed text-slate-600">
        {program.description}
      </p>

      {/* Stat footer */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-3">
        <span className="font-serif text-lg font-bold" style={{ color: program.accent }}>
          {program.stat}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
          {program.statLabel}
        </span>
      </div>
    </article>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [programsVisible, setProgramsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const createObserver = (setter) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
      );
    };

    const observers = [
      { ref: heroRef, setter: setIsVisible },
      { ref: aboutRef, setter: setAboutVisible },
      { ref: programsRef, setter: setProgramsVisible },
      { ref: ctaRef, setter: setCtaVisible },
    ];

    const obs = observers.map(({ ref, setter }) => {
      const observer = createObserver(setter);
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => obs.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .home-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .home-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes home-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes home-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes home-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        @keyframes home-ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        
        .home-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: home-shimmer 6s linear infinite;
        }
        
        .home-float { animation: home-float 9s ease-in-out infinite; }
        .home-pulse-soft { animation: home-pulse-soft 5s ease-in-out infinite; }
        .home-ken-burns { animation: home-ken-burns 15s ease-out infinite alternate; }
      `}</style>

      <main className="home-font">

        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] text-white"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="home-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="home-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0891B2]/10 blur-[120px]" />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Diagonal light streaks */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute -left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
            <div>

              {/* Section Badge */}
              <div
                className={`inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2 backdrop-blur-md transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                  SPEECH NGO · Community Development
                </span>
                <Sparkles size={12} className="text-[#C9A227]" />
              </div>

              {/* Heading */}
              <h1
                className={`home-serif mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                Together, we can build a{" "}
                <span className="home-gradient-text">better future.</span>
              </h1>

              {/* Decorative underline */}
              <div
                className={`mt-7 flex items-center gap-2 transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                <span className="h-[3px] w-8 rounded-full bg-[#C9A227]" />
                <span className="h-[3px] w-4 rounded-full bg-white/40" />
              </div>

              {/* Subtitle */}
              <p
                className={`mt-7 max-w-xl text-lg leading-relaxed text-cyan-100 transition-all duration-1000 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                Supporting communities through{" "}
                <span className="font-semibold text-white">sustainable development,
                agriculture, environmental awareness</span>, and opportunities for a
                brighter tomorrow.
              </p>

              {/* CTAs */}
              <div
                className={`mt-9 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <Link
                  to="/programs"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B3B8C] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-white/30"
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#0B3B8C]/30" />
                    <span className="relative h-2 w-2 rounded-full bg-[#0B3B8C]" />
                  </span>
                  <span>Explore Our Work</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
                >
                  <span>Support Our Mission</span>
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Hero Stats */}
              <div className="mt-12 grid grid-cols-3 gap-3">
                {heroStats.map((stat, index) => (
                  <HeroStatPill
                    key={stat.label}
                    stat={stat}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>

            {/* Right column - image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Ambient glow behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#0E7C7B]/30 via-[#005EB8]/20 to-[#C9A227]/20 blur-3xl" />

              {/* Image frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <img
                  src="https://1ngo.sgp1.digitaloceanspaces.com/media/speech/1NGO-00056-SPEECH-About_Us-2.jpeg"
                  alt="SPEECH NGO community development activity"
                  className="home-ken-burns h-[320px] w-full object-cover md:h-[500px]"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3D]/70 via-transparent to-transparent" />

                {/* Top-left location tag */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                  <MapPin size={11} className="text-[#C9A227]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Chitradurga, Karnataka
                  </span>
                </div>
              </div>

              {/* Floating mission card */}
              <div className="absolute -bottom-5 left-4 max-w-[280px] rounded-2xl border border-slate-200/60 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:left-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#005EB8] to-[#0E7C7B]">
                    <Target size={13} className="text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Our Shared Mission
                  </p>
                </div>
                <p className="home-serif mt-3 text-lg font-bold leading-tight text-slate-900">
                  People. Progress. Sustainability.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                  <span className="h-[2px] w-4 rounded-full bg-[#C9A227]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/0 via-white/0 to-transparent" />
        </section>

        {/* ================= WHO WE ARE SECTION ================= */}
        <section
          ref={aboutRef}
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
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">

              {/* Left: Narrative */}
              <div className="lg:col-span-7">

                {/* Eyebrow */}
                <div
                  className={`inline-flex items-center gap-2 transition-all duration-1000 ${
                    aboutVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <Users size={14} className="text-[#005EB8]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                    Who We Are
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className={`home-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl transition-all duration-1000 delay-100 ${
                    aboutVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  SPEECH
                  <span className="block mt-2 text-xl font-semibold text-slate-600 md:text-2xl">
                    Society for Public Education, Environment, Cultural & Health
                  </span>
                </h2>

                {/* Underline */}
                <div
                  className={`mt-6 flex items-center gap-2 transition-all duration-1000 delay-200 ${
                    aboutVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                  <span className="h-[3px] w-6 rounded-full bg-[#C9A227]" />
                </div>

                {/* Highlight statement */}
                <p
                  className={`mt-6 text-[19px] font-bold leading-relaxed text-[#0B3B8C] md:text-xl transition-all duration-1000 delay-300 ${
                    aboutVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  We promote the usage of{" "}
                  <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                    renewable energy, sustainable livelihoods, soil and water conservation
                  </span>
                  .
                </p>

                {/* Body */}
                <p
                  className={`mt-5 text-[16.5px] leading-relaxed text-slate-600 transition-all duration-1000 delay-400 ${
                    aboutVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  Currently, we are focusing on tribal community development under{" "}
                  <strong className="font-bold text-[#0B3B8C]">NABARD TDF</strong>, which aims
                  to sustainably improve the livelihood of{" "}
                  <strong className="font-bold text-[#0B3B8C]">529 poor households</strong>{" "}
                  across Kallenahalli, Sasalahatti, and Bachaboranahatti villages of Chitradurga
                  Taluk, Karnataka — through 1-acre WADI farms, IGA support, and women empowerment.
                </p>

                {/* CTA */}
                <Link
                  to="/about"
                  className={`group mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.15em] text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-1000 delay-500 hover:border-[#005EB8]/30 hover:bg-white hover:shadow-md ${
                    aboutVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <span>Read Our Full Story</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowRight size={12} className="text-white" />
                  </span>
                </Link>
              </div>

              {/* Right: Trust card */}
              <div
                className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
                  aboutVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 shadow-[0_20px_60px_-25px_rgba(11,59,140,0.2)]">
                  {/* Top accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

                  {/* Corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#005EB8]/5 blur-3xl" />

                  {/* Header */}
                  <div className="relative flex items-center gap-3 pb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] shadow-md">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0E7C7B]">
                        Trust Markers
                      </p>
                      <h3 className="home-serif text-xl font-bold text-slate-900">
                        Why Communities Trust Us
                      </h3>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  {/* Trust items */}
                  <div className="mt-5 space-y-4">
                    {trustMarkers.map((marker, i) => {
                      const Icon = marker.icon;
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white shadow-sm">
                            <Icon size={14} className="text-[#0E7C7B]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13.5px] font-bold text-slate-800">
                              {marker.label}
                            </p>
                          </div>
                          <ChevronRight size={14} className="shrink-0 text-slate-300" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  {/* Bottom stat row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200/60 bg-white p-3">
                      <p className="home-serif text-xl font-bold bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                        50,000+
                      </p>
                      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Lives Touched
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200/60 bg-white p-3">
                      <p className="home-serif text-xl font-bold bg-gradient-to-r from-[#0E7C7B] to-[#C9A227] bg-clip-text text-transparent">
                        120+
                      </p>
                      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Villages
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= PROGRAMS SECTION ================= */}
        <section
          ref={programsRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#0E7C7B]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">

            {/* Header */}
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="inline-flex items-center gap-2">
                  <Globe size={14} className="text-[#005EB8]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                    What We Do
                  </span>
                </div>

                <h2 className="home-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Building{" "}
                  <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                    change together.
                  </span>
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                  <span className="h-[3px] w-6 rounded-full bg-[#C9A227]" />
                </div>
              </div>

              <Link
                to="/programs"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-[#005EB8]/30 hover:bg-white hover:shadow-md"
              >
                <span>View All Programs</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] transition-transform duration-500 group-hover:translate-x-1">
                  <ChevronRight size={12} className="text-white" />
                </span>
              </Link>
            </div>

            {/* Programs Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {programs.map((program, index) => (
                <ProgramCard
                  key={program.title}
                  program={program}
                  index={index}
                  isVisible={programsVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Activities Preview - existing component */}
        <ActivitiesPreview />

        {/* ================= FINAL CTA ================= */}
        <section
          ref={ctaRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left column */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${
                ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-2">
                <HeartHandshake size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Be Part of the Change
                </span>
              </div>

              <h2 className="home-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Every contribution can{" "}
                <span className="bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227] bg-clip-text text-transparent">
                  make a difference.
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                <span className="h-[3px] w-6 rounded-full bg-[#C9A227]" />
              </div>

              <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-slate-600">
                Share your time, collaborate with our team, or enquire about
                supporting community development initiatives.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/volunteer"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:scale-[1.02] hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                    <span className="relative h-2 w-2 rounded-full bg-white" />
                  </span>
                  <span>Volunteer With Us</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-slate-800 backdrop-blur-sm transition-all duration-500 hover:border-[#005EB8]/30 hover:bg-white hover:shadow-md"
                >
                  <span>Contact Us</span>
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right column - card */}
            <div
              className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
                ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-8 text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.4)] md:p-10">
                {/* Ambient glows inside */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="home-pulse-soft absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                  <div className="home-pulse-soft absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <HeartHandshake size={26} className="text-cyan-300" />
                  </div>

                  {/* Heading */}
                  <h3 className="home-serif mt-6 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    Stronger communities start together.
                  </h3>

                  {/* Underline */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                    <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                    <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-[15px] leading-relaxed text-blue-100">
                    Sustainable progress happens when communities, volunteers, and
                    partners work toward shared goals.
                  </p>

                  {/* Decorative icons row */}
                  <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-6">
                    {[Droplets, Sprout, Sun, Users].map((Icon, i) => (
                      <div
                        key={i}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A227]/40 hover:bg-[#C9A227]/15"
                      >
                        <Icon size={14} className="text-white/80" />
                      </div>
                    ))}
                    <div className="ml-auto">
                      <TrendingUp size={18} className="text-cyan-300" />
                    </div>
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