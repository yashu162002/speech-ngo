import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Users,
  Sprout,
  Leaf,
  Droplets,
  Sun,
  Globe,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Shield,
  Award,
  ChevronRight,
  HandHeart,
  Star,
  Target,
  Headphones,
  Info,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Volunteer opportunity cards
const opportunities = [
  {
    icon: Sprout,
    title: "Field Support",
    description: "Assist our field team with farmer training, sapling distribution, and community meetings.",
    gradient: "from-emerald-500 to-teal-600",
    accent: "#059669",
    commitment: "4-8 hrs/week",
  },
  {
    icon: Sun,
    title: "Awareness Campaigns",
    description: "Help organize renewable energy workshops, waste management drives, and awareness programs.",
    gradient: "from-amber-500 to-orange-600",
    accent: "#D97706",
    commitment: "Flexible",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Support tribal household surveys, beneficiary card distribution, and documentation.",
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
    commitment: "Weekend",
  },
  {
    icon: Heart,
    title: "Skills & Pro-bono",
    description: "Contribute design, writing, fundraising, tech, or legal skills remotely or on-site.",
    gradient: "from-rose-500 to-pink-600",
    accent: "#E11D48",
    commitment: "Remote",
  },
];

// Trust markers
const trustMarkers = [
  { icon: Shield, label: "80G Certified" },
  { icon: Award, label: "NGO Darpan Registered" },
  { icon: Leaf, label: "Transparent Impact" },
];

// Why volunteer pillars
const whyVolunteer = [
  {
    icon: Target,
    title: "Meaningful Work",
    description: "Contribute directly to field-level community development projects.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Learn & Grow",
    description: "Gain hands-on experience in sustainable development and NGO operations.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: HandHeart,
    title: "Real Impact",
    description: "See your contribution translate into tangible change in villages.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

// Volunteer form component
function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interest: "Field Support",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // Input class helper
  const inputClass = (fieldName) =>
    `w-full rounded-xl border-2 bg-white px-4 py-3.5 text-[14.5px] text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 ${
      focusedField === fieldName
        ? "border-[#0E7C7B] shadow-lg shadow-[#0E7C7B]/10"
        : "border-slate-200 hover:border-slate-300"
    }`;

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 p-8 text-center shadow-lg shadow-emerald-500/10 md:p-12"
        role="status"
      >
        {/* Animated check */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/30">
          <CheckCircle2 size={40} className="text-white" strokeWidth={2.5} />
        </div>

        <h3 className="font-serif mt-7 text-2xl font-bold text-slate-900 md:text-3xl">
          Thank you for your interest!
        </h3>

        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="h-[3px] w-8 rounded-full bg-emerald-500" />
          <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-emerald-500" />
        </div>

        <p className="mx-auto mt-5 max-w-md leading-relaxed text-slate-600">
          We've received your volunteer application and will be in touch within
          3-5 working days. Please note this is a demo and your application has
          not yet been actually submitted.
        </p>

        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
          <CheckCircle2 size={12} className="text-emerald-600" />
          <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-emerald-700">
            Application Received
          </span>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setSubmitted(false)}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 bg-[length:200%_100%] px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-emerald-500/25 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-emerald-500/40"
          >
            <span>Submit Another</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_20px_60px_-25px_rgba(11,59,140,0.15)]">
      {/* Top tri-color accent */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

      <div className="p-7 md:p-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <HandHeart size={14} className="text-[#0E7C7B]" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#0E7C7B]">
                Volunteer Application
              </span>
            </div>
            <h2 className="font-serif mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
              Join our volunteer community.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Tell us a little about yourself and how you would like to contribute.
            </p>
          </div>

          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#005EB8]/10 to-[#0E7C7B]/10 md:flex">
            <Send size={20} className="text-[#005EB8]" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Row 1: Name + Email */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
              >
                Full Name <span className="text-[#005EB8]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your full name"
                className={inputClass("name")}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
              >
                Email Address <span className="text-[#005EB8]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="you@example.com"
                className={inputClass("email")}
              />
            </div>
          </div>

          {/* Row 2: Phone + Location */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
              >
                Phone Number
                <span className="text-[10px] font-medium normal-case tracking-normal text-slate-400">
                  (optional)
                </span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your phone number"
                className={inputClass("phone")}
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                onFocus={() => setFocusedField("location")}
                onBlur={() => setFocusedField(null)}
                placeholder="City / Region"
                className={inputClass("location")}
              />
            </div>
          </div>

          {/* Interest */}
          <div>
            <label
              htmlFor="interest"
              className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
            >
              Area of Interest <span className="text-[#005EB8]">*</span>
            </label>
            <div className="relative">
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                onFocus={() => setFocusedField("interest")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClass("interest")} cursor-pointer appearance-none pr-10`}
              >
                <option>Field Support</option>
                <option>Awareness Campaigns</option>
                <option>Community Outreach</option>
                <option>Skills & Pro-bono</option>
                <option>Fundraising</option>
                <option>Documentation & Media</option>
                <option>Other</option>
              </select>
              <ChevronRight
                size={16}
                className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 transition-transform duration-300 ${
                  focusedField === "interest" ? "rotate-[270deg] text-[#0E7C7B]" : ""
                }`}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
            >
              How would you like to contribute? <span className="text-[#005EB8]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Share your skills, availability, and what motivates you..."
              className={`${inputClass("message")} resize-y`}
            />
            <p className="mt-2 text-right text-[11px] font-medium text-slate-400">
              {formData.message.length} / 1000
            </p>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:scale-[1.02] hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute -inset-x-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-full" />
              </span>

              <Send
                size={15}
                className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span className="relative">Submit Application</span>
            </button>

            <div className="flex items-center justify-center gap-2 sm:justify-end">
              <Heart size={11} className="text-[#C9A227]" fill="#C9A227" />
              <span className="text-[11px] font-semibold text-slate-500">
                Every hour you give creates ripples.
              </span>
            </div>
          </div>

          {/* Privacy note */}
          <div className="flex items-start gap-2 rounded-xl border border-slate-200/60 bg-slate-50/60 p-3.5">
            <Info size={13} className="mt-0.5 shrink-0 text-[#0E7C7B]" />
            <p className="text-[11.5px] leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-700">Note:</span> This demo
              displays a confirmation only — your details are not sent or stored.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// Opportunity card
function OpportunityCard({ opportunity, index, isVisible }) {
  const Icon = opportunity.icon;

  return (
    <div
      className={`group relative transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Ambient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle, ${opportunity.accent}40, transparent 70%)`,
        }}
      />

      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-xl">
        {/* Top gradient accent */}
        <div
          className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${opportunity.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Icon */}
        <div className="relative">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${opportunity.gradient} shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
          >
            <Icon size={22} className="text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif mt-5 text-lg font-bold text-slate-900">
          {opportunity.title}
        </h3>

        {/* Divider */}
        <div
          className={`mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r ${opportunity.gradient} transition-all duration-500 group-hover:w-14`}
        />

        {/* Description */}
        <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
          {opportunity.description}
        </p>

        {/* Commitment badge */}
        <div className="mt-4 flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5">
          <Clock size={11} className="text-slate-400" />
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-slate-600">
            {opportunity.commitment}
          </span>
        </div>
      </div>
    </div>
  );
}

function Volunteer() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [opportunitiesVisible, setOpportunitiesVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);

  const heroRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const formRef = useRef(null);
  const whyRef = useRef(null);

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
      setup(opportunitiesRef, setOpportunitiesVisible),
      setup(formRef, setFormVisible),
      setup(whyRef, setWhyVisible),
    ];

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .volunteer-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .volunteer-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes volunteer-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes volunteer-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes volunteer-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        .volunteer-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: volunteer-shimmer 6s linear infinite;
        }
        
        .volunteer-float { animation: volunteer-float 9s ease-in-out infinite; }
        .volunteer-pulse-soft { animation: volunteer-pulse-soft 5s ease-in-out infinite; }
      `}</style>

      <main className="volunteer-font min-h-screen bg-white">

        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-24 text-white md:py-32"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="volunteer-pulse-soft absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="volunteer-pulse-soft absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0891B2]/10 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            <div className="volunteer-float absolute top-24 right-[12%] h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="volunteer-float absolute bottom-32 left-[8%] h-14 w-14 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

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
                Get Involved
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            <h1
              className={`volunteer-serif mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Give your time.
              <br />
              Share{" "}
              <span className="volunteer-gradient-text">your skills.</span>
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
              className={`mt-7 max-w-3xl text-lg font-medium leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-500 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Join a community of volunteers helping SPEECH NGO reach more families,
              protect more land, and build{" "}
              <span className="font-semibold text-white">stronger villages</span> across Karnataka.
            </p>

            {/* Hero pills */}
            <div
              className={`mt-12 flex flex-wrap gap-3 transition-all duration-1000 delay-700 ${
                heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {[
                { icon: Clock, label: "Flexible Hours", gradient: "from-cyan-400 to-blue-500" },
                { icon: MapPin, label: "On-site & Remote", gradient: "from-emerald-400 to-teal-500" },
                { icon: Star, label: "Certificate Provided", gradient: "from-amber-400 to-orange-500" },
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

        {/* ================= OPPORTUNITIES SECTION ================= */}
        <section
          ref={opportunitiesRef}
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

            {/* Header */}
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2">
                <HandHeart size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Ways To Help
                </span>
              </div>

              <h2 className="volunteer-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Choose how you'd like to{" "}
                <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                  make a difference.
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
                Four ways to contribute — pick one that fits your skills, schedule,
                and passion.
              </p>
            </div>

            {/* Opportunity Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {opportunities.map((opportunity, index) => (
                <OpportunityCard
                  key={opportunity.title}
                  opportunity={opportunity}
                  index={index}
                  isVisible={opportunitiesVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= FORM SECTION ================= */}
        <section
          ref={formRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-28"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div
              className={`transition-all duration-1000 ${
                formVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Header */}
              <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2">
                  <Heart size={14} className="text-[#005EB8]" fill="#005EB8" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                    Volunteer With SPEECH
                  </span>
                </div>

                <h2 className="volunteer-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                    get started?
                  </span>
                </h2>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
                  <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
                </div>

                <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-slate-600">
                  Fill in the form below — we'll review your application and reach
                  out within 3–5 working days.
                </p>
              </div>

              {/* Form */}
              <VolunteerForm />
            </div>
          </div>
        </section>

        {/* ================= WHY VOLUNTEER ================= */}
        <section
          ref={whyRef}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24"
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0E7C7B]/5 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div
              className={`transition-all duration-1000 ${
                whyVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Header */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2">
                  <Star size={14} className="text-[#C9A227]" fill="#C9A227" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                    Why Volunteer
                  </span>
                </div>

                <h2 className="volunteer-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl">
                  More than just{" "}
                  <span className="bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227] bg-clip-text text-transparent">
                    giving back.
                  </span>
                </h2>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-[#005EB8]" />
                  <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                  <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
                  <span className="h-[3px] w-8 rounded-full bg-[#0E7C7B]" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-[#005EB8]" />
                </div>
              </div>

              {/* Why cards */}
              <div className="grid gap-6 sm:grid-cols-3">
                {whyVolunteer.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="flex justify-center">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                        >
                          <Icon size={24} className="text-white" strokeWidth={2} />
                        </div>
                      </div>

                      <h3 className="volunteer-serif mt-5 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <div
                        className={`mx-auto mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-14`}
                      />

                      <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#005EB8]/8 blur-[140px]" />
            <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.5)] md:p-16">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="volunteer-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="volunteer-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />

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
                  <HandHeart size={30} className="text-cyan-300" />
                </div>

                <h2 className="volunteer-serif mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Not sure where you fit?{" "}
                  <span className="volunteer-gradient-text">Let's talk.</span>
                </h2>

                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-blue-100">
                  Reach out and tell us about your skills and interests — we'll
                  find the right fit for you.
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
                    to="/donate"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-[#0B3B8C]"
                  >
                    <span>Donate Instead</span>
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/15 pt-7">
                  {trustMarkers.map((marker, i) => {
                    const Icon = marker.icon;
                    return (
                      <div key={i} className="flex items-center gap-2">
                        <Icon size={12} className="text-[#C9A227]" />
                        <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
                          {marker.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Volunteer;