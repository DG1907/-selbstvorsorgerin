"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  external: boolean;
  decided: boolean;
}

interface ConsentCtx {
  consent: ConsentState | null;
  updateConsent: (c: Omit<ConsentState, "necessary">) => void;
  bannerOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
}

const STORAGE_KEY = "sv_cookie_consent";

const CookieConsentContext = createContext<ConsentCtx>({
  consent: null,
  updateConsent: () => {},
  bannerOpen: false,
  openBanner: () => {},
  closeBanner: () => {},
});

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState;
        setConsent(parsed);
        if (!parsed.decided) setBannerOpen(true);
      } else {
        setBannerOpen(true);
      }
    } catch {
      setBannerOpen(true);
    }
  }, []);

  const updateConsent = useCallback((c: Omit<ConsentState, "necessary">) => {
    const full: ConsentState = { necessary: true, ...c };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    setConsent(full);
    setBannerOpen(false);
  }, []);

  const openBanner = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => setBannerOpen(false), []);

  return (
    <CookieConsentContext.Provider value={{ consent, updateConsent, bannerOpen, openBanner, closeBanner }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
