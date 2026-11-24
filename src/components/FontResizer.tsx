"use client";
import { useEffect, useSyncExternalStore } from "react";

const FONT_SCALE_KEY = "trip-font-scale";
const MIN_SCALE = 85;
const MAX_SCALE = 130;
const DEFAULT_SCALE = 100;

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function getFontScale() {
  const saved = window.localStorage.getItem(FONT_SCALE_KEY);
  if (!saved) return DEFAULT_SCALE;

  const parsed = Number(saved);
  return Number.isFinite(parsed) ? clampScale(parsed) : DEFAULT_SCALE;
}

function subscribeToFontScale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("trip-font-scale-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("trip-font-scale-change", callback);
  };
}

export default function FontResizer() {
  const scale = useSyncExternalStore(
    subscribeToFontScale,
    getFontScale,
    () => DEFAULT_SCALE,
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--content-zoom",
      String(scale / 100),
    );
  }, [scale]);

  const updateScale = (newScale: number) => {
    const clamped = clampScale(newScale);
    window.localStorage.setItem(FONT_SCALE_KEY, String(clamped));
    window.dispatchEvent(new Event("trip-font-scale-change"));
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
      <button
        type="button"
        onClick={() => updateScale(scale - 10)}
        className="px-1.5 hover:text-sky-600 transition"
        title="Smaller text"
      >
        A-
      </button>
      <button
        type="button"
        onClick={() => updateScale(100)}
        className="px-1 text-slate-400 hover:text-slate-800 transition"
        title="Reset text size"
      >
        {scale}%
      </button>
      <button
        type="button"
        onClick={() => updateScale(scale + 10)}
        className="px-1.5 font-bold hover:text-sky-600 transition"
        title="Larger text"
      >
        A+
      </button>
    </div>
  );
}