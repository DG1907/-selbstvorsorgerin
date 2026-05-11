"use client";

import { useState, useMemo } from "react";

interface Inputs {
  alter: number;
  renteneintritt: number;
  bruttoEinkommen: number;
  teilzeitJahre: number;
  teilzeitProzent: number;
  elternzeitJahre: number;
  gewuenschteRente: number;
}

const defaults: Inputs = {
  alter: 32,
  renteneintritt: 67,
  bruttoEinkommen: 45000,
  teilzeitJahre: 8,
  teilzeitProzent: 60,
  elternzeitJahre: 2,
  gewuenschteRente: 2000,
};

function formatEur(n: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  hint,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  hint?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-bold text-violet-700">
          {unit === "€"
            ? formatEur(value)
            : `${value}${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-violet-100 rounded-full appearance-none cursor-pointer accent-violet-600"
      />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

export default function RentenlueckeRechner() {
  const [inputs, setInputs] = useState<Inputs>(defaults);

  const set = (key: keyof Inputs) => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }));

  const result = useMemo(() => {
    const arbeitsJahreGesamt = inputs.renteneintritt - inputs.alter;
    const vollzeitJahre = Math.max(
      0,
      arbeitsJahreGesamt - inputs.teilzeitJahre - inputs.elternzeitJahre
    );
    const effektivVollzeitJahre =
      vollzeitJahre +
      inputs.teilzeitJahre * (inputs.teilzeitProzent / 100) +
      inputs.elternzeitJahre * 0.33;

    const rentenEntgeltpunkte = effektivVollzeitJahre * (inputs.bruttoEinkommen / 43142);
    const aktuellerRentenwert = 39.32;
    const hochrechnungsFaktor = Math.pow(1.015, arbeitsJahreGesamt);
    const geschaetzteRente = rentenEntgeltpunkte * aktuellerRentenwert * hochrechnungsFaktor;

    const rentenluecke = Math.max(0, inputs.gewuenschteRente - geschaetzteRente);

    const kapitalBedarf = rentenluecke * 12 * 22;
    const sparrate = kapitalBedarf / (effektivVollzeitJahre * 12 * 150);

    return {
      geschaetzteRente: Math.round(geschaetzteRente),
      rentenluecke: Math.round(rentenluecke),
      kapitalBedarf: Math.round(kapitalBedarf),
      monatlicheSparrate: Math.round(sparrate * 150),
      effektivVollzeitJahre: Math.round(effektivVollzeitJahre),
    };
  }, [inputs]);

  const lueckeProzent =
    inputs.gewuenschteRente > 0
      ? Math.min(100, (result.rentenluecke / inputs.gewuenschteRente) * 100)
      : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-violet-100 p-6 space-y-6">
        <h2 className="text-lg font-bold text-gray-900">Deine Situation</h2>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>Hinweis:</strong> Elternzeit und Teilzeit reduzieren deine Rentenpunkte erheblich – das Ergebnis zeigt dir, wie groß dieser Effekt wirklich ist.
        </div>

        <Slider label="Dein aktuelles Alter" value={inputs.alter} min={20} max={60} unit=" Jahre" onChange={set("alter")} />
        <Slider label="Geplanter Renteneintritt" value={inputs.renteneintritt} min={60} max={70} unit=" Jahre" onChange={set("renteneintritt")} />
        <Slider
          label="Brutto-Jahreseinkommen (Vollzeit)"
          value={inputs.bruttoEinkommen}
          min={20000}
          max={120000}
          step={1000}
          unit="€"
          hint="Deutschlandweit 2024: Frauendurchschnitt ~38.000 €, Männerdurchschnitt ~47.000 €"
          onChange={set("bruttoEinkommen")}
        />
        <Slider
          label="Elternzeit gesamt"
          value={inputs.elternzeitJahre}
          min={0}
          max={10}
          unit=" Jahre"
          hint="Elternzeit wird nur teilweise als Rentenzeit angerechnet"
          onChange={set("elternzeitJahre")}
        />
        <Slider
          label="Jahre in Teilzeit"
          value={inputs.teilzeitJahre}
          min={0}
          max={30}
          unit=" Jahre"
          hint="68% der Teilzeitbeschäftigten in Deutschland sind Frauen"
          onChange={set("teilzeitJahre")}
        />
        <Slider
          label="Teilzeit-Stundenanteil"
          value={inputs.teilzeitProzent}
          min={20}
          max={90}
          step={5}
          unit="%"
          hint="Häufigster Wert bei Müttern: 60–70%"
          onChange={set("teilzeitProzent")}
        />
        <Slider
          label="Gewünschte Rente (netto/Monat)"
          value={inputs.gewuenschteRente}
          min={800}
          max={4000}
          step={50}
          unit="€"
          hint="Zum Vergleich: Armutsgefährdungsgrenze 2024 liegt bei ca. 1.310 €/Monat"
          onChange={set("gewuenschteRente")}
        />
      </div>

      {/* Results */}
      <div className="space-y-5">
        {/* Main result */}
        <div className="bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl p-6 text-white">
          <p className="text-violet-200 text-sm mb-1">Deine geschätzte gesetzliche Rente</p>
          <div className="text-5xl font-bold mb-1">{formatEur(result.geschaetzteRente)}</div>
          <p className="text-violet-200 text-sm">pro Monat (netto, ca.)</p>
        </div>

        {/* Gap */}
        <div className="bg-white rounded-2xl border border-violet-100 p-6">
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-gray-900">Rentenlücke</p>
            <span className="text-xl font-bold text-pink-600">{formatEur(result.rentenluecke)}/Monat</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${lueckeProzent}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {Math.round(lueckeProzent)}% deiner gewünschten Rente fehlen aus der gesetzlichen Versicherung
          </p>
        </div>

        {/* Effective years */}
        <div className="bg-white rounded-2xl border border-violet-100 p-6">
          <p className="text-sm text-gray-500 mb-1">Effektive Vollzeit-Beitragsjahre</p>
          <p className="text-3xl font-bold text-gray-900">{result.effektivVollzeitJahre} Jahre</p>
          <p className="text-xs text-gray-500 mt-1">
            Elternzeit & Teilzeit reduzieren deine Rentenansprüche deutlich
          </p>
        </div>

        {/* Capital needed */}
        <div className="bg-white rounded-2xl border border-violet-100 p-6">
          <p className="text-sm text-gray-500 mb-1">Kapital, das du aufbauen solltest</p>
          <p className="text-3xl font-bold gradient-text">{formatEur(result.kapitalBedarf)}</p>
          <p className="text-xs text-gray-500 mt-1">
            Um die Lücke über ~22 Rentenjahre zu schließen (vereinfacht, ohne Inflation)
          </p>
        </div>

        {/* Suggested savings */}
        <div className="bg-violet-50 rounded-2xl border border-violet-200 p-6">
          <p className="text-sm text-violet-700 font-medium mb-1">Empfohlene monatliche Sparrate</p>
          <p className="text-3xl font-bold text-violet-800">{formatEur(result.monatlicheSparrate)}/Monat</p>
          <p className="text-xs text-violet-600 mt-2">
            Bei 7% p.a. ETF-Rendite (historischer Durchschnitt MSCI World)
          </p>
          <a
            href="/rechner/sparplan"
            className="mt-4 inline-block text-sm font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900"
          >
            Im Sparplan-Rechner simulieren →
          </a>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          Diese Berechnung ist eine vereinfachte Schätzung zu Bildungszwecken. Sie berücksichtigt keine individuellen Steuer-, Sozialabgaben- oder Inflationseffekte. Kein Ersatz für professionelle Finanzberatung.
        </p>
      </div>
    </div>
  );
}
