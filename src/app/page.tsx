// src/app/page.tsx
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Hero } from "@/components/hero/Hero";
export const dynamic = "force-static";

export default function HomePage() {
  const { schoolName, instructorName, city, phone, whatsappUrl, email, services, testimonials } =
    siteConfig;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Автошкола в {city}
            </p>
            <p className="text-sm font-semibold text-slate-900">{schoolName}</p>
          </div>
          <a
            href={`tel:${phone}`}
            className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-block"
          >
            Обади се: {phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Services / pricing */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-16">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            Шофьорски курсове и цени
          </h2>
          <p className="mb-8 text-sm text-slate-600">
            Ясни и прозрачни условия – без скрити такси.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <h3 className="mb-1 text-base font-semibold text-slate-900">{service.name}</h3>
                  <p className="mb-3 text-sm text-slate-500">{service.description}</p>
                </div>
                <div>
                  <p className="mb-3 text-lg font-bold text-slate-900">{service.price}</p>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Запиши се по телефон
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose me */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-16">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            Защо да изберете {instructorName}
          </h2>
          <p className="mb-8 text-sm text-slate-600">
            Шофирането е отговорност, но не трябва да е стрес. Целта ми е да се чувствате спокойни,
            сигурни и добре подготвени за изпита и реалния трафик.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-1 text-sm font-semibold text-slate-900">Спокоен и търпелив подход</p>
              <p className="text-sm text-slate-600">
                Без повишаване на тон и излишно напрежение – всичко се обяснява ясно и с примери.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-1 text-sm font-semibold text-slate-900">Гъвкав график</p>
              <p className="text-sm text-slate-600">
                Възможни са сутрешни, вечерни и уикенд часове според вашето свободно време.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-1 text-sm font-semibold text-slate-900">
                Подготовка по изпитни маршрути
              </p>
              <p className="text-sm text-slate-600">
                Кормуване по реалните изпитни маршрути в {city}, за да няма изненади в деня на
                изпита.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-16">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            Отзиви от курсисти
          </h2>
          <p className="mb-8 text-sm text-slate-600">
            Няколко думи от хора, които вече успешно карат с помощта на {instructorName}.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <blockquote className="mb-3 text-sm text-slate-700">„{t.text}”</blockquote>
                <figcaption className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / footer */}
      <footer className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="mb-4">
            <h2 className="mb-2 text-2xl font-semibold">
              Готови ли сте да започнете шофьорски курс?
            </h2>
            <p className="text-sm text-slate-300">
              Обадете се или пишете, за да уточним удобни дни и часове за обучение в {city}.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Обади се: {phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800"
            >
              Пиши в WhatsApp
            </a>
          </div>

          <p className="text-xs text-slate-500">
            {schoolName} · {city} ·{" "}
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
