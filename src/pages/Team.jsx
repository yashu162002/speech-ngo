import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  ExternalLink,
  Sparkles,
  Award,
  Shield,
  Heart,
  ChevronRight,
  Crown,
  Briefcase,
  Target,
  Leaf,
  Handshake,
  Camera,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Board members data
const boardMembers = [
  {
    name: "Sheshappa H",
    role: "President",
    roleType: "Board",
    image: "https://1ngo.sgp1.digitaloceanspaces.com/media/speech/SPEECH-BM-Sheshappa.jpg",
    profile: "https://speech.1ngo.in/speech/detailed_member/?member_id=249&member_type=board",
    icon: Crown,
    gradient: "from-[#005EB8] to-[#0E7C7B]",
    accent: "#005EB8",
    badge: "Leadership",
  },
  {
    name: "Lakshmipathy",
    role: "Vice President",
    roleType: "Board",
    image: "https://1ngo.sgp1.digitaloceanspaces.com/media/speech/SPEECH-BM-Lakshmipathy.M.V.jpg",
    profile: "https://speech.1ngo.in/speech/detailed_member/?member_id=250&member_type=board",
    icon: Award,
    gradient: "from-[#0E7C7B] to-[#16A085]",
    accent: "#0E7C7B",
    badge: "Leadership",
  },
];

// Team members data
const teamMembers = [
  {
    name: "Narasimhamurthy M",
    role: "Project Director",
    roleType: "Team",
    image: "https://1ngo.sgp1.digitaloceanspaces.com/media/speech/SPEECH-TM-Narasimhamurthy.M.jpg",
    profile: "https://speech.1ngo.in/speech/detailed_member/?member_id=372&member_type=team",
    icon: Target,
    gradient: "from-[#005EB8] to-[#0891B2]",
    accent: "#005EB8",
    badge: "Operations",
  },
  {
    name: "Santhosh",
    role: "Project Manager",
    roleType: "Team",
    image: "https://1ngo.sgp1.digitaloceanspaces.com/media/speech/SPEECH-TM-Santhosh.S.R.jpg",
    profile: "https://speech.1ngo.in/speech/detailed_member/?member_id=373&member_type=team",
    icon: Briefcase,
    gradient: "from-[#0E7C7B] to-[#16A085]",
    accent: "#0E7C7B",
    badge: "Field Work",
  },
  {
    name: "Basavaraja Y",
    role: "Community Organizer",
    roleType: "Team",
    image: "https://1ngo.sgp1.digitaloceanspaces.com/media/speech/SPEECH-TM-Basavaraja_Y.jpg",
    profile: "https://speech.1ngo.in/speech/detailed_member/?member_id=374&member_type=team",
    icon: Handshake,
    gradient: "from-[#C9A227] to-[#E0B53D]",
    accent: "#C9A227",
    badge: "Community",
  },
];

// ==================== FULL-BLEED PORTRAIT MEMBER CARD ====================
function MemberCard({ member, index, isVisible, isBoard = false }) {
  const Icon = member.icon;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-900 shadow-lg transition-all duration-1000 ease-out hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/25 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      } h-[460px] sm:h-[490px] lg:h-[520px]`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ============ FULL-BLEED IMAGE ============ */}
      <a
        href={member.profile}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${member.name}'s official profile`}
        className="absolute inset-0 block"
      >
        {/* Placeholder gradient (visible until image loads) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${member.gradient} transition-opacity duration-700 ${
            imageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Loading shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-white/10" />
          </div>
        )}

        {/* Main Image — full-bleed, clarity enhanced */}
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-[1200ms] ease-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } contrast-[1.08] brightness-[1.05] saturate-[1.12] group-hover:scale-[1.06]`}
          style={{
            imageRendering: "-webkit-optimize-contrast",
            filter: "contrast(1.08) brightness(1.05) saturate(1.12)",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* ============ GRADIENT OVERLAYS FOR TEXT LEGIBILITY ============ */}
        {/* Bottom gradient (heavy) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        {/* Top gradient (subtle) */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/70 to-transparent" />

        {/* Hover color overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-30`}
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.4)]" />

        {/* ============ TOP-LEFT BADGE ============ */}
        <div className="absolute left-4 top-4 z-20">
          <div
            className={`flex items-center gap-1.5 rounded-full border border-white/25 bg-gradient-to-r ${member.gradient} px-3 py-1.5 shadow-lg backdrop-blur-md`}
          >
            <Icon size={11} className="text-white" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              {member.badge}
            </span>
          </div>
        </div>

        {/* ============ TOP-RIGHT VERIFIED + EXTERNAL ============ */}
        <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
          {/* Verified badge */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-emerald-500/90 backdrop-blur-md shadow-lg">
            <BadgeCheck size={14} className="text-white" strokeWidth={2.5} fill="white" />
          </div>

          {/* External link */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/50 backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:bg-white">
            <ExternalLink
              size={13}
              className="text-white transition-colors duration-500 group-hover:text-[#0B3B8C]"
            />
          </div>
        </div>

        {/* ============ ICON WATERMARK (BOTTOM RIGHT) ============ */}
        <div className="pointer-events-none absolute -right-10 bottom-16 z-10 opacity-[0.08] transition-opacity duration-700 group-hover:opacity-[0.16]">
          <Icon size={220} className="text-white" strokeWidth={1} />
        </div>

        {/* ============ BOTTOM NAME BLOCK ============ */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6">
          {/* Role label with decorative line */}
          <div className="flex items-center gap-2">
            <span
              className={`h-[3px] w-6 rounded-full bg-gradient-to-r ${member.gradient}`}
            />
            <p className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              {member.role}
            </p>
          </div>

          {/* Name */}
          <h3
            className={`font-serif mt-3 font-bold leading-[1.05] tracking-tight text-white drop-shadow-xl ${
              isBoard ? "text-4xl" : "text-3xl"
            }`}
          >
            {member.name}
          </h3>

          {/* Role type */}
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
            {member.roleType} Member · SPEECH NGO
          </p>

          {/* Hover/Mobile revealed CTA */}
          <div className="mt-3 sm:mt-4 flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500">
            <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white">
              View Profile
            </span>
            <span
              className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient}`}
            >
              <ArrowRight size={11} className="text-white" />
            </span>
          </div>
        </div>
      </a>

      {/* Bottom gradient accent line (appears on hover) */}
      <div
        className={`absolute inset-x-0 bottom-0 z-30 h-1 bg-gradient-to-r ${member.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
    </article>
  );
}

// Member section header
function SectionHeader({ title, description, icon: HeaderIcon, accent = "#005EB8" }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2">
        {HeaderIcon && <HeaderIcon size={14} style={{ color: accent }} />}
        <span
          className="text-[10.5px] font-bold uppercase tracking-[0.25em]"
          style={{ color: accent }}
        >
          SPEECH NGO
        </span>
      </div>

      <h2 className="font-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="mt-5 flex items-center justify-center gap-2">
        <span
          className="h-[3px] w-12 rounded-full"
          style={{ background: `linear-gradient(to right, transparent, ${accent})` }}
        />
        <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
        <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
        <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
        <span
          className="h-[3px] w-12 rounded-full"
          style={{ background: `linear-gradient(to left, transparent, ${accent})` }}
        />
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function Team() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [boardVisible, setBoardVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = useRef(null);
  const boardRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const setup = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const observers = [
      setup(heroRef, setHeroVisible),
      setup(boardRef, setBoardVisible),
      setup(teamRef, setTeamVisible),
      setup(ctaRef, setCtaVisible),
    ];

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .team-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .team-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes team-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes team-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes team-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        .team-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: team-shimmer 6s linear infinite;
        }
        
        .team-float { animation: team-float 9s ease-in-out infinite; }
        .team-pulse-soft { animation: team-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="team-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-24 text-white md:py-32"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="team-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="team-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0891B2]/10 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            <div className="team-float absolute top-24 right-[12%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="team-float absolute bottom-32 left-[8%] h-14 w-14 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute -left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl">

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
                Meet Our People
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            <h1
              className={`team-serif mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              The people behind
              <br />
              our{" "}
              <span className="team-gradient-text">mission.</span>
            </h1>

            <div
              className={`mt-8 flex items-center gap-2 transition-all duration-1000 delay-300 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              <span className="h-[3px] w-8 rounded-full bg-[#C9A227]" />
              <span className="h-[3px] w-4 rounded-full bg-white/40" />
            </div>

            <p
              className={`mt-7 max-w-2xl text-lg font-medium leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-500 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Meet the board members and dedicated team working to support
              communities and advance{" "}
              <span className="font-semibold text-white">SPEECH NGO's development initiatives</span>.
            </p>

            <div
              className={`mt-12 flex flex-wrap gap-3 transition-all duration-1000 delay-700 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {[
                { icon: Crown, label: "2 Board Members", gradient: "from-cyan-400 to-blue-500" },
                { icon: Users, label: "3 Team Members", gradient: "from-emerald-400 to-teal-500" },
                { icon: Heart, label: "1 Shared Mission", gradient: "from-amber-400 to-orange-500" },
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

        {/* ================= BOARD MEMBERS ================= */}
        <section
          ref={boardRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
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
            <SectionHeader
              title="Board Members"
              description="Meet the leadership guiding the organisation and its mission."
              icon={Crown}
              accent="#005EB8"
            />

            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
              {boardMembers.map((member, index) => (
                <MemberCard
                  key={member.name}
                  member={member}
                  index={index}
                  isVisible={boardVisible}
                  isBoard={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= TEAM MEMBERS ================= */}
        <section
          ref={teamRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#0E7C7B]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <SectionHeader
              title="Our Team"
              description="Meet the professionals supporting project management and community-level work."
              icon={Users}
              accent="#0E7C7B"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <MemberCard
                  key={member.name}
                  member={member}
                  index={index}
                  isVisible={teamVisible}
                  isBoard={false}
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
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="team-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="team-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <Handshake size={30} className="text-cyan-300" />
                </div>

                <h2 className="team-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Interested in supporting{" "}
                  <span className="team-gradient-text">our work?</span>
                </h2>

                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Connect with SPEECH NGO to discuss volunteering, partnerships, and
                  ways to contribute to community development.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B3B8C] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-white/30"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#0B3B8C]/30" />
                      <span className="relative h-2 w-2 rounded-full bg-[#0B3B8C]" />
                    </span>
                    <span>Contact Us</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/volunteer"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
                  >
                    <span>Volunteer</span>
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

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