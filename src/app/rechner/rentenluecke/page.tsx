import RentenlueckeRechner from "./RentenlueckeRechner";

export const metadata = {
  title: "Rentenlücken-Rechner – Selbstvorsorgerin",
  description:
    "Berechne deine persönliche Rentenlücke – inklusive Elternzeit- und Teilzeit-Szenarien. Speziell für Frauen.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-pink-950/50 text-pink-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-pink-900/50">
          Interaktiver Rechner
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
          Wie groß ist deine <span className="gradient-text">Rentenlücke?</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Frauen bekommen oft einen Schock, wenn sie ihre erste Renteninformation lesen.
          Dieser Rechner zeigt dir, warum – und was du tun kannst. Alle Eingaben bleiben in deinem Browser,
          keine Daten werden gespeichert.
        </p>
      </div>

      <RentenlueckeRechner />
    </div>
  );
}
