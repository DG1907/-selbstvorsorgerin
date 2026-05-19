"use client";

import { useEffect, useState } from "react";

export default function ClosingQuote() {
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
          minHeight: "70vh",
        }}
        className="relative w-full flex items-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Inhalt – auf Desktop rechts, auf Mobile zentriert */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24">
          <div className="md:ml-[48%] md:max-w-[560px] max-w-full">

            {/* Großes Anführungszeichen in Pink */}
            <div
              className="leading-none select-none mb-[-1.5rem] sm:mb-[-2rem]"
              aria-hidden="true"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(6rem, 14vw, 10rem)",
                color: "#f472b6",
                lineHeight: 1,
              }}
            >
              &ldquo;
            </div>

            {/* Zitat */}
            <blockquote>
              <p
                className="text-white/95 italic"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.65rem, 4vw, 2.9rem)",
                  lineHeight: 1.45,
                  textShadow: "0 2px 14px rgba(0,0,0,0.65)",
                }}
              >
                Ich werde gern älter,
                <br />
                jünger war ich schon.
              </p>

              {/* Trennlinie + Quelle */}
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-pink-400/60 flex-shrink-0" />
                <cite
                  className="not-italic text-white/55 text-sm tracking-widest uppercase"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                  — Doris Greinert
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Sanfter Übergang zum Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
