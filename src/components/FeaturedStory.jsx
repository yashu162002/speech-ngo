import { ArrowRight, Quote, Sparkles, BookOpen, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function FeaturedStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax on mouse move
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700;9..144,900&display=swap');
        
        .story-font {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .story-serif {
          font-family: 'Fraunces', Georgia, serif;
          font-optical-sizing: auto;
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer-line {
          0% { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        
        @keyframes float-ornament {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes gradient-slide {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-up {
          animation: fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .animate-float-ornament {
          animation: float-ornament 7s ease-in-out infinite;
        }
        
        .animate-gradient-slide {
          background-size: 200% auto;
          animation: gradient-slide 5s ease infinite;
        }
        
        .story-underline {
          transform-origin: left;
          animation: shimmer-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="stories"
        className="story-font relative overflow-hidden bg-gradient-to-br from-[#F5F9FC] via-[#EEF5FA] to-[#F5F9FC] py-20 md:py-28"
      >
        {/* ================= BACKGROUND DECORATIONS ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#005EB8]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0E7C7B]/5 blur-3xl" />
          
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #005EB8 1.5px, transparent 0)`,
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Label */}
          <div
            className={`mb-10 flex items-center justify-center gap-3 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#005EB8]/40" />
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#C9A227]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#005EB8]">
                Featured Story
              </span>
              <Sparkles size={14} className="text-[#C9A227]" />
            </div>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#005EB8]/40" />
          </div>

          {/* ================= MAIN CARD ================= */}
          <div
            className={`relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_25px_70px_-25px_rgba(11,59,140,0.25)] transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-12">

              {/* ============ IMAGE SIDE ============ */}
              <div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                className="relative col-span-6 min-h-[450px] overflow-hidden lg:min-h-[640px]"
              >
                {/* Background image with parallax */}
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1509099836639-18ba02c7e1d2?auto=format&fit=crop&w=1200&q=85')",
                    transform: `scale(1.1) translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
                  }}
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B8C]/85 via-[#0B3B8C]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 lg:to-white/30" />
                <div className="absolute inset-0 bg-[#005EB8]/10 mix-blend-multiply" />

                {/* Top badge on image */}
                <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
                  <BookOpen size={13} className="text-white" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-white">
                    Field Story
                  </span>
                </div>

                {/* Floating decorative ornament */}
                <div className="animate-float-ornament absolute right-6 top-6 z-20 h-16 w-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md" />

                {/* Quote block on image bottom */}
                <div className="absolute inset-x-6 bottom-6 z-20 lg:inset-x-8 lg:bottom-8">
                  <div className="relative rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md lg:p-6">
                    <Quote size={24} className="absolute -top-3 left-5 text-[#C9A227]" fill="#C9A227" />
                    <p className="story-serif mt-2 text-base italic leading-relaxed text-white lg:text-lg">
                      "Change doesn't come from outside — it grows from within the community."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-white/25" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                        SPEECH Field Team
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom left stat overlay */}
                <div className="absolute bottom-6 left-6 z-20 hidden lg:block">
                  <div className="flex items-baseline gap-2">
                    <span className="story-serif text-4xl font-bold text-white">
                      25+
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Years of Service
                    </span>
                  </div>
                </div>
              </div>

              {/* ============ CONTENT SIDE ============ */}
              <div className="relative col-span-6 flex items-center bg-white p-8 md:p-14 lg:p-16">
                {/* Side accent line */}
                <div className="absolute left-0 top-16 h-24 w-[3px] rounded-r-full bg-gradient-to-b from-[#005EB8] via-[#0E7C7B] to-[#C9A227]" />

                <div className="w-full">

                  {/* Eyebrow */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#005EB8] to-[#0E7C7B] shadow-md shadow-[#005EB8]/20">
                      <Heart size={14} className="text-white" fill="white" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#005EB8]">
                      Community-Led Change
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="mt-6 leading-[1.1]">
                    <span className="story-serif block text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-[56px]">
                      When communities
                    </span>
                    <span className="story-serif relative mt-1 block text-4xl font-bold tracking-tight md:text-5xl lg:text-[56px]">
                      <span className="bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#005EB8] bg-clip-text text-transparent animate-gradient-slide">
                        lead, change lasts.
                      </span>
                    </span>
                  </h2>

                  {/* Decorative underline */}
                  <div
                    className={`story-underline mt-5 h-[3px] w-32 rounded-full bg-gradient-to-r from-[#005EB8] via-[#0E7C7B] to-[#C9A227] transition-all duration-1000 delay-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Description */}
                  <p className="mt-7 text-[17px] leading-relaxed text-slate-600">
                    Sustainable development begins by{" "}
                    <span className="font-semibold text-[#0B3B8C]">listening to communities</span>{" "}
                    and understanding what they need. SPEECH works alongside people to
                    develop solutions that can create{" "}
                    <span className="relative inline-block font-semibold text-[#0B3B8C]">
                      lasting impact
                      <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-[#0E7C7B] to-[#C9A227]/40" />
                    </span>
                    .
                  </p>

                  {/* Feature bullets */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { num: "50+", label: "Villages Reached" },
                      { num: "10K+", label: "Lives Touched" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-4"
                      >
                        <p className="story-serif text-2xl font-bold bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-clip-text text-transparent">
                          {stat.num}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#005EB8] to-[#0E7C7B] bg-[length:200%_100%] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#005EB8]/25 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#005EB8]/40"
                  >
                    <span className="relative flex items-center gap-2">
                      Read Our Stories
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </a>

                  {/* Bottom micro-text */}
                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
                    Real people · Real places · Real impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedStory;