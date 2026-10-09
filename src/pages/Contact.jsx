import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Clock,
  ArrowRight,
  Heart,
  Users,
  Handshake,
  Headphones,
  ChevronRight,
  Shield,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Contact info cards data
const contactInfo = [
  {
    icon: MapPin,
    label: "Mailing Address",
    value: "SPEECH, Ganesha Krupa, Nrupatunga Extention, Bank Colony, Chitradurga, Karnataka – 577501",
    href: null,
    gradient: "from-[#005EB8] to-[#0E7C7B]",
    accent: "#005EB8",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "speech.cta@gmail.com",
    href: "mailto:speech.cta@gmail.com",
    gradient: "from-[#0E7C7B] to-[#16A085]",
    accent: "#0E7C7B",
  },
  {
    icon: Phone,
    label: "Phone Numbers",
    value: ["+91 9740114246", "+91 9110867090", "+91 9964765246"],
    href: ["tel:+919740114246", "tel:+919110867090", "tel:+919964765246"],
    gradient: "from-[#C9A227] to-[#E0B53D]",
    accent: "#C9A227",
  },
];

// Contact method highlights
const highlights = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond within 24-48 hours on working days.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Every inquiry is reviewed by our field team.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "80G certified, NGO Darpan registered.",
    gradient: "from-amber-500 to-orange-500",
  },
];

// Contact info card
function ContactInfoCard({ info, index, isVisible }) {
  const Icon = info.icon;
  const isPhone = Array.isArray(info.value);

  return (
    <div
      className={`group relative transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Ambient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-30"
        style={{
          background: `radial-gradient(circle, ${info.accent}40, transparent 70%)`,
        }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 p-6 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-xl">
        {/* Top accent line */}
        <div
          className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="flex gap-4">
          {/* Icon */}
          <div className="relative shrink-0">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}
            >
              <Icon size={22} className="text-white" strokeWidth={2} />
            </div>
            {/* Pulse ring */}
            <div
              className={`absolute inset-0 rounded-xl border-2 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-40`}
              style={{ borderColor: info.accent, animationDuration: "2.5s" }}
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              {info.label}
            </p>

            {isPhone ? (
              <div className="mt-2 space-y-1.5">
                {info.value.map((phone, i) => (
                  <a
                    key={i}
                    href={info.href[i]}
                    className="group/phone flex items-center gap-2 text-[14.5px] font-semibold text-slate-800 transition-colors duration-300 hover:text-[#005EB8]"
                  >
                    <span>{phone}</span>
                    <ArrowRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover/phone:translate-x-0.5 group-hover/phone:opacity-100"
                    />
                  </a>
                ))}
              </div>
            ) : info.href ? (
              <a
                href={info.href}
                className="group/link mt-2 inline-flex items-center gap-2 text-[14.5px] font-semibold text-slate-800 transition-colors duration-300 hover:text-[#005EB8]"
              >
                <span className="break-all">{info.value}</span>
                <ArrowRight
                  size={12}
                  className="shrink-0 opacity-0 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                />
              </a>
            ) : (
              <p className="mt-2 text-[14.5px] font-medium leading-relaxed text-slate-700">
                {info.value}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
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

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
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
        
        .contact-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .contact-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes contact-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes contact-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(6deg); }
        }
        
        @keyframes contact-pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        
        @keyframes contact-success-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes contact-check-draw {
          to { stroke-dashoffset: 0; }
        }
        
        .contact-gradient-text {
          background: linear-gradient(90deg, #7FE7E0, #FFFFFF, #7FE7E0, #FFE5A0, #7FE7E0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: contact-shimmer 6s linear infinite;
        }
        
        .contact-float { animation: contact-float 9s ease-in-out infinite; }
        
        .contact-pulse-soft { animation: contact-pulse-soft 5s ease-in-out infinite; }
        
        .contact-success-pop { animation: contact-success-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        
        .contact-check-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          animation: contact-check-draw 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        
        .contact-check-mark {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: contact-check-draw 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }
      `}</style>

      <main className="contact-font min-h-screen bg-gradient-to-b from-white via-[#F5F9FC] to-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3D] via-[#005EB8] to-[#0A1A3D] px-6 py-20 text-white md:py-28">
          {/* Ambient background decorations */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="contact-pulse-soft absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/25 blur-[140px]" />
            <div className="contact-pulse-soft absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C9A227]/15 blur-[140px]" style={{ animationDelay: "2s" }} />

            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Floating ornaments */}
            <div className="contact-float absolute top-24 right-[12%] h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
            <div className="contact-float absolute bottom-32 left-[8%] h-12 w-12 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5" style={{ animationDelay: "3s" }} />

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
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                We Are Here To Help
              </span>
              <Sparkles size={12} className="text-[#C9A227]" />
            </div>

            {/* Heading */}
            <h1
              className={`contact-serif mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl transition-all duration-1000 delay-150 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Let's work together to
              <br />
              create{" "}
              <span className="contact-gradient-text">lasting change.</span>
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
              className={`mt-7 max-w-2xl text-lg font-medium leading-relaxed text-cyan-100 md:text-xl transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Have a question about our programs, want to volunteer, or wish to
              support our mission?{" "}
              <span className="font-semibold text-white">Get in touch with us.</span>
            </p>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section
          ref={sectionRef}
          className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-5 lg:gap-12 lg:py-20"
        >

          {/* ============ LEFT: CONTACT INFO ============ */}
          <div className="space-y-8 lg:col-span-2">

            {/* Header */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <MessageSquare size={14} className="text-[#005EB8]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                  Get In Touch
                </span>
              </div>

              <h2 className="contact-serif mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
                Contact{" "}
                <span className="bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                  SPEECH.
                </span>
              </h2>

              {/* Underline */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B]" />
                <span className="h-[3px] w-6 rounded-full bg-[#C9A227]" />
              </div>

              <p className="mt-5 leading-relaxed text-slate-600">
                We welcome questions, partnerships, and opportunities to
                support rural communities.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={info.label}
                  info={info}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Highlights */}
            <div
              className={`space-y-3 rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-5 transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Why Reach Out
              </p>

              <div className="space-y-2.5">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} shadow-sm`}
                      >
                        <Icon size={12} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-bold text-slate-800">
                          {item.title}
                        </p>
                        <p className="text-[11.5px] leading-snug text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ============ RIGHT: FORM ============ */}
          <div className="lg:col-span-3">
            <div
              className={`relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_20px_60px_-25px_rgba(11,59,140,0.15)] transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Top gradient accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

              <div className="p-6 md:p-10">

                {submitted ? (
                  /* ============ SUCCESS STATE ============ */
                  <div className="contact-success-pop py-8 text-center">
                    {/* Animated check icon */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/30">
                      <svg
                        viewBox="0 0 52 52"
                        className="h-10 w-10"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle
                          cx="26"
                          cy="26"
                          r="24"
                          className="contact-check-circle"
                        />
                        <path
                          d="M14 27 L23 36 L38 18"
                          className="contact-check-mark"
                        />
                      </svg>
                    </div>

                    {/* Heading */}
                    <h2 className="contact-serif mt-6 text-2xl font-bold text-slate-900 md:text-3xl">
                      Thank you for reaching out!
                    </h2>

                    {/* Underline */}
                    <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                      <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent to-emerald-500" />
                      <span className="h-[3px] w-8 rounded-full bg-emerald-500" />
                      <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-transparent to-emerald-500" />
                    </div>

                    {/* Message */}
                    <p className="mx-auto mt-5 max-w-md leading-relaxed text-slate-600">
                      Your message has been acknowledged in this demo. To
                      actually send it to SPEECH NGO, we need to connect this
                      form to a backend or email service.
                    </p>

                    {/* Trust pill */}
                    <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-emerald-700">
                        Message Received
                      </span>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 bg-[length:200%_100%] px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-emerald-500/25 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-emerald-500/40"
                      >
                        <Send size={14} />
                        <span>Send Another Message</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ============ FORM STATE ============ */
                  <>
                    {/* Form Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2">
                          <Handshake size={14} className="text-[#0E7C7B]" />
                          <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#0E7C7B]">
                            Send Us a Message
                          </span>
                        </div>
                        <h2 className="contact-serif mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                          How can we help you today?
                        </h2>
                      </div>

                      {/* Headset icon */}
                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#005EB8]/10 to-[#0E7C7B]/10 md:flex">
                        <Headphones size={20} className="text-[#005EB8]" />
                      </div>
                    </div>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                      Fill in the form below and tell us how we can help. We
                      usually respond within 24–48 hours on working days.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                      {/* Row 1: Name + Email */}
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700"
                          >
                            Full Name <span className="text-[#005EB8]">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            maxLength={100}
                            autoComplete="name"
                            placeholder="Your full name"
                            className={inputClass("name")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700"
                          >
                            Email Address <span className="text-[#005EB8]">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            maxLength={254}
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={inputClass("email")}
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone + Subject */}
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700"
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
                            maxLength={20}
                            autoComplete="tel"
                            placeholder="Your phone number"
                            className={inputClass("phone")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700"
                          >
                            Subject <span className="text-[#005EB8]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("subject")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`${inputClass("subject")} appearance-none cursor-pointer pr-10`}
                            >
                              <option>General Inquiry</option>
                              <option>Donation</option>
                              <option>Volunteer</option>
                              <option>Partnership</option>
                              <option>Agriculture Programs</option>
                              <option>Other</option>
                            </select>
                            {/* Custom chevron */}
                            <ChevronRight
                              size={16}
                              className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 transition-transform duration-300 ${
                                focusedField === "subject" ? "rotate-[270deg] text-[#0E7C7B]" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-slate-700"
                        >
                          Your Message <span className="text-[#005EB8]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          minLength={10}
                          maxLength={2000}
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className={`${inputClass("message")} resize-y`}
                        />
                        <p className="mt-2 text-right text-[11px] font-medium text-slate-400">
                          {formData.message.length} / 2000
                        </p>
                      </div>

                      {/* Submit Button */}
                      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="submit"
                          className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-[length:200%_100%] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:scale-[1.02] hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
                        >
                          {/* Shine sweep */}
                          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute -inset-x-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-full" />
                          </span>

                          <Send
                            size={15}
                            className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                          <span className="relative">Send Message</span>
                        </button>

                        <div className="flex items-center justify-center gap-2 sm:justify-end">
                          <Heart size={11} className="text-[#C9A227]" fill="#C9A227" />
                          <span className="text-[11px] font-semibold text-slate-500">
                            Every message matters to us.
                          </span>
                        </div>
                      </div>

                      {/* Privacy note */}
                      <div className="flex items-start gap-2 rounded-xl border border-slate-200/60 bg-slate-50/60 p-3">
                        <Shield size={13} className="mt-0.5 shrink-0 text-[#0E7C7B]" />
                        <p className="text-[11.5px] leading-relaxed text-slate-500">
                          <span className="font-semibold text-slate-700">Note:</span>{" "}
                          This demo currently displays a confirmation only. Your
                          message is not sent or stored.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

        </section>

      </main>
    </>
  );
}