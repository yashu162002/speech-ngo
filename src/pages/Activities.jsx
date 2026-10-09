import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Sprout,
  Droplets,
  Users,
  Sun,
  Recycle,
  Leaf,
  MapPin,
  Award,
  Calendar,
  TrendingUp,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced activities data with icons and gradient themes
const activities = [
  {
    category: "Climate-resilient agriculture",
    title: "NABARD KfW Soil Health Project",
    description:
      "Climate-resilient farming, soil health improvement, water conservation, micro-irrigation, and sustainable livelihood support for vulnerable farming families.",
    impact: "369 farming families benefited",
    impactDetail: "Nagatihalli Sub Watershed",
    image: "/images/slideshow/slideshow-2.jpg",
    icon: Leaf,
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
    stat: "369",
    statLabel: "Families",
  },
  {
    category: "Agriculture & livelihoods",
    title: "Dry Land Horticulture",
    description:
      "Distribution of mango and sapota saplings, liquid bio-fertilizer demonstration, and farmer training to support horticulture in dry-land areas.",
    impact: "9,700 saplings distributed",
    impactDetail: "5,200 mango + 4,500 sapota",
    image: "/images/slideshow/slideshow-3.jpg",
    icon: Sprout,
    gradient: "from-lime-500 to-green-600",
    accent: "#65A30D",
    stat: "9,700",
    statLabel: "Saplings",
  },
  {
    category: "Water conservation",
    title: "Watershed Development & Micro-Irrigation",
    description:
      "Community-led watershed development, sprinkler micro-irrigation, and natural resource management to improve water availability.",
    impact: "792 families benefited",
    impactDetail: "Nagatihalli watershed project",
    image: "/images/slideshow/slideshow-4.jpg",
    icon: Droplets,
    gradient: "from-cyan-500 to-blue-600",
    accent: "#0891B2",
    stat: "792",
    statLabel: "Families",
  },
  {
    category: "Tribal development",
    title: "NABARD Tribal Development Fund (TDF)",
    description:
      "Support for tribal communities through 1-acre WADI horticulture, income-generating activities (IGA), and direct household beneficiary card distribution.",
    impact: "529 poor households supported",
    impactDetail: "Kallenahalli · Sasalahatti · Bachaboranahatti",
    image: "/images/slideshow/slideshow-8.jpg",
    icon: Users,
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
    stat: "529",
    statLabel: "Households",
  },
  {
    category: "Renewable energy",
    title: "Renewable Energy Training Workshops",
    description:
      "Training on Solar Photovoltaic Systems (SRTVPS), renewable energy adoption, and clean energy solutions at Chitradurga Taluk & District.",
    impact: "Workshops held on 24.01.2020",
    impactDetail: "Community members & leaders trained",
    image: "/images/slideshow/slideshow-6.jpg",
    icon: Sun,
    gradient: "from-amber-500 to-orange-600",
    accent: "#D97706",
    stat: "100+",
    statLabel: "Participants",
  },
  {
    category: "Environment & Conservation",
    title: "Rainwater Harvesting & Waste Management",
    description:
      "Community participation in rooftop rainwater harvesting, solid waste management, and tree plantation across Chikkachelluru village, Challakere.",
    impact: "Awareness & field initiatives",
    impactDetail: "Conducted on 17.10.2019",
    image: "/images/slideshow/slideshow-7.jpg",
    icon: Recycle,
    gradient: "from-green-500 to-emerald-600",
    accent: "#16A34A",
    stat: "50+",
    statLabel: "Workshops",
  },
];

// Hero stat pill
function HeroStatPill({ stat, index, isVisible }) {
  const Icon = stat.icon;
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-md transition-all duration-700 hover:border-white/30 hover:bg-white/[0.10] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${500 + index * 100}ms` }}
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

// Enhanced activity card
function ActivityCard({ activity, index, isVisible }) {
  const Icon = activity.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top gradient accent line */}
      <div
        className={`absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r ${activity.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* ============ IMAGE ============ */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 contrast-[1.06] brightness-[1.03] saturate-[1.08]"
          loading="lazy"
        />

        {/* Layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category Badge */}
        <div className="absolute left-4 top-4 z-20">
          <div
            className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${activity.gradient} px-3 py-1.5 shadow-lg shadow-black/20 backdrop-blur-sm`}
          >
            <Icon size={11} className="text-white" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              {activity.category}
            </span>
          </div>
        </div>

        {/* Stat overlay */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl font-black text-white drop-shadow-lg">
              {activity.stat}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
              {activity.statLabel}
            </span>
          </div>
        </div>

        {/* Icon watermark */}
        <div className="absolute -right-4 -bottom-4 z-10 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.15]">
          <Icon size={140} className="text-white" strokeWidth={1.2} />
        </div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative z-20 flex flex-1 flex-col p-6">

        {/* Title */}
        <h3 className="font-serif text-[20px] font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300">
          {activity.title}
        </h3>

        {/* Divider */}
        <div
          className={`mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${activity.gradient} transition-all duration-500 group-hover:w-16`}
        />

        {/* Description */}
        <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-slate-600">
          {activity.description}
        </p>

        {/* Impact Box */}
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 p-4">
          {/* Subtle accent glow */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]"
            style={{
              background: `radial-gradient(circle at top left, ${activity.accent}, transparent 70%)`,
            }}
          />

          <div className="relative flex items-start gap-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${activity.gradient} shadow-sm transition-transform duration-500 group-hover:scale-110`}
            >
              <TrendingUp size={13} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Impact
              </p>
              <p className="mt-0.5 text-[13.5px] font-bold leading-snug text-slate-800">
                {activity.impact}
              </p>
              <p className="mt-0.5 text-[11.5px] font-medium leading-snug text-slate-500">
                {activity.impactDetail}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <a
          href="https://speech.1ngo.in/"
          target="_blank"
          rel="noreferrer"
          className="group/link mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
          style={{ color: activity.accent }}
        >
          <span className="relative">
            Read on Official Website
            <span
              className="absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-500 group-hover/link:w-full"
              style={{ background: activity.accent }}
            />
          </span>
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 group-hover/link:translate-x-1"
            style={{ background: `${activity.accent}20` }}
          >
            <ArrowRight size={12} style={{ color: activity.accent }} />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Activities() {
  const [isVisible, setIsVisible] = useState(false);
  const heroStatsRef = useRef(null);
  const gridRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (heroStatsRef.current) observer.observe(heroStatsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // Quick hero stats
  const heroStats = [
    { icon: Users, value: "50,000+", label: "Lives Touched", gradient: "from-cyan-400 to-blue-500" },
    { icon: MapPin, value: "120+", label: "Villages", gradient: "from-emerald-400 to-teal-500" },
    { icon: Award, value: "25+", label: "Years", gradient: "from-amber-400 to-orange-500" },
    { icon: TrendingUp, value: "6", label: "Programs", gradient: "from-purple-400 to-fuchsia-500" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .activities-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .activities-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes activities-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes activities-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes activities-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        .activities-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: activities-shimmer 6s linear infinite;
        }
        
        .activities-float { animation: activities-float 9s ease-in-out infinite; }
        
        .activities-pulse-soft { animation: activities-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="activities-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-20 text-white md:py-28">
          {/* Ambient background decorations */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="activities-pulse-soft absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="activities-pulse-soft absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Floating ornaments */}
            <div className="activities-float absolute top-24 right-[12%] h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="activities-float absolute bottom-32 left-[8%] h-12 w-12 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

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
                Action at the Grassroots
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`activities-serif mt-7 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-150 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Our activities.
              <br />
              Real work.{" "}
              <span className="activities-gradient-text">Lasting change.</span>
            </h1>

            {/* Decorative underline */}
            <div
              className={`mt-7 flex items-center gap-2 transition-all duration-1000 delay-300 ${
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
              Discover SPEECH NGO's work in{" "}
              <span className="font-semibold text-white">agriculture, water conservation,
              tribal development, renewable energy</span>, and environmental
              sustainability across rural communities.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <a
                href="#our-activities"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B3B8C] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-white/30"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#0B3B8C]/30" />
                  <span className="relative h-2 w-2 rounded-full bg-[#0B3B8C]" />
                </span>
                <span>Explore Activities</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
              >
                <span>Work With Us</span>
                <ChevronRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Hero Stats */}
            <div
              ref={heroStatsRef}
              className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {heroStats.map((stat, index) => (
                <HeroStatPill
                  key={stat.label}
                  stat={stat}
                  index={index}
                  isVisible={heroVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACTIVITIES GRID ================= */}
        <section
          id="our-activities"
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#005EB8]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#0E7C7B]/5 blur-[120px]" />

            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #005EB8 1.5px, transparent 0)`,
                backgroundSize: "44px 44px",
              }}
            />
          </div>

          <div ref={gridRef} className="relative mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <Sprout size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Our Work on the Ground
                </span>
              </div>

              {/* Heading */}
              <h2 className="activities-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Initiatives that support{" "}
                <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                  sustainable communities.
                </span>
              </h2>

              {/* Underline */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                <span className="h-[3px] w-6 rounded-full bg-[#C9A227]" />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-600">
                These activities feature real field photography from SPEECH NGO's project sites
                across Karnataka — including NABARD TDF tribal development, renewable energy
                workshops, and micro-irrigation initiatives.
              </p>
            </div>

            {/* Grid */}
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity, index) => (
                <ActivityCard
                  key={activity.title}
                  activity={activity}
                  index={index}
                  isVisible={gridVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24">
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              {/* Ambient glows inside */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="activities-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="activities-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

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
                <h2 className="activities-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Support{" "}
                  <span className="activities-gradient-text">community-led development.</span>
                </h2>

                {/* Underline */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Interested in volunteering, supporting an initiative, or exploring a
                  partnership with SPEECH NGO? Get in touch with us.
                </p>

                {/* CTA Buttons */}
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/volunteer"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B3B8C] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-white/30"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#0B3B8C]/30" />
                      <span className="relative h-2 w-2 rounded-full bg-[#0B3B8C]" />
                    </span>
                    <span>Volunteer</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
                  >
                    <span>Contact SPEECH</span>
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Trust markers */}
                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/15 pt-7">
                  <div className="flex items-center gap-2">
                    <Award size={12} className="text-[#C9A227]" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
                      80G Certified
                    </span>
                  </div>
                  <span className="hidden h-3 w-px bg-white/20 md:block" />
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-cyan-300" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
                      Since 1999
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