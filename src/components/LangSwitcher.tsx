"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value as "en" | "zh" | "ja" });
  };

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
      <Globe className="h-3.5 w-3.5 text-sky-600" />
      <select
        value={locale}
        onChange={handleChange}
        aria-label="Select Language"
        className="bg-transparent outline-none cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="zh">繁中</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
}