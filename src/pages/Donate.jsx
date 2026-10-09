import { useState } from "react";
import {
  Heart,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  Users,
  Sprout,
  Droplets,
  Award,
  Lock,
  CheckCircle2,
  HandHeart,
  Receipt,
  TrendingUp,
  Leaf,
  ChevronRight,
  Info,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Donation amount options with impact labels
const amounts = [
  { value: 500, impact: "Seeds for a small farm" },
  { value: 1000, impact: "Training for a farmer" },
  { value: 2500, impact: "10 saplings for WADI" },
  { value: 5000, impact: "Micro-irrigation support" },
  { value: 10000, impact: "Full WADI one-acre setup" },
];

// Impact highlights
const impactHighlights = [
  {
    icon: Sprout,
    value: "424",
    label: "WADI Farms",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    value: "529",
    label: "Households",
    gradient: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: Droplets,
    value: "792",
    label: "Water Beneficiaries",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Trust",
    gradient: "from-amber-500 to-orange-600",
  },
];

// Trust badges
const trustBadges = [
  { icon: ShieldCheck, label: "80G Certified" },
  { icon: Lock, label: "Secure Payment" },
  { icon: Receipt, label: "Tax Receipt Provided" },
  { icon: CheckCircle2, label: "NGO Darpan Registered" },
];

function Donate() {
  const [donationType, setDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Number.isFinite(finalAmount) || finalAmount < 1) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    if (donationType === "monthly") {
      alert("Monthly donations are not available yet. Please select Give Once.");
      return;
    }

    setSubmitted(true);
  };

  // Input class helper
  const inputClass = (fieldName) =>
    `w-full rounded-xl border-2 bg-white px-4 py-3.5 text-[14.5px] text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 ${
      focusedField === fieldName
        ? "border-[#0E7C7B] shadow-lg shadow-[#0E7C7B]/10"
        : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .donate-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .donate-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes donate-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes donate-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes donate-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        @keyframes donate-heart-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        
        @keyframes donate-check-draw {
          to { stroke-dashoffset: 0; }
        }
        
        .donate-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: donate-shimmer 6s linear infinite;
        }
        
        .donate-float { animation: donate-float 9s ease-in-out infinite; }
        .donate-pulse-soft { animation: donate-pulse-soft 5s ease-in-out infinite; }
        .donate-heart-pulse { animation: donate-heart-pulse 2s ease-in-out infinite; }
        
        .donate-check-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          animation: donate-check-draw 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        
        .donate-check-mark {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: donate-check-draw 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }
      `}</style>

      <main className="donate-font min-h-screen bg-gradient-to-b from-white via-[#F5F9FC] to-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-20 text-white md:py-28">
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="donate-pulse-soft absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="donate-pulse-soft absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Floating ornaments */}
            <div className="donate-float absolute top-24 right-[12%] h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="donate-float absolute bottom-32 left-[8%] h-12 w-12 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

            {/* Diagonal light streaks */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute -left-1/4 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl text-center">

            {/* Heart Icon with pulse */}
            <div
              className={`mx-auto flex justify-center transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] opacity-40 blur-2xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <Heart
                    size={36}
                    fill="#C9A227"
                    className="donate-heart-pulse text-[#C9A227]"
                  />
                </div>
              </div>
            </div>

            {/* Section Badge */}
            <div
              className={`mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2 backdrop-blur-md transition-all duration-1000 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                Support SPEECH
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`donate-serif mt-7 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Give hope.
              <br />
              Create{" "}
              <span className="donate-gradient-text">change.</span>
            </h1>

            {/* Underline */}
            <div
              className={`mx-auto mt-7 flex items-center justify-center gap-2 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
              <span className="h-[3px] w-4 rounded-full bg-[#C9A227]" />
              <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
              <span className="h-[3px] w-12 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
            </div>

            {/* Subtitle */}
            <p
              className={`mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Your contribution helps communities build{" "}
              <span className="font-semibold text-white">sustainable livelihoods</span>{" "}
              and create a better future.
            </p>

            {/* Impact Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {impactHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-left backdrop-blur-md transition-all duration-700 hover:border-white/30 hover:bg-white/[0.10] ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} shadow-md transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon size={15} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="donate-serif text-lg font-bold leading-none text-white">
                        {item.value}
                      </p>
                      <p className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.15em] text-cyan-200">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= DONATION AREA ================= */}
        <section
          ref={sectionRef}
          className="relative py-16 md:py-20"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#005EB8]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#0E7C7B]/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6">

            {submitted && (
              <div
                className={`donate-check-circle mb-8 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 p-8 shadow-lg shadow-emerald-500/10 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                role="status"
              >
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                  {/* Animated check */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/30">
                    <svg
                      viewBox="0 0 52 52"
                      className="h-8 w-8"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="26" cy="26" r="24" className="donate-check-circle" />
                      <path d="M14 27 L23 36 L38 18" className="donate-check-mark" />
                    </svg>
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-emerald-700">
                      Donation Inquiry Received
                    </p>
                    <h2 className="donate-serif mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                      Thank you, {formData.name || "Friend"}!
                    </h2>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">
                      Your donation inquiry for{" "}
                      <span className="font-bold text-emerald-700">
                        ₹{finalAmount.toLocaleString("en-IN")}
                      </span>{" "}
                      has been received. Please contact SPEECH NGO to complete your donation.
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 bg-[length:200%_100%] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-emerald-500/25 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl"
                  >
                    <span>Submit Another</span>
                    <ArrowLeft
                      size={14}
                      className="transition-transform duration-500 group-hover:-translate-x-1"
                    />
                  </button>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid lg:grid-cols-[1fr_380px] gap-8"
            >

              {/* ============ MAIN FORM ============ */}
              <div
                className={`relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_20px_60px_-25px_rgba(11,59,140,0.15)] transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {/* Top tri-color accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

                <div className="p-7 md:p-10">

                  {/* ============ STEP 1 ============ */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] text-[11px] font-bold text-white">
                          1
                        </span>
                        <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                          Choose Your Donation
                        </span>
                      </div>
                      <h2 className="donate-serif mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                        How much would you like to give?
                      </h2>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#005EB8]/10 to-[#0E7C7B]/10 md:flex">
                      <HandHeart size={20} className="text-[#005EB8]" />
                    </div>
                  </div>

                  {/* Donation Type */}
                  <div className="mt-8">
                    <label className="mb-3 block text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700">
                      Donation Frequency
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "once", label: "Give Once", icon: Heart },
                        { key: "monthly", label: "Monthly", icon: TrendingUp },
                      ].map((type) => {
                        const TypeIcon = type.icon;
                        const active = donationType === type.key;
                        return (
                          <button
                            key={type.key}
                            type="button"
                            onClick={() => setDonationType(type.key)}
                            className={`group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-xl border-2 py-4 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                              active
                                ? "border-[#005EB8] bg-gradient-to-br from-blue-50 to-cyan-50 text-[#005EB8] shadow-md shadow-[#005EB8]/10"
                                : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <TypeIcon
                              size={15}
                              className={active ? "text-[#0E7C7B]" : "text-slate-400"}
                              fill={active && type.key === "once" ? "#0E7C7B" : "none"}
                            />
                            {type.label}
                            {active && (
                              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                <CheckCircle2 size={14} className="text-[#0E7C7B]" />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Amount Grid */}
                  <div className="mt-8">
                    <label className="mb-3 block text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700">
                      Choose an Amount
                    </label>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {amounts.map((amount) => {
                        const active = selectedAmount === amount.value && !customAmount;
                        return (
                          <button
                            key={amount.value}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amount.value);
                              setCustomAmount("");
                            }}
                            className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                              active
                                ? "border-[#005EB8] bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md shadow-[#005EB8]/10"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`donate-serif text-xl font-bold ${
                                  active ? "text-[#005EB8]" : "text-slate-800"
                                }`}
                              >
                                ₹{amount.value.toLocaleString("en-IN")}
                              </span>
                              {active && (
                                <CheckCircle2 size={14} className="text-[#0E7C7B]" />
                              )}
                            </div>
                            <p
                              className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                                active ? "text-[#0E7C7B]" : "text-slate-500"
                              }`}
                            >
                              {amount.impact}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="mt-6">
                    <label
                      htmlFor="customAmount"
                      className="mb-3 block text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
                    >
                      Or Enter Another Amount
                    </label>

                    <div
                      className={`flex overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 ${
                        focusedField === "customAmount"
                          ? "border-[#0E7C7B] shadow-lg shadow-[#0E7C7B]/10"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center bg-gradient-to-br from-[#005EB8]/5 to-[#0E7C7B]/5 px-5 text-lg font-bold text-[#005EB8]">
                        ₹
                      </span>
                      <input
                        id="customAmount"
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(event) => setCustomAmount(event.target.value)}
                        onFocus={() => setFocusedField("customAmount")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter amount"
                        className="w-full px-4 py-4 text-[14.5px] font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* ============ STEP 2 ============ */}
                  <div className="mt-12 border-t border-slate-200 pt-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] text-[11px] font-bold text-white">
                            2
                          </span>
                          <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                            Your Information
                          </span>
                        </div>
                        <h2 className="donate-serif mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                          Tell us a bit about you.
                        </h2>
                        <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                          We'll use these details to process your donation and provide confirmation.
                        </p>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#005EB8]/10 to-[#0E7C7B]/10 md:flex">
                        <Receipt size={20} className="text-[#005EB8]" />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">

                      {/* Name */}
                      <div className="md:col-span-2">
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
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Enter your full name"
                          className={inputClass("name")}
                        />
                      </div>

                      {/* Email */}
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
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="you@example.com"
                          className={inputClass("email")}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
                        >
                          Mobile Number <span className="text-[#005EB8]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="10-digit mobile number"
                          className={inputClass("phone")}
                        />
                      </div>

                      {/* PAN */}
                      <div>
                        <label
                          htmlFor="pan"
                          className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
                        >
                          PAN
                          <span className="text-[10px] font-medium normal-case tracking-normal text-slate-400">
                            (for 80G receipt)
                          </span>
                        </label>
                        <input
                          id="pan"
                          name="pan"
                          type="text"
                          value={formData.pan}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("pan")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="ABCDE1234F"
                          className={`${inputClass("pan")} uppercase tracking-wider`}
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label
                          htmlFor="address"
                          className="mb-2 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.15em] text-slate-700"
                        >
                          Address
                          <span className="text-[10px] font-medium normal-case tracking-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          value={formData.address}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("address")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="City / Address"
                          className={inputClass("address")}
                        />
                      </div>
                    </div>

                    {/* Info note */}
                    <div className="mt-6 flex items-start gap-2 rounded-xl border border-slate-200/60 bg-slate-50/60 p-3.5">
                      <Info size={14} className="mt-0.5 shrink-0 text-[#0E7C7B]" />
                      <p className="text-[12px] leading-relaxed text-slate-600">
                        <span className="font-semibold text-slate-800">Note:</span> PAN is
                        required only for donations above ₹2,000 as per Indian tax regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============ SUMMARY SIDEBAR ============ */}
              <aside className="h-fit lg:sticky lg:top-28">
                <div
                  className={`relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_20px_60px_-25px_rgba(11,59,140,0.2)] transition-all duration-1000 delay-200 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {/* Top gradient accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

                  <div className="p-7">

                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2">
                      <Heart size={12} fill="#005EB8" className="text-[#005EB8]" />
                      <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                        Your Donation
                      </span>
                    </div>

                    {/* Amount */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="donate-serif text-4xl font-bold tracking-tight bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                        ₹{finalAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Frequency pill */}
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-[#0E7C7B]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                        {donationType === "monthly" ? "Monthly Donation" : "One-Time Donation"}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    {/* Breakdown */}
                    <div className="space-y-3.5 text-[13.5px]">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Donation Amount</span>
                        <span className="font-bold text-slate-800">
                          ₹{finalAmount.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Payment Method</span>
                        <span className="font-bold text-slate-800">Cashfree</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Tax Benefits</span>
                        <span className="font-bold text-emerald-600">80G Eligible</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    {/* Total */}
                    <div className="flex items-baseline justify-between">
                      <span className="donate-serif text-base font-bold text-slate-900">
                        Total
                      </span>
                      <span className="donate-serif text-2xl font-bold text-[#005EB8]">
                        ₹{finalAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-6 py-4 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:scale-[1.02] hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
                    >
                      {/* Shine sweep */}
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute -inset-x-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-full" />
                      </span>

                      <span className="relative">Continue to Payment</span>
                      <ChevronRight
                        size={15}
                        className="relative transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </button>

                    {/* Security Note */}
                    <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-teal-50/40 p-3.5">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600">
                        <ShieldCheck size={12} className="text-white" />
                      </div>
                      <p className="text-[11.5px] leading-relaxed text-slate-700">
                        Your payment will be securely processed through{" "}
                        <span className="font-semibold text-emerald-700">Cashfree Payments</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {trustBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.label}
                        className="flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/80 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:shadow-sm"
                      >
                        <Icon size={13} className="shrink-0 text-[#0E7C7B]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Back link */}
                <div className="mt-6 text-center">
                  <a
                    href="/"
                    className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-slate-500 transition-colors duration-300 hover:text-[#005EB8]"
                  >
                    <ArrowLeft
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    <span>Back to SPEECH</span>
                  </a>
                </div>
              </aside>

            </form>
          </div>
        </section>

        {/* ================= BOTTOM TRUST SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F9FC] to-white px-6 py-16">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0E3A6B] p-10 text-center text-white shadow-[0_30px_80px_-25px_rgba(11,59,140,0.4)] md:p-12">
              {/* Ambient glows */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="donate-pulse-soft absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E7C7B]/30 blur-[100px]" />
                <div className="donate-pulse-soft absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-[100px]" style={{ animationDelay: "2s" }} />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <Leaf size={26} className="text-cyan-300" />
                </div>

                <h2 className="donate-serif mt-6 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Every Rupee Creates{" "}
                  <span className="donate-gradient-text">Real Impact.</span>
                </h2>

                <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="h-[3px] w-8 rounded-full bg-cyan-400" />
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-cyan-400" />
                </div>

                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-blue-100">
                  Your generosity directly supports tribal families, sustainable
                  agriculture, water conservation, and community-led development
                  across Karnataka.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Donate;