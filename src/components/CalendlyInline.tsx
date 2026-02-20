"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

type CalendlyApi = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, string>;
    utm?: Record<string, string>;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export default function CalendlyInline() {
  const initializedRef = useRef(false);

  const initializeWidget = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (initializedRef.current || !window.Calendly) {
      return;
    }

    const container = document.getElementById("calendly-container");
    if (!container) {
      return;
    }

    window.Calendly.initInlineWidget({
      url: "https://calendly.com/codenexo/30min",
      parentElement: container,
      prefill: {},
      utm: {},
    });

    initializedRef.current = true;
  }, []);

  useEffect(() => {
    initializeWidget();
  }, [initializeWidget]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initializeWidget}
      />
      <div id="calendly-container" className="w-full min-h-[700px]" />
    </>
  );
}
