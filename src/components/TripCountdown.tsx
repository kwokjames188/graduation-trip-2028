"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const departureTime = new Date("2028-06-30T09:30:00+08:00").getTime();

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
};

function getCountdownState(): CountdownState {
  const remainingSeconds = Math.max(
    0,
    Math.floor((departureTime - Date.now()) / 1000),
  );

  return {
    days: Math.floor(remainingSeconds / 86_400),
    hours: Math.floor((remainingSeconds % 86_400) / 3_600),
    minutes: Math.floor((remainingSeconds % 3_600) / 60),
    seconds: remainingSeconds % 60,
    isComplete: remainingSeconds === 0,
  };
}

export default function TripCountdown() {
  const t = useTranslations("Home.countdown");
  const [countdown, setCountdown] = useState<CountdownState | null>(null);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdownState());
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { key: "days", label: t("days") },
    { key: "hours", label: t("hours") },
    { key: "minutes", label: t("minutes") },
    { key: "seconds", label: t("seconds") },
  ] as const;
  const remainingDays = countdown?.days ?? 0;
  const countdownTitle = t("title", { days: remainingDays });

  return (
    <section className="mt-14 rounded-[2rem] border-4 border-slate-700 bg-sky-50 px-5 py-8 text-center shadow-[0_8px_0_#334155] sm:px-8 sm:py-9">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-8 text-sky-600"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {countdownTitle}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
          <time dateTime="2028-06-30T09:30:00+08:00">{t("departure")}</time>
        </p>

        {countdown?.isComplete ? (
          <p className="mt-7 text-xl font-bold text-sky-700">
            {t("complete")}
          </p>
        ) : (
          <div
            role="timer"
            aria-label={countdownTitle}
            className="mt-7 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {units.map(({ key, label }) => (
              <div
                key={key}
                className="rounded-2xl border-2 border-slate-700 bg-white px-3 py-4 shadow-[0_4px_0_#334155] sm:py-5"
              >
                <p className="text-3xl font-extrabold tabular-nums text-sky-700 sm:text-4xl">
                  {String(countdown?.[key] ?? 0).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
