"use client";

import { useEffect, useState } from "react";

export default function ParallaxQuote() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Weicher Übergang oben */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Parallax-Sektion */}
      <section
        aria-hidden="false"
        style={{
          backgroundImage: "url('/images/mitte.jpg')",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "65vh",
          minHeight: "380px",
        }}
        className="relative w-full flex items-center justify-center"
      >
        {/* Dunkler Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Zitat */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
          >
            „Finanzielle Unabhängigkeit
            <br className="hidden sm:block" />
            {" "}ist kein Glück –
            <br className="hidden sm:block" />
            {" "}sie ist ein Plan."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-pink-400/60" />
            <p
              className="text-pink-300 text-sm font-medium uppercase tracking-widest"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            >
              Doris Greinert · #selbstvorsorgerin
            </p>
            <div className="h-px w-12 bg-pink-400/60" />
          </div>
        </div>
      </section>

      {/* Weicher Übergang unten */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
