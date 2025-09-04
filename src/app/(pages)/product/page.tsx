// app/product/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const specsLeft = [
  { k: "Тип ИС", v: "LED" },
  { k: "Цвет свечения", v: "4000 K" },
  { k: "Шаг MacAdam", v: "5" },
  { k: "Световой поток", v: "94680 лм" },
  { k: "Индекс цветопередачи", v: "≥70" },
  { k: "Коэффициент мощности (cos φ)", v: "0.95" },
];

const specsRight = [
  { k: "Потребляемая мощность", v: "800 Вт" },
  { k: "Степень защиты", v: "IP65" },
  { k: "Температура эксплуатации", v: "−40°С…+50°С" },
  { k: "Материал корпуса", v: "литой алюминий" },
  { k: "Срок службы", v: "не менее 50 000 часов" },
];

const chipsPower = ["800", "1400"];
const chipsFlux = ["94680"];
const chipsVoltage = ["230"];

export default function ProductPage() {
  const [tab, setTab] = useState<"desc" | "reviews" | "usage">("desc");
  const [power, setPower] = useState("800");

  return (
    <div className="w-full bg-white text-[#1C1C1C]">
      {/* ===== Top rail ===== */}
      <header className="max-w-[1160px] mx-auto px-4 lg:px-0 pt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[12px] leading-4 text-[#9CA3AF]">
            Главная <span className="mx-1">→</span> Каталог <span className="mx-1">→</span> TORNADO
          </p>
          <button className="text-[12px] leading-4 text-[#6B7280] hover:text-[#111827] underline underline-offset-2">
            Скачать каталог (PDF)
          </button>
        </div>

        <h1 className="mt-3 text-[26px] leading-[32px] font-bold tracking-[-0.2px]">
          СЕРИЯ TORNADO:{" "}
          <span className="text-[#D92D20]">4000K S {power} ВТ</span>
        </h1>
        <p className="mt-1 text-[14px] leading-5 text-[#6B7280]">
          УЗКОНАПРАВЛЕННЫЙ СВЕТИЛЬНИК ДЛЯ ПОДСВЕТКИ ФАСАДОВ И АКЦЕНТОВ С ВЫСОТЫ ДО 40 М
        </p>
      </header>

      {/* ===== Hero: image + controls ===== */}
      <section className="max-w-[1160px] mx-auto px-4 lg:px-0 mt-6 grid grid-cols-1 md:grid-cols-[560px_1fr] gap-10">
        {/* left: image + thumbs */}
        <div>
          <div className="relative w-full bg-[#F6F7F8] rounded-[8px] border border-[#ECEFF3] flex items-center justify-center">
            <Image
              src="/svg/catalog/image 184.png"
              alt="TORNADO"
              width={420}
              height={420}
              className="h-[420px] w-auto object-contain"
              priority
            />
          </div>

          {/* thumbs / dots */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-[64px] rounded-[8px] border ${
                  i === 2 ? "border-[#D92D20]" : "border-[#E5E7EB]"
                } bg-white flex items-center justify-center`}
              >
                <div className="w-[44px] h-[44px] bg-[#F3F4F6] rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* right: controls */}
        <div className="pt-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-[#9CA3AF]">Артикул: 3603</p>
            <p className="text-[13px] text-[#9CA3AF]">В наличии</p>
          </div>

          {/* groups */}
          <div className="mt-4 flex flex-col  gap-x-6 gap-y-4">
            {/* Мощность */}
            <div className="flex items-center gap-[127px]">
              <p className="text-[12px] text-[#6B7280]">Мощность</p>
              <div className="mt-1 flex gap-2">
                {chipsPower.map((c) => {
                  const active = c === power;
                  return (
                    <button
                      key={c}
                      onClick={() => setPower(c)}
                      className={`h-8 px-3 rounded-[6px] border text-[13px] ${
                        active
                          ? "border-[#D92D20] text-[#D92D20] bg-[#FFF5F4]"
                          : "border-[#E5E7EB] text-[#111827] hover:border-[#D1D5DB]"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Напряжение */}
            <div className="flex items-center gap-[127px]">
              <p className="text-[12px] text-[#6B7280]">Напряжение</p>
              <div className="mt-1 flex gap-2">
                {chipsVoltage.map((c) => (
                  <span
                    key={c}
                    className="h-8 px-3 inline-flex items-center rounded-[6px] border border-[#E5E7EB] text-[13px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Световой поток */}
            <div className="flex items-center gap-[127px]">
              <p className="text-[12px] text-[#6B7280]">Световой поток</p>
              <div className="mt-1 flex gap-2">
                {chipsFlux.map((c) => (
                  <span
                    key={c}
                    className="h-8 px-3 inline-flex items-center rounded-[6px] border border-[#E5E7EB] text-[13px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Корпус / Размеры */}
            <div className="grid grid-cols-2 gap-3 col-span-2">
              <div>
                <p className="text-[12px] text-[#6B7280]">Корпус</p>
                <select className="mt-1 h-9 w-full rounded-[6px] border border-[#E5E7EB] px-3 text-[13px]">
                  <option>литой алюминиевый</option>
                </select>
              </div>
              <div>
                <p className="text-[12px] text-[#6B7280]">Размеры</p>
                <select className="mt-1 h-9 w-full rounded-[6px] border border-[#E5E7EB] px-3 text-[13px]">
                  <option>445×520×702 мм</option>
                </select>
              </div>
            </div>
          </div>

            <p className="mt-[101px]">ТОРNADO 800 Вт — один из самых мощных архитектурных светильников на рынке. Используется в проектах премиального уровня, где важны:</p>
          {/* bullets */}
          <div className="flex gap-[40px]">
            <ul className="mt-5 space-y-1.5 text-[13px] text-[#4B5563]">
            <li>— максимальный световой поток</li>
            <li>— точная оптика (10°)</li>
            <li>— высокая энергоэффективность</li>
          </ul>

          

          {/* actions */}
          <div className="mt-6 flex flex-col items-center max-w-[202px] w-full gap-[10px]">
            <button className="max-w-[202px] w-full h-10 px-5 rounded-[8px] border border-[#D1D5DB] text-[14px] font-medium hover:bg-[#F9FAFB]">
              Обсудить проект
            </button>
            <button className="max-w-[202px] w-full h-10  rounded-[8px] bg-[#D92D20] text-white text-[14px] font-medium hover:bg-[#b92519]">
              Добавить в избранное
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* ===== Tabs + Description ===== */}
      <section className="max-w-[1160px] mx-auto px-4 lg:px-0 mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-[560px_1fr] gap-10">
        <div>
          {/* tabs */}
          <div className="border-b border-[#E5E7EB] flex gap-8">
            {[
              { id: "desc", label: "Описание" },
              { id: "reviews", label: "Отзывы" },
              { id: "usage", label: "Применение" },
            ].map((t) => {
              const active = tab === (t.id as typeof tab);
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as typeof tab)}
                  className={`relative py-3 text-[14px] ${
                    active ? "text-[#111827]" : "text-[#6B7280]"
                  }`}
                >
                  {t.label}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#D92D20]"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* tab content */}
          <div className="pt-4 text-[14px] leading-[22px] text-[#4B5563]">
            {tab === "desc" && (
              <>
                <p>
                  Tornado 4000K S 800 Вт — мощный архитектурный светильник,
                  созданный для задач, где важна направленная акцентная
                  подсветка с экономичным потреблением. При световом потоке
                  94 680 лм он демонстрирует отличное соотношение силы света
                  на ватт, обеспечивая яркое, но чётко сфокусированное
                  освещение.
                </p>
                <p className="mt-3">
                  Указанная оптика (10°) позволяет «рисовать» светом детали
                  фасадов и ландшафтных элементов. Корпус из литого алюминия
                  защищён по классу IP65 и выдерживает температуры от −40 до
                  +50°С. Этот светильник подходит для объектов, где нет
                  потребности в максимальной мощности, но важна высокая
                  эффективность и точность света.
                </p>

                <p className="mt-5 text-[#111827] font-medium">
                  Скачать документацию и файлы:
                </p>
                <ul className="mt-2 space-y-1 text-[14px]">
                  <li>• [PDF] Паспорт изделия</li>
                  <li>• [DWG] Чертёж</li>
                  <li>• [IES] Фотометрия</li>
                  <li>• [RFA] BIM (Revit)</li>
                </ul>
              </>
            )}

            {tab === "reviews" && (
              <p>Пока нет отзывов. Будьте первым, кто оставит отзыв.</p>
            )}

            {tab === "usage" && (
              <p>
                Используется для подсветки фасадов, колонн, арок и акцентной
                подсветки с большой высоты (до 40 м).
              </p>
            )}
          </div>
        </div>

        {/* Tech card */}
        <aside className="md:pt-[6px] ">
          <div className="rounded-[10px] border border-[#EF3824]">
            <div className="px-6 py-4 border-b border-[#E4E7EC]">
              <h3 className="text-[18px] leading-6 font-bold uppercase tracking-wide">
                Технические характеристики
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* left column */}
              <ul className="divide-y divide-[#F1F3F5]">
                {specsLeft.map((row) => (
                  <li key={row.k} className="px-6 py-3 text-[13px]">
                    <span className="text-[#6B7280]">{row.k}: </span>
                    <span className="text-[#111827]">{row.v}</span>
                  </li>
                ))}
              </ul>
              {/* right column */}
              <ul className="divide-y divide-[#F1F3F5]">
                {specsRight.map((row) => (
                  <li key={row.k} className="px-6 py-3 text-[13px]">
                    <span className="text-[#6B7280]">{row.k}: </span>
                    <span className="text-[#111827]">{row.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      {/* ===== Cases ===== */}
      <section className="max-w-[1160px] mx-auto px-4 lg:px-0 mt-14">
        <h2 className="text-[20px] font-bold uppercase mb-6">Кейсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1 */}
          <div>
            <Image
              src="/svg/product/image.png"
              alt="Храм Василия Блаженного"
              width={560}
              height={360}
              className="rounded-[8px] object-cover w-full h-auto"
            />
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[13px] text-[#6B7280]">
                Храм Василия Блаженного
              </p>
              <button className="text-[13px] text-[#175CD3] hover:underline flex items-center gap-1">
                Подробнее
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>

          {/* Case 2 */}
          <div>
            <Image
              src="/svg/product/image-1.png"
              alt="Неглинная галерея"
              width={560}
              height={360}
              className="rounded-[8px] object-cover w-full h-auto"
            />
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[13px] text-[#6B7280]">Неглинная галерея</p>
              <button className="text-[13px] text-[#175CD3] hover:underline flex items-center gap-1">
                Подробнее
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Recommend ===== */}
      <section className="max-w-[1160px] mx-auto px-4 lg:px-0 mt-14">
        <h2 className="text-[20px] font-bold uppercase mb-6">
          Рекомендуем посмотреть
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-[#ECEFF3] rounded-[10px] p-5 flex flex-col items-center"
            >
              <Image
                src="/svg/catalog/image 184.png"
                alt="TORNADO"
                width={160}
                height={120}
                className="object-contain"
              />
              <p className="mt-3 text-[13px] text-center text-[#374151]">
                TORNADO 4000K S 66IP LED
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== We can + Form ===== */}
      <section className="max-w-[1160px] mx-auto px-4 lg:px-0 mt-16 mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left list */}
        <div>
          <h2 className="text-[20px] font-bold uppercase mb-6">Мы можем</h2>
          <ul className="space-y-4">
            {[
              "Сделать красивое ландшафтное освещение",
              "Грамотно осветить автомобильные дороги различного класса",
              "Сделать проект АХП (архитектурно-художественную подсветку), поставку и монтаж",
              "Изготовить металлоконструкции и конструкции",
              "Сделать торшеры в историческом стиле с помощью художественного литья",
              "Сделать светильники для интерьера",
              "Материалы для электромонтажа",
              "Реализовать нестандартный проект",
            ].map((text, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="min-w-[24px] text-[#D92D20] font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-[22px] text-[#374151]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* right form */}
        <div className="rounded-[10px] bg-[#141416] text-white p-8">
          <h3 className="text-[18px] font-bold uppercase tracking-wide text-[#FF4B3A]">
            Сопровождаем на всех этапах проекта
          </h3>

          <form className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Имя"
              className="w-full h-11 px-3 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full h-11 px-3 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-11 px-3 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none"
            />
            <textarea
              placeholder="Текст обращения"
              className="w-full h-[110px] px-3 py-2 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full h-11 rounded-[8px] bg-[#D92D20] text-white font-semibold hover:bg-[#b92519] transition"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
