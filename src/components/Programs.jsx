import {
  Sprout,
  Leaf,
  Droplets,
  Users,
  HeartHandshake,
  TreePine,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced program data with unique accent colors and category labels
const programs = [
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    category: "Farming",
    description:
      "Supporting farming communities with sustainable and climate-resilient agricultural practices.",
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
    glow: "rgba(5, 150, 105, 0.35)",
  },
  {
    icon: Leaf,
    title: "Environment",
    category: "Ecology",
    description:
      "Protecting natural resources and encouraging environmentally responsible development.",
    gradient: "from-green-500 to-lime-600",
    accent: "#16A34A",
    glow: "rgba(22, 163, 74, 0.35)",
  },
  {
    icon: Droplets,
    title: "Water & Soil",
    category: "Conservation",
    description:
      "Working with communities to improve water conservation and soil health.",
    gradient: "from-cyan-500 to-blue-600",
    accent: "#0891B2",
    glow: "rgba(8, 145, 178, 0.35)",
  },
  {
    icon: Users,
    title: "Tribal Development",
    category: "Inclusion",
    description:
      "Supporting vulnerable communities with opportunities for sustainable development.",
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
    glow: "rgba(147, 51, 234, 0.35)",
  },
  {
    icon: HeartHandshake,
    title: "Women Empowerment",
    category: "Livelihood",
    description:
      "Creating opportunities for women to participate, learn and build sustainable livelihoods.",
    gradient: "from-rose-500 to-pink-600",
    accent: "#E11D48",
    glow: "rgba(225, 29, 72, 0.35)",
  },
  {
    icon: TreePine,
    title: "Community Development",
    category: "Grassroots",
    description:
      "Working directly with communities to create long-term positive change.",
    gradient: "from-amber-500 to-orange-600",
    accent: "#D97706",
    glow: "rgba(217, 119, 6, 0.35)",
  },
];

// Individual program card
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

      {/* Radial glow behind card on hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${program.glow}, transparent 70%)`,
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
          <span className="flex h-1.5 w-1.5 rounded-full" style={{ background: program.accent }} />
        </div>

        {/* Icon */}
        <div className="relative mt-6">
          <div
            className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${program.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl`}
            style={{ boxShadow: `0 10px 30px -8px ${program.glow}` }}
          >
            <Icon size={28} className="text-white drop-shadow-sm" strokeWidth={2} />
          </div>

          {/* Decorative ring pulse */}
          <div
            className={`absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-700 group-hover:animate-ping group-hover:opacity-40`}
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

        {/* CTA */}
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
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
            style={{ background: `${program.glow}` }}
          >
            <ArrowUpRight size={14} className="transition-colors duration-300" style={{ color: program.accent }} />
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .programs-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .programs-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes programs-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes programs-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes programs-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes programs-pulse-soft {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.05); }
        }
        
        .programs-gradient-text {
          background: linear-gradient(90deg, #005EB8, #0E7C7B, #C9A227, #0E7C7B, #005EB8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: programs-shimmer 6s linear infinite;
        }
        
        .programs-float {
          animation: programs-float 8s ease-in-out infinite;
        }
        
        .programs-pulse-soft {
          animation: programs-pulse-soft 5s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="work"
        className="programs-font relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white py-20 md:py-28"
      >
        {/* ================= BACKGROUND DECORATIONS ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="programs-pulse-soft absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#005EB8]/8 blur-[130px]" />
          <div className="programs-pulse-soft absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/8 blur-[130px]" style={{ animationDelay: "2s" }} />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #005EB8 1.5px, transparent 0)`,
              backgroundSize: "44px 44px",
            }}
          />

          {/* Floating ornaments */}
          <div className="programs-float absolute top-24 right-[12%] h-16 w-16 rounded-2xl border border-[#005EB8]/10 bg-white/40 backdrop-blur-sm" />
          <div className="programs-float absolute bottom-32 left-[8%] h-10 w-10 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* ============ HEADER ============ */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div
              className={`max-w-3xl transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#005EB8]/15 bg-white/70 px-4 py-1.5 backdrop-blur-md shadow-sm">
                <Sparkles size={12} className="text-[#C9A227]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  What We Do
                </span>
                <span className="flex h-1 w-1 rounded-full bg-[#0E7C7B]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#0E7C7B]">
                  Six Focus Areas
                </span>
              </div>

              {/* Heading */}
              <h2 className="programs-serif mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Working with communities
                <br />
                for{" "}
                <span className="programs-gradient-text">lasting change.</span>
              </h2>

              {/* Decorative underline */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                <span className="h-[3px] w-8 rounded-full bg-[#C9A227]" />
                <span className="h-[3px] w-4 rounded-full bg-slate-300" />
              </div>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-slate-600">
                Our work focuses on creating sustainable solutions that
                strengthen communities, protect the environment and
                improve livelihoods.
              </p>
            </div>

            {/* Right side link */}
            <div
              className={`shrink-0 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-[#005EB8]/30 hover:bg-white hover:shadow-md"
              >
                <span>View All Programs</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] transition-transform duration-500 group-hover:translate-x-1">
                  <ChevronRight size={12} className="text-white" />
                </span>
              </a>
            </div>
          </div>

          {/* ============ PROGRAMS GRID ============ */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-200/60 shadow-[0_20px_60px_-25px_rgba(11,59,140,0.15)] md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* ============ BOTTOM CTA STRIP ============ */}
          <div
            className={`mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200/60 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 md:flex-row md:p-10 transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="text-center md:text-left">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#0E7C7B]">
                Partner With Us
              </p>
              <h3 className="programs-serif mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                Have a program in mind? Let's build it together.
              </h3>
              <p className="mt-2 text-[14px] text-slate-600">
                Reach out to explore collaboration, funding, or volunteering opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/30 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/50"
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                <span className="relative h-2 w-2 rounded-full bg-white" />
              </span>
              <span>Get In Touch</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

        </div>

        {/* Bottom gradient edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#005EB8]/20 to-transparent" />
      </section>
    </>
  );
}

export default Programs;