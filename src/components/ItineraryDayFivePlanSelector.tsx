"use client";

import { useState } from "react";

type ItineraryDayFivePlanSelectorProps = {
  label: string;
  huisTenBoschLabel: string;
  unzenOnsenLabel: string;
  huisTenBoschTitle: string;
  unzenOnsenTitle: string;
};

export default function ItineraryDayFivePlanSelector({
  label,
  huisTenBoschLabel,
  unzenOnsenLabel,
  huisTenBoschTitle,
  unzenOnsenTitle,
}: ItineraryDayFivePlanSelectorProps) {
  const [selectedPlan, setSelectedPlan] = useState<"huis-ten-bosch" | "unzen-onsen">(
    "huis-ten-bosch",
  );

  return (
    <div
      role="group"
      aria-label={label}
      className="mt-6 flex flex-wrap justify-center gap-3"
    >
      <button
        type="button"
        aria-pressed={selectedPlan === "huis-ten-bosch"}
        onClick={() => setSelectedPlan("huis-ten-bosch")}
        className={`rounded-full border px-5 py-3 font-semibold transition-colors ${
          selectedPlan === "huis-ten-bosch"
            ? "border-sky-600 bg-sky-600 text-white shadow-sm"
            : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50"
        }`}
      >
        {huisTenBoschLabel}
      </button>
      <button
        type="button"
        aria-pressed={selectedPlan === "unzen-onsen"}
        onClick={() => setSelectedPlan("unzen-onsen")}
        className={`rounded-full border px-5 py-3 font-semibold transition-colors ${
          selectedPlan === "unzen-onsen"
            ? "border-sky-600 bg-sky-600 text-white shadow-sm"
            : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50"
        }`}
      >
        {unzenOnsenLabel}
      </button>
      <h2 className="mx-auto mt-3 w-full max-w-3xl text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
        {selectedPlan === "huis-ten-bosch"
          ? huisTenBoschTitle
          : unzenOnsenTitle}
      </h2>
    </div>
  );
}
