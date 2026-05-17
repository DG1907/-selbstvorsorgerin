"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import RisikoRenditeChart from "@/components/RisikoRenditeChart";
import FrauenProfile from "@/components/FrauenProfile";
import EinkommensGuide from "@/components/EinkommensGuide";
import DorisSection from "@/components/DorisSection";
import ParallaxQuote from "@/components/ParallaxQuote";
import TestimonialQuote from "@/components/TestimonialQuote";

const BOOKING_URL = "https://provinzialdorisgreinert.simplybook.it/v2/";

const stats = [
  {
    value: "53%",
    label: "weniger Rente",
    note: "Frauen erhalten im Schnitt 53% weniger gesetzliche Rente als Männer",
  },
  {
    value: "18",
    label: "Jahre weniger Vollzeit",
    note: "Frauen mit Kindern arbeiten im Schnitt 18 Jahre weniger in Vollzeit",
  },
  {
    value: "1 von 3",
    label: "Frauen armutsgefährdet",
    note: "Im Alter sind Frauen deutlich häufiger von Altersarmut betroffen",
  },
];

const features = [
  {
    icon: "📊",
    title: "Rentenlücken-Rechner",
    desc: "Berechne deine persönliche Rentenlücke – inklusive Elternzeit- und Teilzeit-Szenarien.",
    href: "/rechner/rentenluecke",
    cta: "Lücke berechnen",
  },
  {
    icon: "🌱",
    title: "Sparplan-Rechner",
    desc: "Zeige deinem Geld, wo es arbeiten soll. Vergleiche ETF-Sparplan, Riester und mehr.",
    href: "/rechner/sparplan",
    cta: "Sparplan simulieren",
  },
  {
    icon: "📚",
    title: "Wissen auf Augenhöhe",
    desc: "Kein Finanzjargon. Nur klare Erklärungen für deine Lebenssituation.",
    href: "/wissen",
    cta: "Wissen aufbauen",
  },
];

const challenges = [
  {
    emoji: "👶",
    title: "Elternzeit als Chance",
    text: "Schon 100 €/Monat ETF-Sparplan während der Elternzeit können über 20 Jahre zu mehr als 50.000 € wachsen.",
  },
  {
    emoji: "⏱️",
    title: "Teilzeit clever nutzen",
    text: "Auch mit kleinerem Einkommen lässt sich Vermögen aufbauen. Zinseszins und staatliche Förderung arbeiten für dich.",
  },
  {
    emoji: "💸",
    title: "Lücken aktiv schließen",
    text: "Steuerstrategien, staatliche Förderungen und ETF-Sparpläne gleichen Einkommenslücken deutlich aus.",
  },
  {
    emoji: "💪",
    title: "Finanziell frei sein",
    text: "Ein eigenes Depot gibt dir echte Wahlfreiheit – egal was das Leben bringt.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Hintergrundbild – Gesicht links zentriert */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/start.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "30% center" }}
        />
        {/* Gradient von links transparent → rechts dunkel */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/92 via-black/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 py-24 flex justify-end">
          <div className="max-w-lg text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-6"
            >
              Vermögensaufbau für Frauen
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-white"
            >
              Dein Geld.
              <br />
              <span className="gradient-text">Deine Regeln.</span>
              <br />
              Deine Zukunft.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/70 leading-relaxed mb-8"
            >
              Finanzielle Unabhängigkeit ist kein Zufall – sie ist ein Plan.
              Ich gebe dir die Werkzeuge und das Wissen dafür.
            </motion.p>

            {/* Avatar-Stack + Sterne */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 mb-10 justify-end"
            >
              <div className="flex -space-x-2.5">
                {["/images/lisa.jpg", "/images/alison.jpg", "/images/sandra.jpg"].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                ))}
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">+</div>
              </div>
              <div>
                <div className="text-pink-400 text-base">★★★★★</div>
                <div className="text-white/50 text-xs">von echten Kundinnen</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-end"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold text-sm tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Gratis Termin buchen
              </a>
              <Link
                href="/rechner/rentenluecke"
                className="inline-block px-8 py-4 border border-white/20 text-white/70 font-semibold text-sm tracking-wide uppercase hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
              >
                Rentenlücke berechnen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {stats.map((s, i) => (
              <AnimatedSection key={s.value} delay={i * 0.1} className="text-center">
                <AnimatedCounter value={s.value} className="text-5xl font-bold gradient-text mb-2 tracking-tight block" />
                <div className="text-white font-semibold mb-2">{s.label}</div>
                <div className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">{s.note}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIEN ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-28">
        <AnimatedSection className="text-center mb-16">
          <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-4">Deine Ausgangslage</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Für jede Lebensphase
            <br />
            <span className="gradient-text">die richtige Strategie</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            Du hast mehr Hebel als du denkst – egal wo du heute stehst.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="group rounded-2xl p-8 border border-white/5 hover:border-pink-500/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="text-3xl mb-5">{c.emoji}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed">{c.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="border-y border-white/5 py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-4">Kostenlose Tools</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Deine Werkzeuge</h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto">
              Interaktive Rechner und verständliches Wissen – sofort nutzbar.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={f.href} delay={i * 0.12}>
                <Link
                  href={f.href}
                  className="group rounded-2xl p-8 border border-white/5 hover:border-pink-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-pink-500/5"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-1 mb-6">{f.desc}</p>
                  <span className="text-pink-400 font-semibold text-sm group-hover:text-pink-300 transition-colors flex items-center gap-1">
                    {f.cta}
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >→</motion.span>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── RISIKO-RENDITE CHART ── */}
      <RisikoRenditeChart />

      {/* ── FRAUEN-PROFILE ── */}
      <FrauenProfile />

      {/* ── EINKOMMEN GUIDE ── */}
      <EinkommensGuide />

      {/* ── PARALLAX QUOTE ── */}
      <ParallaxQuote />

      {/* ── DORIS ── */}
      <DorisSection />

      {/* ── TESTIMONIAL QUOTE ── */}
      <TestimonialQuote />

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-pink-500 to-pink-700 p-14 text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative">
              <p className="text-pink-200 text-sm font-medium uppercase tracking-widest mb-4">Jetzt loslegen</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                Fang heute an –<br />nicht irgendwann.
              </h2>
              <p className="text-pink-100 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                Jedes Jahr Warten kostet dich Zinseszins.
                Der beste Zeitpunkt war gestern – der zweitbeste ist jetzt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rechner/rentenluecke"
                  className="px-8 py-4 rounded-full bg-white text-pink-600 font-bold text-base hover:bg-pink-50 transition-colors"
                >
                  Rentenlücke berechnen
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-pink-700/60 border border-white/20 text-white font-semibold text-base hover:bg-pink-700 transition-colors"
                >
                  Beratung buchen →
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── DISCLAIMER ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 text-center">
        <p className="text-xs text-gray-700 leading-relaxed">
          Alle Inhalte dienen ausschließlich der allgemeinen Information und stellen keine individuelle Finanzberatung dar.
          Für persönliche Anlageentscheidungen empfehlen wir die Beratung durch eine zugelassene Finanzberaterin.
        </p>
      </div>
    </>
  );
}
