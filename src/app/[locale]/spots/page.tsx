import { useTranslations } from "next-intl";

export default function SpotsPage() {
  const t = useTranslations("Pages");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">{t("spotsTitle")}</h1>
      <p className="mt-4 text-slate-600">Top beaches, night markets & food coming soon...</p>
    </div>
  );
}