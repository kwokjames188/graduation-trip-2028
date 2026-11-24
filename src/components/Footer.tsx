import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Home.footer");

  return (
    <footer className="bg-slate-950 px-6 py-10 text-slate-300">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[var(--font-inter)] text-base font-bold tracking-[0.14em] text-white">
              {t("brand")}
            </p>
            <p className="mt-2 text-sm text-slate-400">{t("tagline")}</p>
            <p className="mt-1 text-sm font-semibold text-sky-300">
              {t("wish")}
            </p>
          </div>

          <nav
            aria-label={t("navigation")}
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"
          >
            <Link href="/itinerary" className="transition-colors hover:text-sky-300">
              {t("itinerary")}
            </Link>
            <Link href="/spots" className="transition-colors hover:text-sky-300">
              {t("spots")}
            </Link>
            <Link href="/budget" className="transition-colors hover:text-sky-300">
              {t("budget")}
            </Link>
            <Link href="/rsvp" className="transition-colors hover:text-sky-300">
              {t("rsvp")}
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:text-left">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
