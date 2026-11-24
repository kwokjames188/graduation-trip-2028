"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Compass } from "lucide-react";
import FontResizer from "./FontResizer";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    const frame = window.requestAnimationFrame(updateScrollState);
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [isHomePage]);

  const isHomeAtTop = isHomePage && !isScrolled;

  const links = [
    { href: "/", label: t("home") },
    { href: "/itinerary", label: t("itinerary") },
    { href: "/spots", label: t("spots") },
    { href: "/budget", label: t("budget") },
    { href: "/rsvp", label: t("rsvp") },
  ];

  return (
    <header
      className={
        isHomePage
          ? `fixed inset-x-0 top-0 z-50 ${
              isScrolled
                ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
                : ""
            }`
          : "sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
      }
    >
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-4 py-3 sm:px-6 lg:min-h-[76px] lg:flex-nowrap lg:py-0">
        <Link
          href="/"
          className={`group flex shrink-0 items-center gap-2.5 rounded-full transition-transform duration-300 hover:-translate-y-0.5 ${
            isHomeAtTop
              ? "border border-white/25 bg-slate-950/15 px-2.5 py-1.5 text-white shadow-lg shadow-slate-950/10 backdrop-blur-md"
              : "text-sky-700"
          }`}
        >
          <span
            className={`grid size-9 place-items-center rounded-full border transition-all duration-300 group-hover:rotate-12 ${
              isHomeAtTop
                ? "border-white/30 bg-white/12"
                : "border-sky-100 bg-sky-50"
            }`}
          >
            <Compass className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="max-w-32 font-[var(--font-inter)] text-sm font-semibold leading-tight tracking-[0.14em] sm:max-w-none sm:text-[15px]">
            {t("brand")}
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="navbar-scroll order-3 flex w-full items-center justify-start overflow-x-auto sm:justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:order-none lg:w-auto lg:max-w-[calc(100%-25rem)] lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <div className="flex w-max items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1 text-sm font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-sky-600 font-semibold text-white shadow-sm"
                      : `${isHomeAtTop ? "text-white" : "text-slate-600"} hover:bg-white hover:text-sky-700`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <FontResizer />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}