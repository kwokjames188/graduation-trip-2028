import { useTranslations } from "next-intl";

export default function RsvpPage() {
  const t = useTranslations("Pages");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">{t("rsvpTitle")}</h1>
      <p className="mt-4 text-slate-600">Group voting poll coming soon...</p>
    </div>
  );
}