"use client";

import { useEffect, useState } from "react";

export default function TestimonialQuote() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Sanfter Übergang von oben */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />

      <section
        style={{
          backgroundImage: "url('/images/unten.jpg')",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "75vh",
        }}
        className="relative w-full flex items-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Inhalt – auf Desktop rechts, auf Mobile zentriert */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24">
          <div className="md:ml-[48%] md:max-w-[560px] max-w-full">

            {/* Großes Anführungszeichen */}
            <div
              className="font-serif text-[8rem] sm:text-[10rem] leading-none text-pink-400/30 select-none mb-[-2rem] sm:mb-[-2.5rem]"
              aria-hidden="true"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              &ldquo;
            </div>

            {/* Zitat */}
            <blockquote>
              <p
                className="text-white/95 leading-[1.45] font-serif italic"
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                }}
              >
                Ich werde gern älter,
                <br />
                jünger war ich schon.
              </p>

              {/* Trennlinie + Quelle */}
              <footer className="mt-7 flex items-center gap-4">
                <div className="h-px w-10 bg-pink-400/50 flex-shrink-0" />
                <cite
                  className="not-italic text-white/60 text-base tracking-wide"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                  Doris Greinert
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Sanfter Übergang zum Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
