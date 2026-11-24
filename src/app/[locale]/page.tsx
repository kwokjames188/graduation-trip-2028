import { readdir } from "node:fs/promises";
import { join } from "node:path";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Footer from "@/components/Footer";
import HomePhotoBackground from "@/components/HomePhotoBackground";
import TripCountdown from "@/components/TripCountdown";

export default async function HomePage() {
  const t = await getTranslations("Home");
  const photoDirectory = join(process.cwd(), "public", "home-backgrounds");
  const files = await readdir(photoDirectory, { withFileTypes: true });
  const photos = files
    .filter(
      (file) =>
        file.isFile() && /\.(avif|jpe?g|png|webp)$/i.test(file.name),
    )
    .map((file) => `/home-backgrounds/${encodeURIComponent(file.name)}`);
  const highlights = [
    {
      key: "miyajima",
      image: "/highlights/miyajima-v2.avif",
    },
    {
      key: "kumamotoCastle",
      image: "/highlights/kumamoto-castle-v2.jpg",
    },
    {
      key: "mojiko",
      image: "/highlights/mojiko-v2.jpg",
    },
    {
      key: "inasayama",
      image: "/highlights/inasayama-v2.webp",
    },
  ] as const;

  return (
    <>
      <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 px-6 py-20 text-center">
        <HomePhotoBackground photos={photos} />
        <div className="relative z-10 mx-auto max-w-5xl sm:translate-y-8 lg:translate-y-0">
          <span className="inline-block rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-sm">
            {t("badge")}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {t("subtitle")}
          </p>
          <div className="mt-10">
            <Link
              href="/itinerary"
              className="rounded-full bg-sky-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-sky-700"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("highlights.title")}
          </h2>
          <div className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
            {highlights.map((highlight, index) => {
              const isReversed = index % 2 === 1;
              const title = t(`highlights.${highlight.key}.title`);

              return (
                <article
                  key={highlight.key}
                  className="mx-auto grid max-w-3xl items-center md:grid-cols-2"
                >
                  <figure
                    className={`relative z-20 mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-md shadow-sm ${
                      isReversed
                        ? "order-1 md:col-start-2 md:row-start-1 md:justify-self-end"
                        : "order-1 md:col-start-1 md:row-start-1 md:justify-self-start"
                    }`}
                  >
                    <Image
                      src={highlight.image}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className={
                        highlight.key === "miyajima"
                          ? "object-cover object-[60%_center]"
                          : highlight.key === "mojiko"
                            ? "object-contain"
                          : "object-cover"
                      }
                    />
                  </figure>
                  <div
                    className={`relative z-10 order-2 bg-sky-50 px-7 py-8 sm:px-9 md:row-start-1 ${
                      isReversed
                        ? "md:col-start-1 md:-mr-7 md:pr-12"
                        : "md:col-start-2 md:-ml-7 md:pl-12"
                    }`}
                  >
                    <h3 className="text-2xl font-bold leading-tight text-slate-800 sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-700">
                      {t(`highlights.${highlight.key}.description`)}
                    </p>
                    <Link
                      href="/spots"
                      className="mt-5 inline-flex rounded-full border border-cyan-500 px-7 py-2.5 font-semibold text-cyan-600 transition hover:bg-cyan-500 hover:text-white"
                    >
                      {t("highlights.readMore")}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3 sm:mb-12">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-9 text-sky-600"
            >
              <path d="M22 16.2 13.7 12V6.5c0-1.1-.9-2-2-2s-2 .9-2 2V12L1.4 16.2V18l8.3-1.7v2.2l-2.5 1.8v1.2l4.5-.8 4.5.8v-1.2l-2.5-1.8v-2.2l8.3 1.7v-1.8Z" />
            </svg>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("flights.title")}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border-4 border-slate-700 bg-white p-5 shadow-[0_8px_0_#334155] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border-2 border-slate-700 bg-amber-300 px-5 py-2 text-sm font-bold text-slate-800">
                  {t("flights.outbound")}
                </span>
                <p className="pt-1 text-lg font-bold text-slate-700 sm:text-xl">
                  {t("flights.outboundDate")}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                <div>
                  <p className="text-4xl font-light text-slate-800">HKG</p>
                  <p className="mt-2 text-xl font-semibold text-sky-700">09:30</p>
                  <p className="mt-1 text-sm text-slate-500">HKIA T2</p>
                </div>
                <div className="text-slate-500">
                  <p className="mb-2 text-2xl">✈</p>
                  <p className="whitespace-nowrap text-xs font-semibold sm:text-sm">
                    {t("flights.outboundDuration")}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-light text-slate-800">HIJ</p>
                  <p className="mt-2 text-xl font-semibold text-sky-700">13:45</p>
                  <p className="mt-1 text-sm leading-tight text-slate-500">
                    Hiroshima Airport
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t-[3px] border-dashed border-slate-700 pt-6">
                <p className="font-bold text-slate-800">
                  UO822 <span className="font-medium">· Airbus A320neo</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-600 sm:text-base">
                  <span>🛅 [To be confirmed]</span>
                  <span>🍱 [To be confirmed]</span>
                </div>
                <p className="mt-5 leading-8 text-slate-600">
                  ~07:00 arrive at HKIA T2,<br />
                  Arrival at ~14:30 and take Airport Bus to Hiroshima Station
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] border-4 border-slate-700 bg-white p-5 shadow-[0_8px_0_#334155] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border-2 border-slate-700 bg-sky-200 px-5 py-2 text-sm font-bold text-slate-800">
                  {t("flights.inbound")}
                </span>
                <p className="pt-1 text-lg font-bold text-slate-700 sm:text-xl">
                  {t("flights.inboundDate")}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                <div>
                  <p className="text-4xl font-light text-slate-800">FUK</p>
                  <p className="mt-2 text-xl font-semibold text-sky-700">18:00</p>
                  <p className="mt-1 text-sm text-slate-500">Fukuoka Airport</p>
                </div>
                <div className="text-slate-500">
                  <p className="mb-2 text-2xl">✈</p>
                  <p className="whitespace-nowrap text-xs font-semibold sm:text-sm">
                    {t("flights.inboundDuration")}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-light text-slate-800">HKG</p>
                  <p className="mt-2 text-xl font-semibold text-sky-700">21:00</p>
                  <p className="mt-1 text-sm text-slate-500">HKIA T2</p>
                </div>
              </div>

              <div className="mt-7 border-t-[3px] border-dashed border-slate-700 pt-6">
                <p className="font-bold text-slate-800">
                  UO639 <span className="font-medium">· Airbus A321</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-600 sm:text-base">
                  <span>🛅 [To be confirmed]</span>
                  <span>🍱 [To be confirmed]</span>
                </div>
                <p className="mt-5 leading-8 text-slate-600">
                  ~15:30 arrive at Fukuoka Airport,<br />
                  Arrival at ~21:30 in Hong Kong
                </p>
              </div>
            </article>
          </div>

          <TripCountdown />
        </div>
      </section>

      <Footer />
    </>
  );
}