import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Heart,
  Globe,
  Users,
  Leaf,
  Droplets,
  Sun,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Navigation data structure
const navItems = [
  { label: "Home", path: "/", icon: null },
  { label: "About", path: "/about", icon: null },
  { label: "Our Team", path: "/team", icon: Users },
  {
    label: "Our Work",
    path: null,
    icon: Globe,
    children: [
      { label: "All Programs", path: "/programs", icon: Sparkles, desc: "Complete overview" },
      { label: "Agriculture", path: "/programs", icon: Leaf, desc: "Farming & soil health" },
      { label: "Environment", path: "/programs", icon: Droplets, desc: "Water & conservation" },
      { label: "Women Empowerment", path: "/programs", icon: Heart, desc: "Skills & livelihood" },
      { label: "Renewable Energy", path: "/programs", icon: Sun, desc: "Clean & solar tech" },
    ],
  },
  { label: "Impact", path: "/impact", icon: null },
  { label: "Activities", path: "/activities", icon: null },
  { label: "Contact", path: "/contact", icon: null },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change cleanup
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  // Delayed dropdown close (prevents flicker)
  const handleMouseEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredItem(label);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setHoveredItem(null);
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Font & base styles injected via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&display=swap');
        
        .navbar-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .brand-font {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
      `}</style>

      {/* Top gradient accent bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-[#0B3B8C] via-[#0E7C7B] to-[#C9A227]" />

      <header
        className={`navbar-font fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_-12px_rgba(11,59,140,0.15)] border-b border-slate-200/50"
            : "bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* ================= LOGO ================= */}
            <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0B3B8C] via-[#0E7C7B] to-[#C9A227] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B3B8C] to-[#0E7C7B] shadow-md shadow-[#0B3B8C]/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#0B3B8C]/30">
                  <img
                    src="/images/logo.png"
                    alt="SPEECH NGO Logo"
                    className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="brand-font bg-gradient-to-r from-[#0B3B8C] via-[#0E7C7B] to-[#0B3B8C] bg-clip-text text-[22px] font-bold tracking-tight text-transparent">
                    SPEECH
                  </span>
                  <Sparkles
                    size={13}
                    className="text-[#C9A227] opacity-0 transition-all duration-500 group-hover:rotate-12 group-hover:opacity-100"
                  />
                </div>
                <div className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <MapPin size={9} className="text-[#0E7C7B]" />
                  Chitradurga, Karnataka
                </div>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex lg:items-center lg:gap-0.5">
              {navItems.map((item) => {
                const ItemIcon = item.icon;
                const active = item.path && isActive(item.path);
                const open = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    ref={item.children ? dropdownRef : null}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children ? (
                      <button
                        className={`group relative flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-semibold tracking-tight transition-all duration-300 ${
                          open
                            ? "text-[#0B3B8C] bg-gradient-to-b from-blue-50/80 to-cyan-50/60"
                            : "text-slate-600 hover:text-[#0B3B8C] hover:bg-slate-50"
                        }`}
                      >
                        {ItemIcon && (
                          <ItemIcon
                            size={15}
                            className={`transition-colors duration-300 ${
                              open ? "text-[#0E7C7B]" : "text-slate-400 group-hover:text-[#0E7C7B]"
                            }`}
                          />
                        )}
                        <span>{item.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-all duration-300 ${
                            open ? "rotate-180 text-[#0E7C7B]" : "text-slate-400"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`group relative flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-semibold tracking-tight transition-all duration-300 ${
                          active
                            ? "text-[#0B3B8C] bg-gradient-to-b from-blue-50/80 to-cyan-50/60"
                            : "text-slate-600 hover:text-[#0B3B8C] hover:bg-slate-50"
                        }`}
                      >
                        {ItemIcon && (
                          <ItemIcon
                            size={15}
                            className={`transition-colors duration-300 ${
                              active ? "text-[#0E7C7B]" : "text-slate-400 group-hover:text-[#0E7C7B]"
                            }`}
                          />
                        )}
                        <span>{item.label}</span>
                        {/* Active underline */}
                        {active && (
                          <span className="absolute -bottom-0.5 left-1/2 h-[2.5px] w-7 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0B3B8C] via-[#0E7C7B] to-[#C9A227]" />
                        )}
                      </Link>
                    )}

                    {/* ============ DROPDOWN ============ */}
                    {item.children && open && (
                      <div className="absolute left-0 top-full pt-3">
                        <div className="w-[340px] overflow-hidden rounded-2xl border border-slate-200/60 bg-white/95 shadow-[0_20px_60px_-15px_rgba(11,59,140,0.25)] backdrop-blur-2xl">
                          {/* Dropdown header */}
                          <div className="relative overflow-hidden bg-gradient-to-r from-[#0B3B8C] via-[#0E7C7B] to-[#0B3B8C] px-5 py-4">
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/30 blur-2xl" />
                              <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-[#C9A227]/50 blur-2xl" />
                            </div>
                            <div className="relative flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                                <Globe size={16} className="text-white" />
                              </div>
                              <div>
                                <p className="text-[13px] font-bold text-white">Our Programs</p>
                                <p className="text-[10.5px] font-medium text-white/70">
                                  Explore our initiatives across India
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Dropdown items */}
                          <div className="p-2">
                            {item.children.map((child, idx) => {
                              const ChildIcon = child.icon;
                              return (
                                <Link
                                  key={idx}
                                  to={child.path}
                                  onClick={closeMenu}
                                  className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-cyan-50/60"
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 group-hover/item:bg-gradient-to-br group-hover/item:from-[#0B3B8C] group-hover/item:to-[#0E7C7B] group-hover/item:text-white group-hover/item:shadow-md">
                                    {ChildIcon && <ChildIcon size={14} />}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[13px] font-semibold text-slate-800 transition-colors group-hover/item:text-[#0B3B8C]">
                                      {child.label}
                                    </p>
                                    {child.desc && (
                                      <p className="text-[10.5px] font-medium text-slate-400">
                                        {child.desc}
                                      </p>
                                    )}
                                  </div>
                                  <ArrowRight
                                    size={13}
                                    className="text-slate-300 opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:text-[#0E7C7B] group-hover/item:opacity-100"
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ============ DONATE BUTTON ============ */}
              <Link
                to="/donate"
                className="group relative ml-4 overflow-hidden rounded-full p-[1.5px] transition-transform duration-300 hover:scale-[1.03]"
              >
                {/* Animated gradient border */}
                <span className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#0B3B8C,#0E7C7B,#C9A227,#0B3B8C)]" />

                <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B3B8C] to-[#0E7C7B] px-6 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-[#0B3B8C]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#0B3B8C]/40">
                  <Heart
                    size={14}
                    className="transition-transform duration-300 group-hover:scale-125 group-hover:fill-[#C9A227] group-hover:text-[#C9A227]"
                  />
                  <span className="brand-font tracking-wide">Donate Now</span>
                </span>
              </Link>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl text-[#0B3B8C] transition-all duration-300 hover:bg-blue-50 active:scale-95 lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-br from-[#0B3B8C]/40 to-[#0E7C7B]/30 backdrop-blur-md transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* ================= MOBILE PANEL ================= */}
      <div
        className={`navbar-font fixed top-0 right-0 z-40 h-full w-full max-w-[400px] transform bg-white shadow-[0_0_80px_rgba(11,59,140,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Header */}
          <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-[#0B3B8C] to-[#0E7C7B] px-6 py-5">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
              <div className="absolute -left-6 -bottom-6 h-20 w-20 rounded-full bg-[#C9A227]/40 blur-2xl" />
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/25">
                  <img src="/images/logo.png" alt="SPEECH Logo" className="h-7 w-7 object-contain" />
                </div>
                <div>
                  <p className="brand-font text-[20px] font-bold text-white">SPEECH</p>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    Chitradurga, Karnataka
                  </p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
              {navItems.map((item) => {
                const ItemIcon = item.icon;
                const active = item.path && isActive(item.path);
                const open = activeDropdown === item.label;

                return (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(open ? null : item.label)}
                          className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold transition-all duration-300 ${
                            open ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-[#0B3B8C]" : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {ItemIcon && (
                              <span
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                                  open
                                    ? "bg-gradient-to-br from-[#0B3B8C] to-[#0E7C7B] text-white shadow-md"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                <ItemIcon size={15} />
                              </span>
                            )}
                            {item.label}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-400 transition-transform duration-300 ${
                              open ? "rotate-180 text-[#0E7C7B]" : ""
                            }`}
                          />
                        </button>

                        {/* Sub-items */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-out ${
                            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-gradient-to-b border-[#0E7C7B]/30 pl-4">
                            {item.children.map((child, cIdx) => {
                              const ChildIcon = child.icon;
                              return (
                                <Link
                                  key={cIdx}
                                  to={child.path}
                                  onClick={closeMenu}
                                  className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-slate-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-[#0B3B8C]"
                                >
                                  {ChildIcon && (
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-500 transition-all duration-300 group-hover/item:bg-[#0E7C7B] group-hover/item:text-white">
                                      <ChildIcon size={12} />
                                    </span>
                                  )}
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-[#0B3B8C] shadow-sm"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {ItemIcon && (
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                              active
                                ? "bg-gradient-to-br from-[#0B3B8C] to-[#0E7C7B] text-white shadow-md"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            <ItemIcon size={15} />
                          </span>
                        )}
                        {item.label}
                        {active && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-[#0B3B8C] to-[#0E7C7B]" />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Card */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5">
              <p className="brand-font text-[13px] font-bold uppercase tracking-wider text-[#0B3B8C]">
                Get in Touch
              </p>
              <div className="mt-3 space-y-2.5">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#0B3B8C]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B3B8C]/10 text-[#0B3B8C]">
                    <Phone size={12} />
                  </span>
                  +91 99999 99999
                </a>
                <a
                  href="mailto:info@speech.org"
                  className="flex items-center gap-3 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#0B3B8C]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E7C7B]/10 text-[#0E7C7B]">
                    <Mail size={12} />
                  </span>
                  info@speech.org
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Donate */}
          <div className="border-t border-slate-200 bg-white p-4">
            <Link
              to="/donate"
              onClick={closeMenu}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B3B8C] via-[#0E7C7B] to-[#0B3B8C] bg-[length:200%_100%] px-6 py-4 font-bold text-white shadow-lg shadow-[#0B3B8C]/30 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl"
            >
              <Heart size={18} className="transition-transform duration-300 group-hover:scale-125 group-hover:fill-[#C9A227] group-hover:text-[#C9A227]" />
              <span className="brand-font tracking-wide">Donate Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Header spacer */}
      <div className={`transition-all duration-500 ${scrolled ? "h-[67px]" : "h-[83px]"}`} />
    </>
  );
}

export default Navbar;