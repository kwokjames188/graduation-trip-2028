import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import ItineraryDateNav from "@/components/ItineraryDateNav";

const dayCount = 14;

export default async function ItineraryDayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day: dayParam } = await params;
  const day = Number(dayParam);

  if (
    !/^\d+$/.test(dayParam) ||
    !Number.isInteger(day) ||
    day < 1 ||
    day > dayCount
  ) {
    notFound();
  }

  return <ItineraryDayContent day={day} />;
}

function ItineraryDayContent({ day }: { day: number }) {
  const t = useTranslations("Pages");

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-3xl font-bold text-slate-900">
            {t("itineraryTitle")}
          </h1>
          <ItineraryDateNav selectedDay={day - 1} />
        </div>
      </div>
      <Footer />
    </>
  );
}
