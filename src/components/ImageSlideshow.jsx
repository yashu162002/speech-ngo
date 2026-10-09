import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Pause,
  Play,
  Sparkles,
  Camera,
  MapPin,
  Aperture,
  Image as ImageIcon,
} from "lucide-react";

const slides = [
  {
    url: "/images/slideshow/slideshow-1.jpg",
    title: "Community Pledge & Grassroots Participation",
    caption: "SPEECH NGO leading community awareness & pledge for sustainable development and unity.",
    location: "Chitradurga, Karnataka",
  },
  {
    url: "/images/slideshow/slideshow-2.jpg",
    title: "NABARD-KfW Soil Health Project",
    caption: "Nagatihalli Sub Watershed - Demonstrating alternate crop varieties and soil conservation.",
    location: "Nagatihalli Watershed",
  },
  {
    url: "/images/slideshow/slideshow-3.jpg",
    title: "Field Demonstration & Bio-fertilizer Training",
    caption: "Training farmers on natural soil nutrients, liquid bio-fertilizers, and sustainable farming.",
    location: "Field Training Site",
  },
  {
    url: "/images/slideshow/slideshow-4.jpg",
    title: "Micro-Irrigation & Sprinkler Systems",
    caption: "Promoting sprinkler systems and micro-irrigation to maximize crop yield and conserve water.",
    location: "Demonstration Farm",
  },
  {
    url: "/images/slideshow/slideshow-5.jpg",
    title: "NABARD Official Inspection Visit & Interaction",
    caption: "Regular field inspections, WDF projects, and livestock management support by SPEECH NGO.",
    location: "Project Site",
  },
  {
    url: "/images/slideshow/slideshow-6.jpg",
    title: "Renewable Energy Training Workshop",
    caption: "Training on Solar Photovoltaic Systems (SRTVPS) & Renewable Energy at Chitradurga Taluk.",
    location: "Chitradurga Taluk",
  },
  {
    url: "/images/slideshow/slideshow-7.jpg",
    title: "Rainwater Harvesting & Waste Management",
    caption: "Community workshop on rooftop rainwater harvesting, renewable energy & waste management at Chikkachelluru.",
    location: "Chikkachelluru Village",
  },
  {
    url: "/images/slideshow/slideshow-8.jpg",
    title: "Beneficiary Card Distribution & Field Operations",
    caption: "Direct beneficiary card distribution and GPS geotagged household verification by SPEECH field staff.",
    location: "Field Operations",
  },
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [clarityEnhanced, setClarityEnhanced] = useState(true);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState("next");
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const SLIDE_DURATION = 4500;

  // ============ NAVIGATION ============
  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? "next" : "prev");
    setCurrentIndex(idx);
    setProgress(0);
  };

  // ============ AUTOPLAY TIMER ============
  useEffect(() => {
    if (isPlaying && !isFullscreen) {
      timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
      return () => clearInterval(timerRef.current);
    }
  }, [isPlaying, currentIndex, isFullscreen, nextSlide]);

  // ============ PROGRESS BAR ============
  useEffect(() => {
    if (!isPlaying || isFullscreen) {
      setProgress(0);
      return;
    }
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressRef.current);
    }, 50);
    return () => clearInterval(progressRef.current);
  }, [currentIndex, isPlaying, isFullscreen]);

  // ============ KEYBOARD NAVIGATION ============
  useEffect(() => {
    const handleKey = (e) => {
      if (isFullscreen) {
        if (e.key === "Escape") setIsFullscreen(false);
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullscreen, nextSlide, prevSlide]);

  // ============ PRELOAD NEXT IMAGE ============
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIdx].url;
  }, [currentIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .slideshow-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .slideshow-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes ken-burns-active {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.15) translate(-1.5%, -1%); }
        }
        
        @keyframes caption-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes badge-in {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float-in {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .slide-active-image {
          animation: ken-burns-active 8s ease-out forwards;
        }
        
        .caption-anim {
          animation: caption-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .badge-anim {
          animation: badge-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .fullscreen-enter {
          animation: float-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        
        .slide-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="slideshow-font relative mx-auto w-full max-w-6xl">
        
        {/* ============ OUTER FRAME WITH AMBIENT GLOW ============ */}
        <div className="relative">
          {/* Ambient colored glows behind the frame */}
          <div className="slide-glow pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#005EB8]/20 via-[#0E7C7B]/20 to-[#C9A227]/20 blur-3xl" />

          {/* Main Frame */}
          <div className="relative rounded-[2rem] border border-slate-700/40 bg-gradient-to-br from-slate-900 via-[#0B1220] to-slate-900 p-2 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.6)] sm:p-3">
            
            {/* ============ MAIN VIEWPORT ============ */}
            <div
              className="group relative h-[420px] w-full overflow-hidden rounded-[1.5rem] bg-black sm:h-[490px] md:h-[580px]"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={slide.url}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className={`h-full w-full object-cover ${
                      index === currentIndex ? "slide-active-image" : ""
                    } ${
                      clarityEnhanced
                        ? "contrast-[1.07] brightness-[1.03] saturate-[1.10]"
                        : ""
                    }`}
                    style={{
                      imageRendering: clarityEnhanced ? "crisp-edges" : "auto",
                    }}
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
                </div>
              ))}

              {/* ============ TOP-RIGHT CONTROLS ============ */}
              <div className="absolute right-3 top-3 z-30 flex items-center gap-1.5 sm:right-4 sm:top-4 sm:gap-2">
                {/* HD Clarity Toggle */}
                <button
                  onClick={() => setClarityEnhanced(!clarityEnhanced)}
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[10.5px] ${
                    clarityEnhanced
                      ? "bg-gradient-to-r from-[#0E7C7B] to-[#005EB8] text-white shadow-lg shadow-[#0E7C7B]/40"
                      : "bg-black/50 text-white/70 hover:bg-black/70"
                  }`}
                  title="Toggle HD Clarity"
                >
                  <Sparkles
                    size={11}
                    className={clarityEnhanced ? "animate-pulse" : ""}
                  />
                  {clarityEnhanced ? "HD On" : "HD Off"}
                </button>

                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/20 sm:h-9 sm:w-9"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/20 sm:h-9 sm:w-9"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={13} />
                </button>
              </div>

              {/* ============ TOP-LEFT CAMERA TAG ============ */}
              <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1.5">
                <Aperture size={12} className="text-[#C9A227]" />
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-white/90 sm:text-[10.5px]">
                  Field Photography
                </span>
              </div>

              {/* ============ NAVIGATION ARROWS ============ */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-500 hover:border-[#C9A227]/50 hover:bg-[#C9A227] hover:text-slate-900 opacity-75 sm:left-4 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-500 hover:border-[#C9A227]/50 hover:bg-[#C9A227] hover:text-slate-900 opacity-75 sm:right-4 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>

              {/* ============ CAPTION OVERLAY ============ */}
              <div
                key={currentIndex}
                className="absolute bottom-4 left-4 right-4 z-30 max-w-3xl sm:bottom-6 sm:left-6 sm:right-6"
              >
                {/* Counter Badge */}
                <div className="badge-anim mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/15 px-2.5 py-1 backdrop-blur-md sm:mb-3 sm:px-3 sm:py-1.5">
                  <Camera size={10} className="text-[#C9A227]" />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#C9A227] sm:text-[10px]">
                    Slide {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="caption-anim slideshow-serif text-lg font-bold leading-tight text-white drop-shadow-lg sm:text-2xl md:text-3xl lg:text-4xl"
                  style={{ animationDelay: "0.1s" }}
                >
                  {slides[currentIndex].title}
                </h3>

                {/* Caption */}
                <p
                  className="caption-anim mt-1.5 line-clamp-2 max-w-2xl text-xs leading-relaxed text-slate-200/90 sm:mt-3 sm:text-sm md:text-base"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slides[currentIndex].caption}
                </p>

                {/* Location tag */}
                <div
                  className="caption-anim mt-3 flex items-center gap-1.5 sm:mt-4 sm:gap-2"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#005EB8]/30 backdrop-blur-sm sm:h-6 sm:w-6">
                    <MapPin size={10} className="text-cyan-300" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300 sm:text-[11px]">
                    {slides[currentIndex].location}
                  </span>
                </div>
              </div>

              {/* ============ PROGRESS BAR ============ */}
              <div className="absolute bottom-0 left-0 right-0 z-40 h-[3px] bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227] transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ============ THUMBNAIL STRIP ============ */}
        <div className="mt-5 flex items-center gap-3 px-1">
          {/* Left label */}
          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <ImageIcon size={14} className="text-[#0E7C7B]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Gallery
            </span>
          </div>

          {/* Thumbnails */}
          <div className="scrollbar-none flex flex-1 gap-2.5 overflow-x-auto py-1">
            {slides.map((slide, idx) => (
              <button
                key={slide.url}
                onClick={() => goToSlide(idx)}
                className={`group/thumb relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-500 sm:h-16 sm:w-24 ${
                  idx === currentIndex
                    ? "scale-105 border-[#C9A227] shadow-lg shadow-[#C9A227]/30"
                    : "border-white/10 opacity-50 hover:scale-[1.03] hover:border-[#0E7C7B]/50 hover:opacity-100"
                }`}
              >
                <img
                  src={slide.url}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                />
                
                {/* Dark overlay for inactive */}
                {idx !== currentIndex && (
                  <div className="absolute inset-0 bg-slate-950/30 transition-opacity duration-300 group-hover/thumb:opacity-0" />
                )}

                {/* Number badge on active */}
                {idx === currentIndex && (
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#C9A227]/40 via-transparent to-transparent p-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#C9A227] text-[9px] font-black text-slate-900">
                      {idx + 1}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right label */}
          <div className="hidden shrink-0 md:block">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              {slides.length} Field Photos
            </span>
          </div>
        </div>

        {/* ============ FULLSCREEN LIGHTBOX ============ */}
        {isFullscreen && (
          <div className="slideshow-font fixed inset-0 z-50 flex items-center justify-center bg-slate-950/98 p-4 backdrop-blur-2xl">
            {/* Ambient glow behind lightbox image */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#005EB8]/15 blur-[140px]" />
              <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#0E7C7B]/15 blur-[140px]" />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/20"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Lightbox Content */}
            <div className="fullscreen-enter relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col">
              {/* Counter badge */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <Aperture size={13} className="text-[#C9A227]" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-white/70">
                  Slide {currentIndex + 1} of {slides.length}
                </span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={slides[currentIndex].url}
                  alt={slides[currentIndex].title}
                  className={`max-h-[70vh] w-full object-contain ${
                    clarityEnhanced
                      ? "contrast-[1.07] brightness-[1.03] saturate-[1.10]"
                      : ""
                  }`}
                />

                {/* Nav arrows inside lightbox */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C9A227]/50 hover:bg-[#C9A227] hover:text-slate-900"
                  aria-label="Previous"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C9A227]/50 hover:bg-[#C9A227] hover:text-slate-900"
                  aria-label="Next"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <h4 className="slideshow-serif text-xl font-bold text-white md:text-2xl">
                  {slides[currentIndex].title}
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  {slides[currentIndex].caption}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                  <MapPin size={11} className="text-cyan-300" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                    {slides[currentIndex].location}
                  </span>
                </div>
              </div>

              {/* Thumbnails in lightbox */}
              <div className="scrollbar-none mt-6 flex justify-center gap-2 overflow-x-auto pb-2">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.url}
                    onClick={() => goToSlide(idx)}
                    className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      idx === currentIndex
                        ? "scale-110 border-[#C9A227] shadow-lg shadow-[#C9A227]/30"
                        : "border-white/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={slide.url}
                      alt={`Thumb ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}