"use client";

import { useMemo, useState } from "react";

const garments = [
  { id: "jacket", label: "Жакет", shape: "jacket" },
  { id: "dress", label: "Платье", shape: "dress" },
  { id: "trousers", label: "Брюки", shape: "trousers" },
];

const fabrics = ["Шерсть", "Костюмная", "Сатин"];

const colors = [
  { name: "Cherry", value: "#ff3ea5" },
  { name: "Blush", value: "#ffc5df" },
  { name: "Onyx", value: "#171417" },
  { name: "Ivory", value: "#f4eee9" },
];

function CherryMark() {
  return (
    <svg viewBox="0 0 42 42" aria-hidden="true">
      <path d="M20 13c6-7 10-8 16-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M26 15c2-5 6-8 11-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="15" cy="25" r="9" fill="currentColor" />
      <circle cx="29" cy="27" r="8" fill="currentColor" opacity=".72" />
      <path d="M33 5c-1 5-5 7-10 6 2-4 5-6 10-6Z" fill="currentColor" />
    </svg>
  );
}

function GarmentPreview({ shape, color }: { shape: string; color: string }) {
  if (shape === "dress") {
    return <svg className="garment-svg" viewBox="0 0 280 320" aria-label="Эскиз платья"><path d="M105 38h70l16 38-30 35 64 160c-53 26-117 26-170 0l64-160-30-35 16-38Z" fill={color} stroke="currentColor" strokeWidth="3"/><path d="M119 40c3 22 39 22 42 0M93 80l47 46 47-46" fill="none" stroke="currentColor" strokeWidth="3"/></svg>;
  }
  if (shape === "trousers") {
    return <svg className="garment-svg" viewBox="0 0 280 320" aria-label="Эскиз брюк"><path d="M87 38h106l12 245h-52l-13-154-13 154H75L87 38Z" fill={color} stroke="currentColor" strokeWidth="3"/><path d="M87 70h106M140 40v89" fill="none" stroke="currentColor" strokeWidth="3"/></svg>;
  }
  return <svg className="garment-svg" viewBox="0 0 280 320" aria-label="Эскиз жакета"><path d="M99 39 55 67 34 210l54 12 12-83v143h80V139l12 83 54-12-21-143-44-28-41 43-41-43Z" fill={color} stroke="currentColor" strokeWidth="3"/><path d="m99 39 41 43-19 61-32-72M181 39l-41 43 19 61 32-72M140 82v200M108 201h25m14 0h25" fill="none" stroke="currentColor" strokeWidth="3"/></svg>;
}

export default function Home() {
  const [garment, setGarment] = useState(garments[0]);
  const [fabric, setFabric] = useState(fabrics[0]);
  const [color, setColor] = useState(colors[0]);
  const summary = useMemo(() => `${garment.label} · ${fabric} · ${color.name}`, [garment, fabric, color]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cherry Berry — на главную">
          <span className="brand-mark"><CherryMark /></span>
          <span>CHERRY <i>Berry</i></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#how">Как это работает</a>
          <a href="#research">Исследование</a>
          <a href="#constructor">Конструктор</a>
        </nav>
        <a className="mini-cta" href="#constructor">Создать образ</a>
      </header>

      <section className="hero" id="top">
        <img src="/hero-cherry.png" alt="Модель и её цифровой 3D-аватар в одежде Cherry Berry" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Одежда, которая знает ваши параметры</div>
          <h1>Сначала<br />примерьте.<br /><em>Потом создайте.</em></h1>
          <p>3D-сканирование, персональный дизайн и AR-примерка — без поездок в ателье и случайной посадки.</p>
          <div className="hero-actions">
            <a className="button primary" href="#constructor">Создать свой образ <span>↗</span></a>
            <a className="text-link" href="#how">Узнать, как это работает <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><b>01 / FIT</b><span>Посадка строится по вашему цифровому аватару</span></div>
      </section>

      <section className="problem section-grid">
        <div className="section-label">Проблема</div>
        <div className="problem-copy">
          <h2>Готовая одежда просит вас <span>подстроиться.</span><br />Мы меняем правила.</h2>
          <p>Стандартная размерная сетка не учитывает рост, пропорции и особенности фигуры. В итоге подходящий цвет не совпадает с нужной длиной, а хороший жакет — с посадкой в плечах.</p>
        </div>
        <div className="pain-list">
          {[
            ["01", "Размер", "Верх и низ соответствуют разным размерам"],
            ["02", "Посадка", "Брюки длинные, жакет не сидит в плечах"],
            ["03", "Выбор", "Нужного фасона нет в подходящей ткани"],
            ["04", "Время", "Возвраты и подгонка снова требуют поездок"],
          ].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="how" id="how">
        <div className="how-image"><img src="/ar-fitting.png" alt="Виртуальная примерка одежды на смартфоне" /></div>
        <div className="how-copy">
          <div className="section-label light">Сервис персонализации</div>
          <h2>От сканирования<br />до вещи, которая <em>ваша.</em></h2>
          <div className="steps">
            {[
              ["01", "Создайте цифровой аватар", "Смартфон фиксирует параметры и особенности фигуры."],
              ["02", "Соберите модель", "Выберите фасон, длину, цвет, материал и детали."],
              ["03", "Примерьте в AR", "Оцените пропорции и образ до оформления заказа."],
              ["04", "Отправьте в производство", "Вещь создаётся по сохранённым параметрам."],
            ].map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="research section-grid" id="research">
        <div className="section-label">Что показали интервью</div>
        <div className="research-head">
          <h2>Проблема реальна.<br /><span>Готовность платить — ещё гипотеза.</span></h2>
          <p>Мы поговорили с 12 респондентами в Санкт-Петербурге. Результаты подтверждают интерес к персонализации, но не дают права обещать рыночный успех без следующего теста.</p>
        </div>
        <div className="stats">
          <article className="stat stat-main"><strong>12/12</strong><p>считают персонализацию важной или полезной</p><div className="meter"><i /></div></article>
          <article><strong>10</strong><p>заинтересованы в 3D/AR-примерке</p></article>
          <article><strong>6/12</strong><p>сталкиваются с проблемой размера и посадки</p></article>
          <article><strong>5/12</strong><p>видят несоответствие фото и реальной вещи</p></article>
          <article><strong>4/12</strong><p>не уверены в ткани и качестве до покупки</p></article>
        </div>
      </section>

      <section className="constructor" id="constructor">
        <div className="constructor-head">
          <div><div className="section-label light">Демо-конструктор</div><h2>Соберите образ<br /><em>под себя.</em></h2></div>
          <p>Мини-прототип показывает механику будущего сервиса: от модели и материала до цвета. Следующий этап — точная посадка по 3D-аватару.</p>
        </div>
        <div className="builder">
          <div className="builder-controls">
            <fieldset><legend>01. Модель</legend><div className="choice-row">{garments.map(item => <button key={item.id} className={garment.id === item.id ? "active" : ""} onClick={() => setGarment(item)}>{item.label}</button>)}</div></fieldset>
            <fieldset><legend>02. Материал</legend><div className="choice-row">{fabrics.map(item => <button key={item} className={fabric === item ? "active" : ""} onClick={() => setFabric(item)}>{item}</button>)}</div></fieldset>
            <fieldset><legend>03. Цвет</legend><div className="swatches">{colors.map(item => <button key={item.name} aria-label={item.name} title={item.name} className={color.name === item.name ? "active" : ""} style={{ "--swatch": item.value } as React.CSSProperties} onClick={() => setColor(item)} />)}</div></fieldset>
          </div>
          <div className="builder-preview" style={{ "--preview": color.value } as React.CSSProperties}>
            <div className="scan-ring ring-one" /><div className="scan-ring ring-two" />
            <GarmentPreview shape={garment.shape} color={color.value} />
            <span className="measure m1">талия — по аватару</span><span className="measure m2">длина — ваша</span>
            <div className="preview-caption"><span>Ваш выбор</span><b>{summary}</b></div>
          </div>
        </div>
      </section>

      <section className="hypotheses section-grid">
        <div className="section-label">Что проверяем дальше</div>
        <div className="hypothesis-head"><h2>Технология — не ценность сама по себе.</h2><p>Она должна снизить неопределённость перед заказом. Поэтому мы честно фиксируем ключевые риски продукта.</p></div>
        <div className="hypothesis-cards">
          <article><span>H1</span><h3>Доверие к 3D-сканированию</h3><p>Поймём, готовы ли пользователи заказать вещь без очного снятия мерок.</p></article>
          <article><span>H2</span><h3>Глубина персонализации</h3><p>Определим, сколько настроек дают свободу, а не перегружают выбор.</p></article>
          <article><span>H3</span><h3>Готовность платить</h3><p>Проверим, какую доплату аудитория принимает за точную посадку и дизайн.</p></article>
        </div>
      </section>

      <footer>
        <div className="footer-mark"><CherryMark /></div>
        <h2>Одежда больше не ограничена размерной сеткой.</h2>
        <a className="button primary" href="#constructor">Вернуться к конструктору <span>↑</span></a>
        <div className="footer-bottom"><span>CHERRY BERRY © 2026</span><span>Проект ФТМИ · ИТМО</span><span>Санкт-Петербург</span></div>
      </footer>
    </main>
  );
}
