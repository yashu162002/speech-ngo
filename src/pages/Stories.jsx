import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Heart,
  MapPin,
  Calendar,
  User,
  Quote,
  ChevronRight,
  Leaf,
  Sprout,
  Users,
  Shield,
  Award,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced stories data with richer details
const stories = [
  {
    title: "When communities lead, change lasts.",
    category: "Community Development",
    excerpt:
      "How villages in Chitradurga are taking ownership of their development — one household, one field, one decision at a time.",
    image: "/images/slideshow/slideshow-1.jpg",
    location: "Chitradurga, Karnataka",
    date: "Field Story · 2024",
    author: "SPEECH Field Team",
    readTime: "6 min read",
    icon: Users,
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
    featured: true,
  },
  {
    title: "Building sustainable livelihoods through agriculture.",
    category: "Agriculture",
    excerpt:
      "424 tribal families now tend their own 1-acre WADI farms — a story of patience, bio-fertilizers, and growing independence.",
    image: "/images/slideshow/slideshow-3.jpg",
    location: "Kallenahalli Village",
    date: "Field Story · 2024",
    author: "SPEECH Field Team",
    readTime: "5 min read",
    icon: Sprout,
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
    featured: false,
  },
  {
    title: "Protecting natural resources for future generations.",
    category: "Environment",
    excerpt:
      "792 families now benefit from a revitalized watershed — rooftop rainwater harvesting, micro-irrigation, and community-led conservation.",
    image: "/images/slideshow/slideshow-4.jpg",
    location: "Nagatihalli Watershed",
    date: "Field Story · 2024",
    author: "SPEECH Field Team",
    readTime: "7 min read",
    icon: Leaf,
    gradient: "from-cyan-500 to-blue-600",
    accent: "#0891B2",
    featured: false,
  },
];

// Story card
function StoryCard({ story, index, isVisible, isFeatured = false }) {
  const Icon = story.icon;

  if (isFeatured) {
    // Featured card — larger, full-bleed image, editorial layout
    return (
      <article
        className={`group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_25px_70px_-25px_rgba(11,59,140,0.25)] transition-all duration-1000 ease-out hover:-translate-y-2 hover:shadow-[0_35px_90px_-25px_rgba(11,59,140,0.35)] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-[320px] overflow-hidden lg:h-auto lg:min-h-[480px]">
            {story.image ? (
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
            )}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 lg:to-white/20" />

            {/* Featured badge */}
            <div className="absolute left-5 top-5">
              <div
                className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${story.gradient} px-3.5 py-1.5 shadow-lg backdrop-blur-sm`}
              >
                <Sparkles size={11} className="text-white" fill="white" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Featured Story
                </span>
              </div>
            </div>

            {/* Location tag on image */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
              <MapPin size={11} className="text-[#C9A227]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                {story.location}
              </span>
            </div>

            {/* Corner icon watermark */}
            <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-[0.10] transition-opacity duration-700 group-hover:opacity-[0.20]">
              <Icon size={180} className="text-white" strokeWidth={1} />
            </div>
          </div>

          {/* Content side */}
          <div className="relative flex items-center bg-white p-8 md:p-12 lg:p-14">
            {/* Side accent line */}
            <div
              className={`absolute left-0 top-16 h-24 w-[3px] rounded-r-full bg-gradient-to-b ${story.gradient}`}
            />

            <div className="w-full">
              {/* Category */}
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${story.gradient} shadow-md`}
                >
                  <Icon size={14} className="text-white" strokeWidth={2.5} />
                </span>
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: story.accent }}
                >
                  {story.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                {story.title}
              </h2>

              {/* Accent divider */}
              <div
                className={`mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r ${story.gradient} transition-all duration-500 group-hover:w-24`}
              />

              {/* Excerpt */}
              <p className="mt-6 text-[16px] leading-relaxed text-slate-600">
                {story.excerpt}
              </p>

              {/* Meta row */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <User size={12} className="text-slate-400" />
                  <span>{story.author}</span>
                </div>
                <span className="hidden h-3 w-px bg-slate-300 sm:block" />
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-slate-400" />
                  <span>{story.date}</span>
                </div>
                <span className="hidden h-3 w-px bg-slate-300 sm:block" />
                <div className="flex items-center gap-1.5">
                  <BookOpen size={12} className="text-slate-400" />
                  <span>{story.readTime}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="group/cta mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-7 py-4 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:scale-[1.02] hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
              >
                <span>Read Full Story</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-500 group-hover/cta:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard card
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition-all duration-1000 ease-out hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Top gradient accent */}
      <div
        className={`absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r ${story.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        {story.image ? (
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute left-4 top-4 z-20">
          <div
            className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${story.gradient} px-3 py-1.5 shadow-lg backdrop-blur-sm`}
          >
            <Icon size={11} className="text-white" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              {story.category}
            </span>
          </div>
        </div>

        {/* Location on image */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
          <MapPin size={10} className="text-[#C9A227]" />
          <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-white">
            {story.location}
          </span>
        </div>

        {/* Icon watermark */}
        <div className="absolute -right-4 -bottom-4 z-10 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.15]">
          <Icon size={130} className="text-white" strokeWidth={1.2} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="font-serif text-xl font-bold leading-snug tracking-tight text-slate-900">
          {story.title}
        </h3>

        {/* Accent divider */}
        <div
          className={`mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${story.gradient} transition-all duration-500 group-hover:w-16`}
        />

        {/* Excerpt */}
        <p className="mt-4 flex-1 text-[14px] leading-relaxed text-slate-600">
          {story.excerpt}
        </p>

        {/* Meta */}
        <div className="mt-5 flex items-center gap-3 text-[10.5px] font-medium text-slate-500">
          <div className="flex items-center gap-1">
            <Calendar size={10} className="text-slate-400" />
            <span>{story.date}</span>
          </div>
          <span className="h-2.5 w-px bg-slate-300" />
          <div className="flex items-center gap-1">
            <BookOpen size={10} className="text-slate-400" />
            <span>{story.readTime}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="group/link mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
          style={{ color: story.accent }}
        >
          <span className="relative">
            Read Story
            <span
              className="absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-500 group-hover/link:w-full"
              style={{ background: story.accent }}
            />
          </span>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            style={{ background: `${story.accent}20` }}
          >
            <ArrowUpRight size={13} style={{ color: story.accent }} />
          </span>
        </a>
      </div>
    </article>
  );
}

function Stories() {
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

  const featuredStory = stories.find((s) => s.featured);
  const standardStories = stories.filter((s) => !s.featured);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .stories-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .stories-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes stories-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes stories-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes stories-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        .stories-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: stories-shimmer 6s linear infinite;
        }
        
        .stories-float { animation: stories-float 9s ease-in-out infinite; }
        .stories-pulse-soft { animation: stories-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="stories-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-24 text-white md:py-32"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="stories-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="stories-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
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
            <div className="stories-float absolute top-24 right-[12%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="stories-float absolute bottom-32 left-[8%] h-14 w-14 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

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
                Stories
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`stories-serif mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              The people behind
              <br />
              the{" "}
              <span className="stories-gradient-text">impact.</span>
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
              Real voices, real families, and{" "}
              <span className="font-semibold text-white">real field stories</span> from
              SPEECH NGO's work across rural Karnataka.
            </p>

            {/* Pull quote on hero */}
            <div
              className={`mt-10 max-w-2xl transition-all duration-1000 delay-700 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="relative rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-md">
                <Quote size={28} className="absolute -top-3 left-5 text-[#C9A227]" fill="#C9A227" />
                <p className="stories-serif mt-2 text-lg italic leading-relaxed text-white/90">
                  "Every number we share has a name, a face, and a story
                  behind it. These are theirs."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/20" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    SPEECH Field Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STORIES GRID ================= */}
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
                <BookOpen size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  From the Field
                </span>
              </div>

              <h2 className="stories-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Stories that shape{" "}
                <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                  who we serve.
                </span>
              </h2>

              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
                <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
              </div>
            </div>

            {/* Featured Story */}
            {featuredStory && (
              <div className="mb-10">
                <StoryCard
                  story={featuredStory}
                  index={0}
                  isVisible={gridVisible}
                  isFeatured={true}
                />
              </div>
            )}

            {/* Standard Stories Grid */}
            <div className="grid gap-7 md:grid-cols-2">
              {standardStories.map((story, index) => (
                <StoryCard
                  key={story.title}
                  story={story}
                  index={index}
                  isVisible={gridVisible}
                  isFeatured={false}
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

          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              {/* Ambient glows inside */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="stories-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="stories-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

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
                  <Heart size={30} className="text-cyan-300" fill="currentColor" />
                </div>

                {/* Heading */}
                <h2 className="stories-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Your story can be the{" "}
                  <span className="stories-gradient-text">next one.</span>
                </h2>

                {/* Underline */}
                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Whether you volunteer, donate, or partner with us — you help write
                  the next chapter of these communities.
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
                    <span>Share Your Story</span>
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

export default Stories;