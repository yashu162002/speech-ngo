import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Leaf, Droplets, Sun, Recycle, Users, Wind, Award, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced activity data with icons and gradient themes
const activities = [
  {
    title: "NABARD KfW Soil Health Project",
    category: "Climate-resilient agriculture",
    description:
      "Helping farming families improve soil health, conserve water, adopt climate-resilient farming practices, and strengthen livelihoods.",
    impact: "369 vulnerable farming families benefited",
    image: "/images/slideshow/slideshow-2.jpg",
    icon: Leaf,
    gradient: "from-emerald-500 to-teal-600",
    accent: "emerald",
    stat: "369",
    statLabel: "families",
  },
  {
    title: "Dry Land Horticulture",
    category: "Sustainable livelihoods",
    description:
      "Supporting farmers through mango and sapota sapling distribution and training in horticulture cultivation.",
    impact: "9,700 saplings distributed",
    image: "/images/slideshow/slideshow-3.jpg",
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-600",
    accent: "amber",
    stat: "9,700",
    statLabel: "saplings",
  },
  {
    title: "Watershed & Micro-Irrigation",
    category: "Water conservation",
    description:
      "Working with village communities to conserve water, improve natural resources, and support micro-irrigation systems.",
    impact: "792 families benefited in Nagatihalli watershed",
    image: "/images/slideshow/slideshow-4.jpg",
    icon: Droplets,
    gradient: "from-blue-500 to-cyan-600",
    accent: "blue",
    stat: "792",
    statLabel: "families",
  },
  {
    title: "Tribal Community Development",
    category: "Inclusive development",
    description:
      "Supporting tribal households through 1-acre WADI horticulture development, IGA support, and direct beneficiary card distribution.",
    impact: "529 households targeted under NABARD TDF",
    image: "/images/slideshow/slideshow-8.jpg",
    icon: Users,
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "purple",
    stat: "529",
    statLabel: "households",
  },
  {
    title: "Renewable Energy Training",
    category: "Community awareness",
    description:
      "Organizing training and awareness programs on Solar Photovoltaic Systems (SRTVPS), renewable energy, and clean tech.",
    impact: "Workshops conducted at Chitradurga Taluk & District",
    image: "/images/slideshow/slideshow-6.jpg",
    icon: Sun,
    gradient: "from-yellow-500 to-amber-600",
    accent: "yellow",
    stat: "100+",
    statLabel: "participants",
  },
  {
    title: "Rainwater Harvesting & Waste",
    category: "Environmental protection",
    description:
      "Encouraging communities to protect the environment through rooftop rainwater harvesting, solid waste management, and tree plantation.",
    impact: "Training workshops held at Chikkachelluru village",
    image: "/images/slideshow/slideshow-7.jpg",
    icon: Recycle,
    gradient: "from-green-500 to-emerald-600",
    accent: "green",
    stat: "50+",
    statLabel: "workshops",
  },
];

// Animated counter hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(target.replace(/,/g, ""), 10);
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end.toLocaleString());
        clearInterval(timer);
      } else {
        setCount(Math.floor(start).toLocaleString());
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return { count, ref };
}

// Activity card component
function ActivityCard({ activity, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { count, ref } = useCountUp(activity.stat, 1800);
  const IconComponent = activity.icon;

  return (
    <article
      ref={ref}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl"
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border glow on hover */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${activity.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
        style={{ padding: "1px" }}
      >
        <div className="h-full w-full rounded-3xl bg-white" />
      </div>

      {/* Shine effect */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-3xl">
        <div
          className={`absolute -inset-x-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
            isHovered ? "left-full" : "left-[-100%]"
          }`}
        />
      </div>

      {/* Image section */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${activity.gradient} px-3.5 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-lg backdrop-blur-sm`}
          >
            <IconComponent size={12} />
            {activity.category}
          </span>
        </div>

        {/* Stat overlay */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-white drop-shadow-lg">
              {count}
            </span>
            <span className="text-sm font-semibold text-white/80 uppercase tracking-wide">
              {activity.statLabel}
            </span>
          </div>
        </div>

        {/* Icon watermark */}
        <div className="absolute -right-4 -bottom-4 z-10 opacity-[0.08]">
          <IconComponent size={120} className="text-white" />
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-20 flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
          {activity.title}
        </h3>

        <p className="mt-3 flex-1 leading-7 text-slate-600">
          {activity.description}
        </p>

        {/* Impact box */}
        <div className="mt-5 relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${activity.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]`}
          />
          <div className="relative flex items-start gap-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${activity.gradient} shadow-sm`}
            >
              <Award size={14} className="text-white" />
            </div>
            <p className="text-sm font-semibold leading-6 text-slate-700">
              {activity.impact}
            </p>
          </div>
        </div>

        {/* CTA link */}
        <a
          href="https://speech.1ngo.in/"
          target="_blank"
          rel="noreferrer"
          className={`mt-5 inline-flex items-center gap-2 font-bold transition-all duration-300 group/link text-${activity.accent}-600 hover:text-${activity.accent}-800`}
        >
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Official website
          </span>
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}

export default function ActivitiesPreview() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white px-6 py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header section */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Our work on the ground
              </span>
            </div>

            {/* Heading with gradient text */}
            <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Activities creating
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                lasting change
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From sustainable agriculture to water conservation, renewable energy, and
              tribal livelihoods, discover the initiatives through which SPEECH works
              with rural communities.
            </p>
          </div>

          {/* Explore all link */}
          <Link
            to="/activities"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-blue-200/60 bg-white/80 px-6 py-3 font-bold text-blue-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
          >
            <span>Explore all activities</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover:bg-blue-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.title} activity={activity} index={index} />
          ))}
        </div>

        {/* Footer note with decorative line */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <p className="text-xs font-medium leading-6 text-slate-400 text-center max-w-md">
            Impact figures and field photography are drawn from official SPEECH NGO
            documentation and project reporting.
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}