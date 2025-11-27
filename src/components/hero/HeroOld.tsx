import Image from "next/image";

import { siteConfig } from "@/content/site";

export const HeroOld = () => {
  const {
    schoolName,
    instructorName,
    city,
    tagline,
    phone,
    whatsappUrl,
    email,
    experienceYears,
    passRate,
    transmission,
    car,
  } = siteConfig;

  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:py-20">
        <div className="md:w-1/2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
            Автоинструктор в {city}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Научи се да шофираш спокойно и уверено.
          </h1>
          <p className="mb-6 text-base text-slate-600">{tagline}</p>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Обади се сега: {phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Пиши в WhatsApp
            </a>
          </div>

          <p className="text-sm text-slate-500">
            или имейл:{" "}
            <a href={`mailto:${email}`} className="font-medium text-blue-600 hover:underline">
              {email}
            </a>
          </p>
        </div>

        <div className="md:w-1/2 space-y-4">
          {/* Снимка в херото – смени src с името на твоя файл в public/ */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="images/hero.jpeg"
              alt="Автоинструктор по време на шофьорски час"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Картичка с инфо за инструктора */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="mb-1 text-sm font-medium text-slate-700">{instructorName}</p>
            <p className="mb-4 text-xs uppercase tracking-wide text-slate-500">
              Автоинструктор · {schoolName} · {city}
            </p>
            <dl className="space-y-3 text-sm text-slate-700">
              <div className="flex justify-between">
                <dt className="text-slate-500">Опит</dt>
                <dd className="font-semibold">{experienceYears}+ години</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Успеваемост</dt>
                <dd className="font-semibold">{passRate} успешно полагане на изпит</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Скоростна кутия</dt>
                <dd className="font-semibold">{transmission}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Автомобил</dt>
                <dd className="font-semibold">{car}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
