"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

const heroImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpeg",
  "/images/hero-3.jpeg",
  "/images/hero-4.jpeg",
  "/images/hero-5.jpeg",
  "/images/hero-6.jpeg",
  "/images/hero-7.jpeg",
  "/images/hero-8.jpeg",
  "/images/hero-9.jpeg",
  "/images/hero-10.jpeg",
  "/images/hero-11.jpeg",
  // добави/махни според това колко снимки имаш
];

export function Hero() {
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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000); // сменя снимката на 7 секунди

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b  border-slate-200 bg-slate-950 text-white">
      {/* Background images + overlay */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Автоинструктор и автомобил по време на шофьорски курс"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* тъмен overlay за по-четим текст */}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="md:w-2/3">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-300">
              Автоинструктор в {city}
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Научи се да шофираш спокойно и уверено.
            </h1>
            <p className="mb-6 max-w-xl text-base text-slate-200">{tagline}</p>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
              >
                Обади се сега: {phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800"
              >
                Пиши в WhatsApp
              </a>
            </div>

            <p className="text-sm text-slate-300">
              или имейл:{" "}
              <a href={`mailto:${email}`} className="font-medium text-blue-300 hover:underline">
                {email}
              </a>
            </p>
          </div>

          {/* малка инфо-картичка вдясно */}
          <div className="md:w-1/3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg backdrop-blur">
              <p className="mb-1 text-sm font-medium text-slate-50">{instructorName}</p>
              <p className="mb-4 text-xs uppercase tracking-wide text-slate-400">
                Автоинструктор · {schoolName} · {city}
              </p>
              <dl className="space-y-3 text-sm text-slate-100">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-300">Опит</dt>
                  <dd className="font-semibold">{experienceYears}+ години</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-300">Успеваемост</dt>
                  <dd className="font-semibold">{passRate} успешно полагане на изпит</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-300">Скоростна кутия</dt>
                  <dd className="font-semibold">{transmission}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-300">Автомобил</dt>
                  <dd className="font-semibold">{car}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
