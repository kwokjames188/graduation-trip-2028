import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import ItineraryDayTimeline from "./ItineraryDayTimeline";

const dates = Array.from({ length: 14 }, (_, day) => {
  const date = new Date(Date.UTC(2028, 5, 30 + day));

  return {
    date,
    dateTime: date.toISOString().slice(0, 10),
  };
});

export default function ItineraryDateNav({
  selectedDay,
}: {
  selectedDay: number;
}) {
  const locale = useLocale();
  const t = useTranslations("Pages");
  const selectedDate = dates[selectedDay];
  const shortDateFormatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  const longDateFormatter = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <nav
        aria-label={t("itineraryDateNav")}
        className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-7"
      >
        {dates.map(({ date }, day) => {
          const isSelected = selectedDay === day;

          return (
            <Link
              key={date.toISOString()}
              href={`/itinerary/${day + 1}`}
              aria-current={isSelected ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center rounded-2xl border px-2 py-3 text-sm transition-colors ${
                isSelected
                  ? "border-sky-600 bg-sky-600 text-white shadow-md shadow-sky-900/10"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50"
              }`}
            >
              <span className="text-xs font-medium opacity-80">
                {t("itineraryDayLabel", { day: day + 1 })}
              </span>
              <span className="mt-1 whitespace-nowrap font-semibold">
                {shortDateFormatter.format(date)}
              </span>
            </Link>
          );
        })}
      </nav>

      <section aria-live="polite" className="mt-8">
        <time
          dateTime={selectedDate.dateTime}
          className="block text-center text-sm font-medium text-slate-500"
        >
          {longDateFormatter.format(selectedDate.date)}
        </time>
        <ItineraryDayTimeline day={selectedDay} />
      </section>

      {selectedDay === 0 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/itinerary/2"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
          >
            {t("itineraryNextDay")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      )}
      {selectedDay === 1 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/itinerary/3"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
          >
            {t("itineraryNextDayThree")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      )}
      {selectedDay === 2 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/itinerary/4"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
          >
            {t("itineraryNextDayFour")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </>
  );
}
