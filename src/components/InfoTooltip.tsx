"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  content: React.ReactNode;
}

export default function InfoTooltip({ content }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-5 h-5 rounded-full border border-gray-600 text-gray-500 hover:text-pink-400 hover:border-pink-400 transition-colors text-xs font-bold flex items-center justify-center"
        aria-label="Erklärung anzeigen"
      >
        i
      </button>
      {open && (
        <div className="absolute z-50 bottom-7 left-1/2 -translate-x-1/2 w-72 bg-[#1a1a1a] border border-[#333] rounded-xl p-4 shadow-2xl text-sm text-gray-300 leading-relaxed">
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border-r border-b border-[#333] rotate-45" />
          {content}
        </div>
      )}
    </div>
  );
}
