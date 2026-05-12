import SparplanRechner from "./SparplanRechner";

export const metadata = {
  title: "Sparplan-Rechner – Selbstvorsorgerin",
  description:
    "Simuliere deinen ETF-Sparplan und sieh, was Elternzeit und der Gender Pay Gap wirklich kosten.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-pink-950/50 text-pink-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-pink-900/50">
          Interaktiver Rechner
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
          Sparplan-Rechner mit{" "}
          <span className="gradient-text">Realitäts-Check</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Sieh, wie dein Geld wächst – und was Elternzeit und der Gender Pay Gap konkret kosten.
          Der Rechner macht strukturelle Ungleichheit in Euro sichtbar, damit du informiert
          gegensteuern kannst.
        </p>
      </div>

      <SparplanRechner />
    </div>
  );
}
