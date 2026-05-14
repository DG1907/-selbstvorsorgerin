"use client";

import { useState, useMemo } from "react";
import InfoTooltip from "@/components/InfoTooltip";

interface Inputs {
  alter: number;
  renteneintritt: number;
  bruttoEinkommen: number;
  teilzeitJahre: number;
  teilzeitProzent: number;
  elternzeitJahre: number;
  gewuenschteRente: number;
  inflationsRate: number;
}

const defaults: Inputs = {
  alter: 32,
  renteneintritt: 67,
  bruttoEinkommen: 45000,
  teilzeitJahre: 8,
  teilzeitProzent: 60,
  elternzeitJahre: 2,
  gewuenschteRente: 2000,
  inflationsRate: 2.0,
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
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-bold text-pink-400">
          {unit === "€" ? formatEur(value) : `${value}${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-[#2a2a2a] rounded-full appearance-none cursor-pointer accent-pink-500"
      />
      {hint && <p className="text-xs text-gray-600">{hint}</p>}
    </div>
  );
}

function ToggleOption({
  label,
  active,
  onToggle,
  tooltip,
  children,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
  tooltip: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={`rounded-xl border p-4 transition-all duration-200 ${active ? "border-pink-500/40 bg-pink-950/20" : "border-[#2a2a2a] bg-[#0d0d0d]"}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm font-medium text-gray-200 leading-snug">{label}</span>
          <InfoTooltip content={tooltip} />
        </div>
        <button
          onClick={onToggle}
          className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${active ? "bg-pink-500" : "bg-[#3a3a3a]"}`}
          aria-pressed={active}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${active ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>
      {active && children && <div className="mt-4 pt-4 border-t border-[#2a2a2a]">{children}</div>}
    </div>
  );
}

export default function RentenlueckeRechner() {
  const [inputs, setInputs] = useState<Inputs>(defaults);
  const [withInflation, setWithInflation] = useState(false);
  const [withTax, setWithTax] = useState(false);

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
    const geschaetzteRenteBrutto = rentenEntgeltpunkte * aktuellerRentenwert * hochrechnungsFaktor;

    // Steuer auf gesetzliche Rente (Kohortenprinzip – vereinfacht)
    // Für Eintrittsjahr ~2040+: ~100% steuerpflichtig
    // Grundfreibetrag 2024: ca. 11.784€/Jahr = 982€/Monat
    // Vereinfachter Steuersatz auf den Überschuss: ~18%
    const grundfreibetragMonatlich = 985;
    const steuerpflichtigBrutto = Math.max(0, geschaetzteRenteBrutto - grundfreibetragMonatlich);
    const steuerAufRente = steuerpflichtigBrutto * 0.18;
    const geschaetzteRenteNetto = geschaetzteRenteBrutto - steuerAufRente;

    const angezeigteRente = withTax ? geschaetzteRenteNetto : geschaetzteRenteBrutto;

    // Inflation: Kaufkraft der Rente in heutigen Euro
    const inflationsFaktor = Math.pow(1 + inputs.inflationsRate / 100, arbeitsJahreGesamt);
    const realeRente = angezeigteRente / inflationsFaktor;

    const basisRente = withInflation ? realeRente : angezeigteRente;

    // Rentenlücke basierend auf angezeigter Rente
    const rentenluecke = Math.max(0, inputs.gewuenschteRente - basisRente);

    // Kapitalaufbau: Lücke × 12 Monate × 22 Rentenjahre
    const kapitalBedarf = rentenluecke * 12 * 22;

    // Inflationsangepasster Kapitalbedarf (Nominalwert, der in Zukunft benötigt wird)
    const kapitalBedarfNominal = withInflation ? kapitalBedarf * inflationsFaktor : kapitalBedarf;

    const sparrate = kapitalBedarf / (effektivVollzeitJahre * 12 * 150);

    return {
      geschaetzteRente: Math.round(geschaetzteRenteBrutto),
      geschaetzteRenteNetto: Math.round(geschaetzteRenteNetto),
      realeRente: Math.round(realeRente),
      basisRente: Math.round(basisRente),
      rentenluecke: Math.round(rentenluecke),
      kapitalBedarf: Math.round(kapitalBedarf),
      kapitalBedarfNominal: Math.round(kapitalBedarfNominal),
      monatlicheSparrate: Math.round(sparrate * 150),
      effektivVollzeitJahre: Math.round(effektivVollzeitJahre),
      steuerAufRente: Math.round(steuerAufRente),
      arbeitsJahreGesamt,
      inflationsFaktor,
    };
  }, [inputs, withTax, withInflation]);

  const lueckeProzent =
    inputs.gewuenschteRente > 0
      ? Math.min(100, (result.rentenluecke / inputs.gewuenschteRente) * 100)
      : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6 space-y-6">
        <h2 className="text-lg font-bold text-white">Deine Situation</h2>

        <div className="bg-pink-950/30 border border-pink-900/50 rounded-xl p-4 text-sm text-pink-300">
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

        {/* Realitäts-Check */}
        <div className="border-t border-[#2a2a2a] pt-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-400">Realitäts-Check</h3>

          <ToggleOption
            label="Inflation berücksichtigen"
            active={withInflation}
            onToggle={() => setWithInflation((v) => !v)}
            tooltip={
              <div>
                <p className="font-semibold text-white mb-2">Was ist Inflation?</p>
                <p className="text-gray-400 text-xs mb-2">
                  Bei 2% Inflation p.a. hast du in 30 Jahren zwar nominell dieselbe Rente –
                  kannst dir davon aber fast halb so wenig kaufen wie heute.
                </p>
                <p className="text-gray-400 text-xs">
                  Der Rechner zeigt dir, was deine prognostizierte Rente in <strong className="text-white">heutiger Kaufkraft</strong> tatsächlich bedeutet.
                </p>
                <p className="text-pink-400 text-xs mt-2 font-medium">
                  Historische Inflation Deutschland: ca. 2% p.a.
                </p>
              </div>
            }
          >
            <Slider
              label="Inflationsrate"
              value={inputs.inflationsRate}
              min={0.5}
              max={5}
              step={0.5}
              unit="%"
              hint="EZB-Zielrate: 2% p.a."
              onChange={set("inflationsRate")}
            />
          </ToggleOption>

          <ToggleOption
            label="Zukünftige Steuerbelastung berücksichtigen"
            active={withTax}
            onToggle={() => setWithTax((v) => !v)}
            tooltip={
              <div>
                <p className="font-semibold text-white mb-2">Besteuerung der Rente</p>
                <p className="text-gray-400 text-xs mb-2">
                  <strong className="text-white">Gesetzliche Rente:</strong> Wird zunehmend versteuert
                  (Kohortenprinzip). Ab ca. 2040 zu 100% steuerpflichtig. Unterhalb des
                  Grundfreibetrags (~985€/Monat) keine Steuer.
                </p>
                <p className="text-gray-400 text-xs mb-2">
                  <strong className="text-white">Ertragsanteilbesteuerung</strong> bei privater
                  Rentenversicherung: Nur ein kleiner Teil der Auszahlung ist steuerpflichtig –
                  bei Rentenbeginn mit 67 Jahren sind das nur 17%.
                </p>
                <p className="text-gray-400 text-xs">
                  <strong className="text-white">Abgeltungssteuer (ETF):</strong> 25% +
                  Solidaritätszuschlag = 26,375% auf Gewinne, die den Sparerpauschbetrag
                  (1.000€/Jahr) übersteigen. Im <a href="/rechner/sparplan" className="text-pink-400 underline">Sparplan-Rechner</a> kannst du das genau berechnen.
                </p>
              </div>
            }
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-5">
        <div className="bg-gradient-to-br from-pink-600 to-pink-900 rounded-2xl p-6 text-white">
          <p className="text-pink-200 text-sm mb-1">
            {withInflation
              ? "Deine Rente in heutiger Kaufkraft"
              : withTax
              ? "Deine geschätzte Rente (nach Steuer)"
              : "Deine geschätzte gesetzliche Rente"}
          </p>
          <div className="text-5xl font-bold mb-1">{formatEur(result.basisRente)}</div>
          <p className="text-pink-200 text-sm">pro Monat</p>
          {(withTax || withInflation) && (
            <div className="mt-3 pt-3 border-t border-pink-400/30 flex flex-wrap gap-x-4 gap-y-1 text-xs text-pink-300">
              <span>Nominale Rente: {formatEur(result.geschaetzteRente)}</span>
              {withTax && <span>Steuer: − {formatEur(result.steuerAufRente)}/Monat</span>}
              {withInflation && (
                <span>Kaufkraftverlust: {Math.round((1 - 1 / result.inflationsFaktor) * 100)}%</span>
              )}
            </div>
          )}
        </div>

        <div className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6">
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-white">Rentenlücke</p>
            <span className="text-xl font-bold text-pink-400">{formatEur(result.rentenluecke)}/Monat</span>
          </div>
          <div className="h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-pink-700 rounded-full transition-all duration-500"
              style={{ width: `${lueckeProzent}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {Math.round(lueckeProzent)}% deiner gewünschten Rente fehlen
            {withInflation ? " (in heutiger Kaufkraft)" : withTax ? " (nach Steuer)" : " aus der gesetzlichen Versicherung"}
          </p>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6">
          <p className="text-sm text-gray-500 mb-1">Effektive Vollzeit-Beitragsjahre</p>
          <p className="text-3xl font-bold text-white">{result.effektivVollzeitJahre} Jahre</p>
          <p className="text-xs text-gray-600 mt-1">
            Elternzeit & Teilzeit reduzieren deine Rentenansprüche deutlich
          </p>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6">
          <p className="text-sm text-gray-500 mb-1">
            {withInflation ? "Kapital (in heutigen Euro)" : "Kapital, das du aufbauen solltest"}
          </p>
          <p className="text-3xl font-bold gradient-text">{formatEur(result.kapitalBedarf)}</p>
          {withInflation && result.kapitalBedarfNominal !== result.kapitalBedarf && (
            <p className="text-xs text-gray-500 mt-1">
              In Zukunfts-Euro: {formatEur(result.kapitalBedarfNominal)}
            </p>
          )}
          <p className="text-xs text-gray-600 mt-1">
            Um die Lücke über ~22 Rentenjahre zu schließen
          </p>
        </div>

        <div className="bg-pink-950/30 rounded-2xl border border-pink-900/50 p-6">
          <p className="text-sm text-pink-400 font-medium mb-1">Empfohlene monatliche Sparrate</p>
          <p className="text-3xl font-bold text-pink-300">{formatEur(result.monatlicheSparrate)}/Monat</p>
          <p className="text-xs text-pink-500 mt-2">
            Bei 7% p.a. ETF-Rendite (historischer Durchschnitt MSCI World)
          </p>
          <a
            href="/rechner/sparplan"
            className="mt-4 inline-block text-sm font-semibold text-pink-400 underline underline-offset-2 hover:text-pink-300"
          >
            Im Sparplan-Rechner simulieren →
          </a>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          Vereinfachte Modellrechnung zu Bildungszwecken. Steuerberechnung ohne Kirchensteuer und individuelle
          Freibeträge. Keine individuelle Finanzberatung – sprich mit einer Expertin für deine persönliche Situation.
        </p>
      </div>
    </div>
  );
}
