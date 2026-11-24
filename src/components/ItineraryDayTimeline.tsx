import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  BusFront,
  Clock3,
  ExternalLink,
  Footprints,
  MapPin,
  Ship,
  TrainFront,
  TramFront,
} from "lucide-react";

type ItineraryDayTimelineProps = {
  day: number;
};

const airportMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hiroshima+Airport";
const cityCenterMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hiroshima+city+center";
const busRouteUrl =
  "https://www.google.com/maps/dir/?api=1&origin=Hiroshima+Airport&destination=Hiroshima+city+center&travelmode=transit";
const cityCenterRelatedUrl = "https://dive-hiroshima.com/en/";
const atomicBombDomeRelatedUrl = "https://whc.unesco.org/en/list/775/";
const peaceMuseumRelatedUrl = "https://hpmmuseum.jp/?lang=eng";
const atomicBombDomeMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Atomic+Bomb+Dome+Hiroshima";
const peaceMuseumMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial+Museum";
const mitchanRelatedUrl = "https://www.okonomi.co.jp/";
const mitchanMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Mitchan+Sohonten+Orizuru+Tower+Branch";
const okonomimuraRelatedUrl = "https://www.okonomimura.jp/";
const okonomimuraMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Okonomimura+Hiroshima";
const granviaRelatedUrl = "https://jrwest-hotels.jp/en/granvia-hiroshima/";
const granviaMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Granvia+Hiroshima";
const granviaSouthGateRelatedUrl = "https://www.hgh.co.jp/southgate/";
const granviaSouthGateMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Granvia+Hiroshima+South+Gate";
const rihgaRelatedUrl = "https://www.rihga.com/hiroshima";
const rihgaMapUrl =
  "https://www.google.com/maps/search/?api=1&query=RIHGA+Royal+Hotel+Hiroshima";
const miyajimaRelatedUrl = "https://www.miyajima.or.jp/english/";
const miyajimaMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Miyajima+Itsukushima";
const kakiyaRelatedUrl = "https://www.kaki-ya.jp/";
const kakiyaMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Kakiya+Miyajima+Oyster+Restaurant";

function ResourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-cyan-900"
    >
      {children}
      <ExternalLink className="size-3.5" aria-hidden="true" />
    </a>
  );
}

function BreakfastCard({
  title,
  hotel,
  description,
  alternative,
  hotelCheckout,
}: {
  title: string;
  hotel: string;
  description: string;
  hotelCheckout?: string;
  alternative?: {
    title: string;
    name: string;
    description: string;
  };
}) {
  return (
    <article className="mx-auto mt-10 max-w-4xl rounded-md border border-cyan-500 bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-8 sm:pl-14">
      <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
        {title}
      </h3>
      <h4 className="mt-2 text-lg font-bold text-slate-800">
        {hotel}
      </h4>
      <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
        {description}
      </p>
      {alternative && (
        <section className="mt-7 border-t border-slate-200 pt-6">
          <h4 className="text-xl font-bold text-slate-800 sm:text-2xl">
            {alternative.title}
          </h4>
          <h5 className="mt-3 text-lg font-bold text-slate-800">
            {alternative.name}
          </h5>
          <Image
            src="/itinerary/ekiben-shinkansen.jpg"
            alt={alternative.name}
            width={1024}
            height={683}
            sizes="(min-width: 1024px) 800px, 100vw"
            className="mt-4 h-auto w-full rounded-md"
          />
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            {alternative.description}
          </p>
        </section>
      )}
      {hotelCheckout && (
        <p className="mt-7 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-700 sm:text-base">
          {hotelCheckout}
        </p>
      )}
    </article>
  );
}

export default function ItineraryDayTimeline({
  day,
}: ItineraryDayTimelineProps) {
  const t = useTranslations("Pages");

  if (day === 1) {
    return (
      <section aria-labelledby="itinerary-day-title" className="mt-6">
        <h2
          id="itinerary-day-title"
          className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl"
        >
          {t("itineraryDayTwo.title")}
        </h2>
        <BreakfastCard
          title={t("itineraryDayTwo.breakfast.title")}
          hotel={t("itineraryDayTwo.breakfast.hotel")}
          description={t("itineraryDayTwo.breakfast.description")}
        />
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <TrainFront className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.trainDuration")}
            </span>
          </div>
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-0 size-[10px] -translate-y-1/2 rounded-full border-2 border-cyan-500 bg-white"
            />
            <span className="absolute left-10 top-0 -translate-y-1/2 text-sm font-medium whitespace-nowrap text-slate-700">
              {t("itineraryDayTwo.stationName")}
            </span>
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <Ship className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.ferryDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  1
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayTwo.miyajima.title")}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryTimeRequired", {
                  duration: t("itineraryDayTwo.miyajima.duration"),
                })}
              </p>
              <Image
                src="/itinerary/miyajima.webp"
                alt={t("itineraryDayTwo.miyajima.imageAlt")}
                width={1151}
                height={768}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayTwo.miyajima.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href={miyajimaRelatedUrl}>
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href={miyajimaMapUrl}>
                  {t("itineraryDayTwo.miyajima.googleMaps")}
                </ResourceLink>
              </div>
              <section
                aria-labelledby="miyajima-sightseeing-options-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="miyajima-sightseeing-options-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayTwo.miyajima.sightseeingOptionsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t(
                      "itineraryDayTwo.miyajima.omotesando.title",
                    )}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t(
                        "itineraryDayTwo.miyajima.omotesando.walkFrom",
                      )}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryTimeRequired", {
                        duration: t(
                          "itineraryDayTwo.miyajima.omotesando.duration",
                        ),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/miyajima-omotesando.jpg"
                        alt={t(
                          "itineraryDayTwo.miyajima.omotesando.imageAlt",
                        )}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t(
                          "itineraryDayTwo.miyajima.omotesando.description",
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Miyajima+Omotesando+Shopping+Street">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.miyajima.itsukiCoffee.title")}
                  </h5>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-700">
                    <Clock3
                      className="size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {t("itineraryTimeRequired", {
                      duration: t(
                        "itineraryDayTwo.miyajima.itsukiCoffee.duration",
                      ),
                    })}
                  </p>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/itsuki-coffee-miyajima.webp"
                        alt={t(
                          "itineraryDayTwo.miyajima.itsukiCoffee.imageAlt",
                        )}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t(
                          "itineraryDayTwo.miyajima.itsukiCoffee.description",
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E9%83%BD%E5%B2%90%E7%8F%88%E7%90%B2+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.miyajima.toyokuni.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryDayTwo.miyajima.toyokuni.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryTimeRequired", {
                        duration: t(
                          "itineraryDayTwo.miyajima.toyokuni.duration",
                        ),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/toyokuni-shrine.jpg"
                        alt={t("itineraryDayTwo.miyajima.toyokuni.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.miyajima.toyokuni.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Toyokuni+Shrine+Senjokaku+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.miyajima.itsukushima.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryDayTwo.miyajima.itsukushima.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryTimeRequired", {
                        duration: t(
                          "itineraryDayTwo.miyajima.itsukushima.duration",
                        ),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/itsukushima-shrine.jpg"
                        alt={t(
                          "itineraryDayTwo.miyajima.itsukushima.imageAlt",
                        )}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t(
                          "itineraryDayTwo.miyajima.itsukushima.description",
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Itsukushima+Shrine+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <Footprints className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.kakiya.walkDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  2
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayTwo.kakiya.title")}
              </h3>
              <h4 className="mt-2 text-lg font-bold text-slate-800">
                {t("itineraryDayTwo.kakiya.name")}
              </h4>
              <Image
                src="/itinerary/kakiya.webp"
                alt={t("itineraryDayTwo.kakiya.imageAlt")}
                width={1152}
                height={768}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayTwo.kakiya.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href={kakiyaRelatedUrl}>
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href={kakiyaMapUrl}>
                  {t("itineraryDayTwo.miyajima.googleMaps")}
                </ResourceLink>
              </div>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <Footprints className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.misen.walkDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  3
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayTwo.misen.title")}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryTimeRequired", {
                  duration: t("itineraryDayTwo.misen.duration"),
                })}
              </p>
              <Image
                src="/itinerary/mt-misen.webp"
                alt={t("itineraryDayTwo.misen.imageAlt")}
                width={1397}
                height={915}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                <strong>{t("itineraryDayTwo.misen.descriptionLead")}</strong>
                {t("itineraryDayTwo.misen.description")}
              </p>
              <section
                aria-labelledby="misen-sightseeing-options-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="misen-sightseeing-options-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayTwo.misen.sightseeingOptionsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.misen.momijidani.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryDayTwo.misen.momijidani.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryTimeRequired", {
                        duration: t(
                          "itineraryDayTwo.misen.momijidani.duration",
                        ),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/momijidani-park.jpg"
                        alt={t("itineraryDayTwo.misen.momijidani.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.misen.momijidani.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Momijidani+Park+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.misen.ropeway.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryDayTwo.misen.ropeway.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryTimeRequired", {
                        duration: t("itineraryDayTwo.misen.ropeway.duration"),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/miyajima-ropeway.jpg"
                        alt={t("itineraryDayTwo.misen.ropeway.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.misen.ropeway.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Miyajima+Ropeway">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.misen.shishiiwa.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryDayTwo.misen.shishiiwa.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryTimeRequired", {
                        duration: t("itineraryDayTwo.misen.shishiiwa.duration"),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/shishiiwa-observatory.jpg"
                        alt={t("itineraryDayTwo.misen.shishiiwa.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.misen.shishiiwa.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Shishiiwa+Observatory+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.misen.hondo.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryDayTwo.misen.hondo.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryTimeRequired", {
                        duration: t("itineraryDayTwo.misen.hondo.duration"),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/misen-hondo.jpg"
                        alt={t("itineraryDayTwo.misen.hondo.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.misen.hondo.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Misen+Hondo+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.misen.summit.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryDayTwo.misen.summit.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryTimeRequired", {
                        duration: t("itineraryDayTwo.misen.summit.duration"),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/misen-summit.jpg"
                        alt={t("itineraryDayTwo.misen.summit.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.misen.summit.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Mount+Misen+Observatory+Miyajima">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
              <section
                aria-labelledby="misen-indoor-alternative-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="misen-indoor-alternative-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayTwo.misen.indoorAlternativeTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayTwo.misen.aquarium.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryDayTwo.misen.aquarium.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                      {t("itineraryTimeRequired", {
                        duration: t("itineraryDayTwo.misen.aquarium.duration"),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/miyaji-marine.jpg"
                        alt={t("itineraryDayTwo.misen.aquarium.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayTwo.misen.aquarium.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href={miyajimaRelatedUrl}>
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Miyajima+Public+Aquarium+Miyaji+Marine">
                          {t("itineraryDayTwo.miyajima.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <Footprints className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.shopping.walkDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  4
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayTwo.shopping.title")}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryTimeRequired", {
                  duration: t("itineraryDayTwo.shopping.duration"),
                })}
              </p>
              <Image
                src="/itinerary/miyajima-last-shopping.jpg"
                alt={t("itineraryDayTwo.shopping.imageAlt")}
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayTwo.shopping.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href={miyajimaRelatedUrl}>
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Miyajima+Omotesando+Shopping+Street">
                  {t("itineraryDayTwo.miyajima.googleMaps")}
                </ResourceLink>
              </div>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700"
            >
              <Ship className="size-6" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.dinner.ferryDuration")}
            </span>
          </div>
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-0 size-[10px] -translate-y-1/2 rounded-full border-2 border-cyan-500 bg-white"
            />
            <span className="absolute left-10 top-0 -translate-y-1/2 text-sm font-medium whitespace-nowrap text-slate-700">
              {t("itineraryDayTwo.dinner.changeStation")}
            </span>
            <span
              aria-hidden="true"
              className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700"
            >
              <TrainFront className="size-6" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayTwo.dinner.trainDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  5
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayTwo.dinner.title")}
              </h3>
              <h4 className="mt-2 text-lg font-bold text-slate-800">
                {t("itineraryDayTwo.dinner.name")}
              </h4>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Footprints className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryDayTwo.dinner.walkFrom")}
              </p>
              <Image
                src="/itinerary/onomichi-ramen-sanko-dish.jpg"
                alt={t("itineraryDayTwo.dinner.imageAlt")}
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayTwo.dinner.descriptionLead") && (
                  <strong>{t("itineraryDayTwo.dinner.descriptionLead")}</strong>
                )}
                {t("itineraryDayTwo.dinner.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://hkq7.otoshiana.com/chugoku/index.html">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Onomichi+Ramen+Sanko+Hiroshima">
                  {t("itineraryDayTwo.dinner.googleMaps")}
                </ResourceLink>
              </div>
            </article>
          </li>
        </ol>
      </section>
    );
  }

  if (day === 2) {
    return (
      <section aria-labelledby="itinerary-day-title" className="mt-6">
        <h2
          id="itinerary-day-title"
          className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl"
        >
          {t("itineraryDayThree.title")}
        </h2>
        <BreakfastCard
          title={t("itineraryDayThree.breakfast.title")}
          hotel={t("itineraryDayThree.breakfast.hotel")}
          description={t("itineraryDayThree.breakfast.description")}
          alternative={{
            title: t("itineraryDayThree.breakfast.alternative.title"),
            name: t("itineraryDayThree.breakfast.alternative.name"),
            description: t(
              "itineraryDayThree.breakfast.alternative.description",
            ),
          }}
          hotelCheckout={t("itineraryDayThree.breakfast.hotelCheckout")}
        />
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <TrainFront className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayThree.cityCenter.trainDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  1
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayThree.cityCenter.title")}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryTimeRequired", {
                  duration: t("itineraryDayThree.cityCenter.duration"),
                })}
              </p>
              <Image
                src="/itinerary/kumamoto-city-center.jpeg"
                alt={t("itineraryDayThree.cityCenter.imageAlt")}
                width={1024}
                height={682}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayThree.cityCenter.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://kumamoto.guide/en/">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Kumamoto+City+Center">
                  {t("itineraryDayThree.cityCenter.googleMaps")}
                </ResourceLink>
              </div>
              <section
                aria-labelledby="kumamoto-sightseeing-options-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="kumamoto-sightseeing-options-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayThree.cityCenter.sightseeingOptionsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayThree.cityCenter.castle.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryDayThree.cityCenter.castle.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryTimeRequired", {
                        duration: t(
                          "itineraryDayThree.cityCenter.castle.duration",
                        ),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/kumamoto-castle.webp"
                        alt={t(
                          "itineraryDayThree.cityCenter.castle.imageAlt",
                        )}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t(
                          "itineraryDayThree.cityCenter.castle.description",
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://kumamoto.guide/en/">
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Kumamoto+Castle">
                          {t("itineraryDayThree.cityCenter.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <Footprints className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayThree.lunch.walkDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  2
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayThree.lunch.title")}
              </h3>
              <h4 className="mt-2 text-lg font-bold text-slate-800">
                {t("itineraryDayThree.lunch.name")}
              </h4>
              <Image
                src="/itinerary/sakuranobaba-josaien.jpg"
                alt={t("itineraryDayThree.lunch.imageAlt")}
                width={1024}
                height={683}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayThree.lunch.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://kumamoto-guide.jp/spots/detail/60">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Sakuranobaba+Josaien+Kumamoto">
                  {t("itineraryDayThree.cityCenter.googleMaps")}
                </ResourceLink>
              </div>
              <section
                aria-labelledby="josaien-options-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="josaien-options-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayThree.lunch.optionsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayThree.lunch.options.name")}
                  </h5>
                  <p className="mt-3 flex items-start gap-1.5 text-sm text-slate-700">
                    {t("itineraryDayThree.lunch.options.location")}
                  </p>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/suganoya-sakuranokoji.jpg"
                        alt={t("itineraryDayThree.lunch.options.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayThree.lunch.options.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://kumamoto-guide.jp/spots/detail/60">
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Suganoya+Kumamoto+Josaien+Sakura-no-Koji">
                          {t("itineraryDayThree.cityCenter.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
              <section
                aria-labelledby="josaien-other-options-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="josaien-other-options-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayThree.lunch.otherOptionsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayThree.lunch.otherOptions.name")}
                  </h5>
                  <p className="mt-3 flex items-start gap-1.5 text-sm text-slate-700">
                    <Footprints
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {t("itineraryDayThree.lunch.otherOptions.walkFrom")}
                  </p>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/oniku-no-taisho.jpg"
                        alt={t(
                          "itineraryDayThree.lunch.otherOptions.imageAlt",
                        )}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t(
                          "itineraryDayThree.lunch.otherOptions.description",
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://kumamoto.guide/en/">
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Basashi+to+Motsuyaki+Oniku+no+Taisho+Kumamoto">
                          {t("itineraryDayThree.cityCenter.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <TramFront className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayThree.garden.tramDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span aria-hidden="true" className="absolute -left-1.5 -top-7 grid size-14 place-items-center">
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">3</span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayThree.garden.title")}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryTimeRequired", { duration: t("itineraryDayThree.garden.duration") })}
              </p>
              <Image
                src="/itinerary/suizenji-jojuen.jpg"
                alt={t("itineraryDayThree.garden.imageAlt")}
                width={1024}
                height={683}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayThree.garden.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://kumamoto-guide.jp/spots/detail/43">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Suizenji+Jojuen+Garden+Kumamoto">
                  {t("itineraryDayThree.cityCenter.googleMaps")}
                </ResourceLink>
              </div>
              <section
                aria-labelledby="kumamoto-indoor-alternative-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4
                  id="kumamoto-indoor-alternative-title"
                  className="text-xl font-bold text-slate-800 sm:text-2xl"
                >
                  {t("itineraryDayThree.garden.indoorAlternativeTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayThree.garden.kumamon.title")}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                    <p className="flex items-start gap-1.5">
                      <Footprints
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryDayThree.garden.kumamon.walkFrom")}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("itineraryTimeRequired", {
                        duration: t(
                          "itineraryDayThree.garden.kumamon.duration",
                        ),
                      })}
                    </p>
                  </div>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/kumamon-square.webp"
                        alt={t(
                          "itineraryDayThree.garden.kumamon.imageAlt",
                        )}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t(
                          "itineraryDayThree.garden.kumamon.description",
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://kumamon-square.jp/">
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Kumamon+Square+Kumamoto">
                          {t("itineraryDayThree.cityCenter.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <TramFront className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayThree.dinner.tramDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  4
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayThree.dinner.title")}
              </h3>
              <h4 className="mt-2 text-lg font-bold text-slate-800">
                {t("itineraryDayThree.dinner.name")}
              </h4>
              <Image
                src="/itinerary/kokutei-shimotori.jpg"
                alt={t("itineraryDayThree.dinner.imageAlt")}
                width={1024}
                height={683}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayThree.dinner.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://www.kokutei.com/">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Kumamoto+Ramen+Kokutei+Shimotori">
                  {t("itineraryDayThree.cityCenter.googleMaps")}
                </ResourceLink>
              </div>
            </article>
          </li>
        </ol>
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <TramFront className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayThree.accommodation.tramDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span aria-hidden="true" className="absolute -left-1.5 -top-7 grid size-14 place-items-center">
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">5</span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayThree.accommodation.title")}
              </h3>
              <h4 className="mt-2 text-lg font-bold text-slate-800">
                {t("itineraryDayThree.accommodation.name")}
              </h4>
              <Image
                src="/itinerary/the-blossom-kumamoto.jpg"
                alt={t("itineraryDayThree.accommodation.imageAlt")}
                width={1024}
                height={683}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayThree.accommodation.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://the-blossom.jp/kumamoto/en/">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+KUMAMOTO">
                  {t("itineraryDayThree.cityCenter.googleMaps")}
                </ResourceLink>
              </div>
              <section
                aria-labelledby="kumamoto-accommodation-options-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4 id="kumamoto-accommodation-options-title" className="text-xl font-bold text-slate-800 sm:text-2xl">
                  {t("itineraryDayThree.accommodation.otherOptionsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayThree.accommodation.ana.name")}
                  </h5>
                  <p className="mt-3 flex items-start gap-1.5 text-sm text-slate-700">
                    <Footprints
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {t("itineraryDayThree.accommodation.ana.walkFrom")}
                  </p>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/ana-crowne-plaza-kumamoto.avif"
                        alt={t("itineraryDayThree.accommodation.ana.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayThree.accommodation.ana.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://www.ihg.com/crowneplaza/hotels/us/en/kumamoto/kmjns/hoteldetail">
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=ANA+Crowne+Plaza+Hotel+Kumamoto+New+Sky">
                          {t("itineraryDayThree.cityCenter.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayThree.accommodation.nikko.name")}
                  </h5>
                  <p className="mt-3 flex items-start gap-1.5 text-sm text-slate-700">
                    <Footprints
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {t("itineraryDayThree.accommodation.nikko.walkFrom")}
                  </p>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/hotel-nikko-kumamoto.jpg"
                        alt={t("itineraryDayThree.accommodation.nikko.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayThree.accommodation.nikko.description")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                        <ResourceLink href="https://www.hotel-nikko-kumamoto.jp/en/">
                          {t("itineraryDayTwo.miyajima.relatedSite")}
                        </ResourceLink>
                        <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Hotel+Nikko+Kumamoto">
                          {t("itineraryDayThree.cityCenter.googleMaps")}
                        </ResourceLink>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
      </section>
    );
  }

  if (day === 3) {
    return (
      <section aria-labelledby="itinerary-day-title" className="mt-6">
        <h2
          id="itinerary-day-title"
          className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl"
        >
          {t("itineraryDayFour.title")}
        </h2>
        <BreakfastCard
          title={t("itineraryDayFour.breakfast.title")}
          hotel={t("itineraryDayFour.breakfast.hotel")}
          description={t("itineraryDayFour.breakfast.description")}
        />
        <div className="mx-auto max-w-4xl">
          <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
            <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
              <Footprints className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm text-slate-700">
              {t("itineraryDayFour.breakfast.walkDuration")}
            </span>
          </div>
        </div>
        <ol className="mx-auto max-w-4xl">
          <li>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  1
                </span>
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {t("itineraryDayFour.Asoboy!.title")}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                {t("itineraryTimeRequired", {
                  duration: t("itineraryDayFour.Asoboy!.duration"),
                })}
              </p>
              <Image
                src="/itinerary/ASOBOY!.jpg"
                alt={t("itineraryDayFour.Asoboy!.imageAlt")}
                width={1024}
                height={682}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="mt-5 h-auto w-full rounded-md"
              />
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                {t("itineraryDayFour.Asoboy!.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                <ResourceLink href="https://www.jrkyushu.co.jp/english/train/asoboy.html">
                  {t("itineraryDayTwo.miyajima.relatedSite")}
                </ResourceLink>
                <ResourceLink href="https://www.google.com/maps/search/?api=1&query=Kumamoto+Station">
                  {t("itineraryDayThree.cityCenter.googleMaps")}
                </ResourceLink>
              </div>
              <section
                aria-labelledby="ASOBOY!-specials-title"
                className="mt-8 border-t border-slate-200 pt-7"
              >
                <h4 id="ASOBOY!-specials-title" className="text-xl font-bold text-slate-800 sm:text-2xl">
                  {t("itineraryDayFour.Asoboy!.specialsTitle")}
                </h4>
                <article className="mt-5">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayFour.Asoboy!.box.name")}
                  </h5>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/box.png"
                        alt={t("itineraryDayFour.Asoboy!.box.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayFour.Asoboy!.box.description")}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayFour.Asoboy!.cafe.name")}
                  </h5>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/cafe.png"
                        alt={t("itineraryDayFour.Asoboy!.cafe.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayFour.Asoboy!.cafe.description")}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayFour.Asoboy!.free-space.name")}
                  </h5>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/free-space.png"
                        alt={t("itineraryDayFour.Asoboy!.free-space.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayFour.Asoboy!.free-space.description")}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="mt-8 border-t border-slate-200 pt-7">
                  <h5 className="text-lg font-bold text-slate-800">
                    {t("itineraryDayFour.Asoboy!.kuro-club.name")}
                  </h5>
                  <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                    <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src="/itinerary/kuro-club.png"
                        alt={t("itineraryDayFour.Asoboy!.kuro-club.imageAlt")}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">
                        {t("itineraryDayFour.Asoboy!.kuro-club.description")}
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </article>
          </li>
        </ol>
      </section>
    );
  }

  const dayTitle = t("itineraryDayOne.title");
  const airport = {
    title: t("itineraryDayOne.airport.title"),
    duration: t("itineraryDayOne.airport.duration"),
    description: t("itineraryDayOne.airport.description"),
    usefulInformation: t("itineraryDayOne.airport.usefulInformation"),
    bus: t("itineraryDayOne.airport.bus"),
    googleMaps: t("itineraryDayOne.airport.googleMaps"),
  };
  const cityCenter = {
    kind: "cityCenter" as const,
    title: t("itineraryDayOne.cityCenter.title"),
    duration: t("itineraryDayOne.cityCenter.duration"),
    googleMaps: t("itineraryDayOne.cityCenter.googleMaps"),
    description: t("itineraryDayOne.cityCenter.description"),
    imageAlt: t("itineraryDayOne.cityCenter.imageAlt"),
    relatedSite: t("itineraryDayOne.cityCenter.relatedSite"),
    sightseeingSpotsTitle: t(
      "itineraryDayOne.cityCenter.sightseeingSpotsTitle",
    ),
  };
  const sightseeingSpots = [
    {
      title: t(
        "itineraryDayOne.cityCenter.spots.atomicBombDome.title",
      ),
      walkFrom: t(
        "itineraryDayOne.cityCenter.spots.atomicBombDome.walkFrom",
      ),
      duration: t(
        "itineraryDayOne.cityCenter.spots.atomicBombDome.duration",
      ),
      description: t(
        "itineraryDayOne.cityCenter.spots.atomicBombDome.description",
      ),
      imageAlt: t(
        "itineraryDayOne.cityCenter.spots.atomicBombDome.imageAlt",
      ),
      image: "/itinerary/atomic-bomb-dome.jpg",
      relatedUrl: atomicBombDomeRelatedUrl,
      mapUrl: atomicBombDomeMapUrl,
    },
    {
      title: t(
        "itineraryDayOne.cityCenter.spots.peaceMuseum.title",
      ),
      walkFrom: t(
        "itineraryDayOne.cityCenter.spots.peaceMuseum.walkFrom",
      ),
      duration: t(
        "itineraryDayOne.cityCenter.spots.peaceMuseum.duration",
      ),
      description: t(
        "itineraryDayOne.cityCenter.spots.peaceMuseum.description",
      ),
      imageAlt: t(
        "itineraryDayOne.cityCenter.spots.peaceMuseum.imageAlt",
      ),
      image: "/itinerary/peace-memorial-museum.jpg",
      relatedUrl: peaceMuseumRelatedUrl,
      mapUrl: peaceMuseumMapUrl,
    },
  ];
  const travelDuration = t("itineraryDayOne.travelDuration");
  const dinner = {
    kind: "dinner" as const,
    title: t("itineraryDayOne.dinner.title"),
    restaurant: t("itineraryDayOne.dinner.restaurant"),
    imageAlt: t("itineraryDayOne.dinner.imageAlt"),
    description: t("itineraryDayOne.dinner.description"),
    relatedSite: t("itineraryDayOne.dinner.relatedSite"),
    googleMaps: t("itineraryDayOne.dinner.googleMaps"),
    walkDuration: t("itineraryDayOne.dinner.walkDuration"),
    otherOptionTitle: t("itineraryDayOne.dinner.otherOptionTitle"),
    otherOptionName: t("itineraryDayOne.dinner.otherOptionName"),
    otherOptionWalkDuration: t(
      "itineraryDayOne.dinner.otherOptionWalkDuration",
    ),
    otherOptionImageAlt: t("itineraryDayOne.dinner.otherOptionImageAlt"),
    otherOptionDescription: t("itineraryDayOne.dinner.otherOptionDescription"),
  };
  const hotel = {
    kind: "hotel" as const,
    title: t("itineraryDayOne.hotel.title"),
    name: t("itineraryDayOne.hotel.name"),
    imageAlt: t("itineraryDayOne.hotel.imageAlt"),
    description: t("itineraryDayOne.hotel.description"),
    relatedSite: t("itineraryDayOne.hotel.relatedSite"),
    googleMaps: t("itineraryDayOne.hotel.googleMaps"),
    otherOptionsTitle: t("itineraryDayOne.hotel.otherOptionsTitle"),
  };
  const otherHotels = [
    {
      name: t("itineraryDayOne.hotel.otherOptions.southGate.name"),
      image: "/itinerary/hotel-granvia-south-gate.webp",
      imageAlt: t("itineraryDayOne.hotel.otherOptions.southGate.imageAlt"),
      description: t(
        "itineraryDayOne.hotel.otherOptions.southGate.description",
      ),
      relatedUrl: granviaSouthGateRelatedUrl,
      mapUrl: granviaSouthGateMapUrl,
    },
    {
      name: t("itineraryDayOne.hotel.otherOptions.rihga.name"),
      image: "/itinerary/rihga-royal-hiroshima.jpg",
      imageAlt: t("itineraryDayOne.hotel.otherOptions.rihga.imageAlt"),
      walkFrom: t(
        "itineraryDayOne.hotel.otherOptions.rihga.walkFrom",
      ),
      description: t(
        "itineraryDayOne.hotel.otherOptions.rihga.description",
      ),
      relatedUrl: rihgaRelatedUrl,
      mapUrl: rihgaMapUrl,
    },
  ];
  const stops = [
    { kind: "airport" as const, ...airport, mapUrl: airportMapUrl },
    { ...cityCenter, mapUrl: cityCenterMapUrl },
    { ...dinner, mapUrl: mitchanMapUrl },
    { ...hotel, mapUrl: granviaMapUrl },
  ];
  const transitions = [
    { mode: "bus" as const, duration: travelDuration },
    { mode: "walk" as const, duration: dinner.walkDuration },
    {
      mode: "tram" as const,
      duration: t("itineraryDayOne.hotel.travelDuration"),
    },
  ];

  return (
    <section aria-labelledby="itinerary-day-title" className="mt-6">
      <h2
        id="itinerary-day-title"
        className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl"
      >
        {dayTitle}
      </h2>

      <ol className="mx-auto mt-10 max-w-4xl">
        {stops.map((stop, index) => (
          <li key={stop.title}>
            <article className="relative rounded-md border border-cyan-500 bg-white px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-1.5 -top-7 grid size-14 place-items-center"
              >
                <MapPin className="absolute size-14 fill-orange-500 text-orange-500" />
                <span className="relative -top-1 text-xl font-bold text-white">
                  {index + 1}
                </span>
              </span>

              <h3 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {stop.title}
              </h3>
              {"duration" in stop && (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                  <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                  {t("itineraryTimeRequired", { duration: stop.duration })}
                </p>
              )}

              {stop.kind === "airport" && (
                <>
                  <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {stop.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                    <ResourceLink href="https://www.hij.airport.jp/en/">
                      {stop.usefulInformation}
                    </ResourceLink>
                    <ResourceLink href={busRouteUrl}>{stop.bus}</ResourceLink>
                    <ResourceLink href={stop.mapUrl}>
                      {stop.googleMaps}
                    </ResourceLink>
                  </div>
                </>
              )}

              {stop.kind === "cityCenter" && (
                <div className="mt-6">
                  <figure className="relative aspect-[16/9] overflow-hidden rounded-md">
                    <Image
                      src="/itinerary/hiroshima-city.jpg"
                      alt={stop.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-cover"
                    />
                  </figure>

                  <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {stop.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                    <ResourceLink href={cityCenterRelatedUrl}>
                      {stop.relatedSite}
                    </ResourceLink>
                    <ResourceLink href={stop.mapUrl}>
                      {stop.googleMaps}
                    </ResourceLink>
                  </div>

                  <section
                    aria-labelledby="sightseeing-spots-title"
                    className="mt-8 border-t border-slate-200 pt-7"
                  >
                    <h4
                      id="sightseeing-spots-title"
                      className="text-xl font-bold text-slate-800 sm:text-2xl"
                    >
                      {stop.sightseeingSpotsTitle}
                    </h4>

                    <div className="mt-5 divide-y divide-slate-200">
                      {sightseeingSpots.map((spot) => (
                        <article key={spot.title} className="py-7 first:pt-0">
                          <h5 className="text-lg font-bold text-slate-800">
                            {spot.title}
                          </h5>

                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                            <p className="flex items-start gap-1.5">
                              <Footprints
                                className="mt-0.5 size-4 shrink-0"
                                aria-hidden="true"
                              />
                              {spot.walkFrom}
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Clock3
                                className="size-4 shrink-0"
                                aria-hidden="true"
                              />
                              {t("itineraryTimeRequired", {
                                duration: spot.duration,
                              })}
                            </p>
                          </div>

                          <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                            <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                              <Image
                                src={spot.image}
                                alt={spot.imageAlt}
                                fill
                                sizes="(min-width: 640px) 200px, 100vw"
                                className="object-cover"
                              />
                            </figure>
                            <p className="text-sm leading-7 text-slate-700 sm:text-base">
                              {spot.description}
                            </p>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                            <ResourceLink href={spot.relatedUrl}>
                              {stop.relatedSite}
                            </ResourceLink>
                            <ResourceLink href={spot.mapUrl}>
                              {stop.googleMaps}
                            </ResourceLink>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {stop.kind === "dinner" && (
                <>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {stop.restaurant}
                  </p>
                  <Image
                    src="/itinerary/mitchan-orizuru-tower.jpg"
                    alt={stop.imageAlt}
                    width={1000}
                    height={380}
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="mt-5 h-auto w-full rounded-md"
                  />
                  <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {stop.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                    <ResourceLink href={mitchanRelatedUrl}>
                      {stop.relatedSite}
                    </ResourceLink>
                    <ResourceLink href={stop.mapUrl}>
                      {stop.googleMaps}
                    </ResourceLink>
                  </div>
                  <section
                    aria-labelledby="other-dining-option-title"
                    className="mt-8 border-t border-slate-200 pt-7"
                  >
                    <h4
                      id="other-dining-option-title"
                      className="text-xl font-bold text-slate-800 sm:text-2xl"
                    >
                      {stop.otherOptionTitle}
                    </h4>
                    <h5 className="mt-5 text-lg font-bold text-slate-800">
                      {stop.otherOptionName}
                    </h5>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
                      <Footprints className="size-4 shrink-0" aria-hidden="true" />
                      {stop.otherOptionWalkDuration}
                    </p>
                    <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                      <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                        <Image
                          src="/itinerary/okonomimura.jpg"
                          alt={stop.otherOptionImageAlt}
                          fill
                          sizes="(min-width: 640px) 200px, 100vw"
                          className="object-cover"
                        />
                      </figure>
                      <div>
                        <p className="text-sm leading-7 text-slate-700 sm:text-base">
                          {stop.otherOptionDescription}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                          <ResourceLink href={okonomimuraRelatedUrl}>
                            {stop.relatedSite}
                          </ResourceLink>
                          <ResourceLink href={okonomimuraMapUrl}>
                            {stop.googleMaps}
                          </ResourceLink>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {stop.kind === "hotel" && (
                <>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {stop.name}
                  </p>
                  <Image
                    src="/itinerary/hotel-granvia-hiroshima.jpg"
                    alt={stop.imageAlt}
                    width={1366}
                    height={768}
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="mt-5 h-auto w-full rounded-md"
                  />
                  <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {stop.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                    <ResourceLink href={granviaRelatedUrl}>
                      {stop.relatedSite}
                    </ResourceLink>
                    <ResourceLink href={stop.mapUrl}>
                      {stop.googleMaps}
                    </ResourceLink>
                  </div>
                  <section
                    aria-labelledby="other-accommodation-options-title"
                    className="mt-8 border-t border-slate-200 pt-7"
                  >
                    <h4
                      id="other-accommodation-options-title"
                      className="text-xl font-bold text-slate-800 sm:text-2xl"
                    >
                      {stop.otherOptionsTitle}
                    </h4>
                    <div className="mt-5 divide-y divide-slate-200">
                      {otherHotels.map((option) => (
                        <article key={option.name} className="py-7 first:pt-0">
                          <h5 className="text-lg font-bold text-slate-800">
                            {option.name}
                          </h5>
                          {"walkFrom" in option && (
                            <p className="mt-3 flex items-start gap-1.5 text-sm text-slate-700">
                              <Footprints
                                className="mt-0.5 size-4 shrink-0"
                                aria-hidden="true"
                              />
                              {option.walkFrom}
                            </p>
                          )}
                          <div className="mt-4 grid items-start gap-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                            <figure className="relative aspect-[4/3] overflow-hidden rounded-md">
                              <Image
                                src={option.image}
                                alt={option.imageAlt}
                                fill
                                sizes="(min-width: 640px) 200px, 100vw"
                                className="object-cover"
                              />
                            </figure>
                            <div>
                              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                                {option.description}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-cyan-700">
                                <ResourceLink href={option.relatedUrl}>
                                  {stop.relatedSite}
                                </ResourceLink>
                                <ResourceLink href={option.mapUrl}>
                                  {stop.googleMaps}
                                </ResourceLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </article>

            {index < transitions.length && (
              <div className="relative ml-7 flex h-32 items-center border-l border-cyan-500 pl-10">
                <span className="absolute -left-6 grid size-12 place-items-center rounded-full border border-cyan-500 bg-white text-slate-700">
                  {transitions[index].mode === "bus" ? (
                    <BusFront className="size-7" aria-hidden="true" />
                  ) : transitions[index].mode === "tram" ? (
                    <TramFront className="size-6" aria-hidden="true" />
                  ) : (
                    <Footprints className="size-6" aria-hidden="true" />
                  )}
                </span>
                <span className="text-sm text-slate-700">
                  {transitions[index].duration}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
