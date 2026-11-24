"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUp } from "lucide-react";

export default function PageTopButton() {
  const t = useTranslations("Nav");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 300);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("backToTop")}
      title={t("backToTop")}
      className={`fixed right-4 bottom-4 z-[60] grid size-12 place-items-center rounded-full border border-sky-200 bg-white text-sky-700 shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white sm:right-6 sm:bottom-6 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" strokeWidth={2.2} aria-hidden="true" />
    </button>
  );
}
