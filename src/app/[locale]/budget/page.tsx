import { useTranslations } from "next-intl";

export default function BudgetPage() {
  const t = useTranslations("Pages");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">{t("budgetTitle")}</h1>
      <p className="mt-4 text-slate-600">Cost breakdown & estimator coming soon...</p>
    </div>
  );
}