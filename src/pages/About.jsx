import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  Sun,
  Droplets,
  Sprout,
  Users,
  Award,
  Sparkles,
  MapPin,
  Target,
  TrendingUp,
  BookOpen,
  Shield,
  Leaf,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ImageSlideshow from "../components/ImageSlideshow";

// Hero stats with icons and gradients
const heroStats = [
  {
    value: "529",
    label: "Underserved Households",
    sublabel: "Supported under NABARD TDF",
    icon: Users,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    value: "424",
    label: "1-Acre WADI Farms",
    sublabel: "Developed for tribal families",
    icon: Sprout,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    value: "105",
    label: "Landless Families",
    sublabel: "IGA livelihood supported",
    icon: HeartHandshake,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    value: "3",
    label: "Villages Covered",
    sublabel: "In Chitradurga District",
    icon: MapPin,
    gradient: "from-purple-400 to-fuchsia-500",
  },
];

// Core focus areas
const focusAreas = [
  {
    icon: Sprout,
    title: "Sustainable Livelihoods & WADI",
    description: "1-acre WADI orchards for 424 land-holding tribal families.",
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
  },
  {
    icon: Droplets,
    title: "Soil & Water Conservation",
    description: "Rooftop rainwater harvesting, micro-irrigation & sub-watershed projects.",
    gradient: "from-sky-500 to-blue-600",
    accent: "#0891B2",
  },
  {
    icon: Sun,
    title: "Renewable Energy Awareness",
    description: "Promoting clean energy adoption & solid waste management.",
    gradient: "from-amber-500 to-orange-600",
    accent: "#D97706",
  },
  {
    icon: Users,
    title: "Women Empowerment & Education",
    description: "Advancing female education & IGA support for 105 landless families.",
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
  },
];

// Animated counter hook
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const numericTarget = parseInt(target.replace(/,/g, ""), 10);
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

// Hero stat card
function HeroStatCard({ stat, index, isVisible }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, 1800 + index * 200, isVisible);

  return (
    <div
      className={`group relative transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${400 + index * 120}ms` }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/30 group-hover:bg-white/[0.10] group-hover:shadow-xl group-hover:shadow-cyan-500/10">
        {/* Top accent gradient */}
        <div
          className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${stat.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Icon */}
        <div className="mb-3 flex items-center justify-between">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${stat.gradient} shadow-md transition-transform duration-500 group-hover:scale-110`}
          >
            <Icon size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <Sparkles
            size={11}
            className="text-cyan-300/60 transition-all duration-500 group-hover:rotate-12 group-hover:text-cyan-300"
          />
        </div>

        {/* Value */}
        <p className="font-serif text-3xl font-black tracking-tight text-white md:text-4xl">
          {count}
        </p>

        {/* Label */}
        <p className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.15em] text-cyan-200">
          {stat.label}
        </p>

        {/* Sublabel */}
        <p className="mt-1 text-[10px] font-medium leading-tight text-white/50">
          {stat.sublabel}
        </p>
      </div>
    </div>
  );
}

// Focus area card
function FocusAreaCard({ area, index, isVisible }) {
  const Icon = area.icon;

  return (
    <li
      className={`group relative flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-700 ease-out hover:border-slate-200/80 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
      style={{ transitionDelay: `${600 + index * 120}ms` }}
    >
      {/* Icon container */}
      <div className="relative shrink-0">
        <div
          className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
        >
          <Icon size={22} className="text-white" strokeWidth={2} />
        </div>
        {/* Pulse ring */}
        <div
          className={`absolute inset-0 rounded-xl border-2 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-40`}
          style={{ borderColor: area.accent, animationDuration: "2.5s" }}
        />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h4 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
          {area.title}
        </h4>
        <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
          {area.description}
        </p>
      </div>

      {/* Arrow indicator */}
      <ChevronRight
        size={16}
        className="mt-1 shrink-0 self-start text-slate-300 opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100"
        style={{ color: area.accent }}
      />
    </li>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .about-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .about-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes about-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes about-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes about-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes about-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        @keyframes about-ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        
        .about-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: about-shimmer 6s linear infinite;
        }
        
        .about-float { animation: about-float 9s ease-in-out infinite; }
        
        .about-pulse-soft { animation: about-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="about-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-20 text-white md:py-28">
          {/* Ambient background decorations */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="about-pulse-soft absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="about-pulse-soft absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Floating ornaments */}
            <div className="about-float absolute top-24 right-[12%] h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="about-float absolute bottom-32 left-[8%] h-12 w-12 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

            {/* Diagonal light streaks */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute -left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>

          <div ref={sectionRef} className="relative mx-auto max-w-7xl">

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
                About SPEECH NGO
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`about-serif mt-7 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-150 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Society for Public Education,
              <br />
              Environment, Cultural &{" "}
              <span className="about-gradient-text">Health.</span>
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
              className={`mt-7 max-w-3xl text-lg font-medium leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              We promote the usage of renewable energy, sustainable livelihoods,
              soil and water conservation alongside{" "}
              <span className="font-semibold text-white">community-led development</span>.
            </p>

            {/* Key Impact Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((stat, index) => (
                <HeroStatCard
                  key={stat.label}
                  stat={stat}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/0 via-white/0 to-transparent" />
        </section>

        {/* ================= MISSION SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-28">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#005EB8]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#0E7C7B]/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">

              {/* ============ LEFT: MISSION NARRATIVE ============ */}
              <div className="space-y-6 lg:col-span-7">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2">
                  <Target size={14} className="text-[#005EB8]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                    Our Foundation & Mission
                  </span>
                </div>

                {/* Heading */}
                <h2 className="about-serif text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Grassroots Empowerment for{" "}
                  <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                    Marginalized Communities.
                  </span>
                </h2>

                {/* Decorative underline */}
                <div className="flex items-center gap-2">
                  <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                  <span className="h-[3px] w-6 rounded-full bg-[#C9A227]" />
                </div>

                {/* Pull quote */}
                <blockquote className="relative rounded-2xl border-l-4 border-[#005EB8] bg-gradient-to-br from-slate-50 to-blue-50/50 py-5 pl-6 pr-5">
                  <div className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] shadow-md">
                    <BookOpen size={11} className="text-white" />
                  </div>
                  <p className="text-lg font-medium leading-relaxed text-slate-800 md:text-xl">
                    SPEECH (Society for Public Education, Environment, Cultural & Health)
                    has been working with economically marginalized sections of society,
                    aiming to improve the{" "}
                    <span className="font-semibold text-[#0B3B8C]">health, education, sustainable livelihood</span>,
                    environment, and socio-economic conditions of these underserved families
                    at the grassroots level.
                  </p>
                </blockquote>

                {/* Body paragraphs */}
                <p className="text-[16.5px] leading-relaxed text-slate-700">
                  Currently, we are focusing on tribal community development under{" "}
                  <strong className="font-bold text-[#0B3B8C]">NABARD TDF</strong>, which aims to
                  sustainably improve the livelihood of{" "}
                  <strong className="font-bold text-[#0B3B8C]">529 poor households</strong> in
                  Kallenahalli, Sasalahatti, and Bachaboranahatti villages of Chitradurga Taluk,
                  Chitradurga District, Karnataka.
                </p>

                <p className="text-[16.5px] leading-relaxed text-slate-700">
                  The project involves developing a{" "}
                  <strong className="font-bold text-[#0B3B8C]">one-acre WADI</strong> for each of
                  the 424 land-holding tribal families and providing{" "}
                  <strong className="font-bold text-[#0B3B8C]">Income Generating Activities (IGA) support</strong>{" "}
                  to 105 landless families, who depend on daily wages for their livelihood. The
                  project aims to enhance the social and economic status of these vulnerable communities.
                </p>

                {/* Highlight callout */}
                <div className="relative overflow-hidden rounded-2xl border border-cyan-200/60 bg-gradient-to-br from-cyan-50 via-white to-blue-50/50 p-6">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-200/30 blur-2xl" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md">
                      <HeartHandshake size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                        Additional Focus
                      </p>
                      <p className="mt-1.5 text-[15.5px] leading-relaxed text-slate-800">
                        We are promoting{" "}
                        <strong className="font-bold text-slate-900">women empowerment</strong>{" "}
                        by advancing female education in these areas, which requires kind support
                        from generous donors and partners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/donate"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                      <span className="relative h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span>Support Female Education & WADI</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-slate-800 backdrop-blur-sm transition-all duration-500 hover:border-[#005EB8]/30 hover:bg-white hover:shadow-md"
                  >
                    <span>Partner with SPEECH</span>
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              {/* ============ RIGHT: FOCUS AREAS CARD ============ */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 shadow-[0_20px_60px_-25px_rgba(11,59,140,0.2)]">
                  {/* Top gradient accent */}
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
                        Our Pillars
                      </p>
                      <h3 className="about-serif text-xl font-bold text-slate-900">
                        Core Focus Areas
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  {/* Focus areas list */}
                  <ul className="relative mt-4 space-y-1">
                    {focusAreas.map((area, index) => (
                      <FocusAreaCard
                        key={area.title}
                        area={area}
                        index={index}
                        isVisible={isVisible}
                      />
                    ))}
                  </ul>

                  {/* Bottom badge */}
                  <div className="mt-6 flex items-center justify-center gap-3 border-t border-slate-200/70 pt-5">
                    <div className="flex items-center gap-1.5">
                      <Shield size={11} className="text-[#C9A227]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        80G Certified
                      </span>
                    </div>
                    <span className="h-3 w-px bg-slate-300" />
                    <div className="flex items-center gap-1.5">
                      <TrendingUp size={11} className="text-[#0E7C7B]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Audited Reports
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SLIDESHOW SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1018] via-slate-950 to-[#0A1018] py-20 text-white md:py-24">
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#005EB8]/15 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/15 blur-[140px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            {/* Header */}
            <div className="mx-auto mb-12 max-w-3xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                  Field Photography & Impact Gallery
                </span>
              </div>

              {/* Heading */}
              <h2 className="about-serif mt-6 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                SPEECH NGO Ground Action{" "}
                <span className="about-gradient-text">in Karnataka.</span>
              </h2>

              {/* Underline */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
              </div>

              {/* Subtitle */}
              <p className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-relaxed text-slate-300">
                Explore our real project photos featuring NABARD officials' visits,
                watershed management, micro-irrigation, and tribal community participation.
              </p>
            </div>

            {/* Slideshow */}
            <ImageSlideshow />
          </div>

          {/* Bottom edge */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0E7C7B]/40 to-transparent" />
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24">
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              {/* Ambient glows inside */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="about-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="about-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

                {/* Dot grid */}
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
                  <HeartHandshake size={30} className="text-cyan-300" />
                </div>

                {/* Heading */}
                <h2 className="about-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Help Us Enhance Livelihoods &{" "}
                  <span className="about-gradient-text">Promote Education.</span>
                </h2>

                {/* Underline */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Your generous donor support empowers tribal families, advances female
                  education, and ensures lasting environmental progress.
                </p>

                {/* CTA Buttons */}
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/donate"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B3B8C] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-white/30"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#0B3B8C]/30" />
                      <span className="relative h-2 w-2 rounded-full bg-[#0B3B8C]" />
                    </span>
                    <span>Donate to SPEECH</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
                  >
                    <span>Contact Us</span>
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