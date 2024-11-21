// (Страница с услугами и ценами): Страница с подробным описанием услуг и их стоимости.
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Services.scss";

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <section className="services">
        <h1 className="services__title">
          Мобильная съемка / Визуальная концепция
        </h1>
        <div className="services__container">
          <div className="services-card">
            <h2 className="services-card__title">Мобильная контент-съемка</h2>
            <ul className="services-card__list">
              <li>— Бриф-анкета/созвон</li>
              <li>— Мудборд с локациями, образами, позами</li>
              <li>— Мобильная съемка</li>
              <li>— До 30 фотографий в обработке + исходники</li>
            </ul>
            <p className="services-card__price">1 500 р/час</p>
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Визуал + контент-съемка</h2>
            <ul className="services-card__list">
              <li>— Бриф-анкета/созвон</li>
              <li>— Майнд-карта</li>
              <li>— Составление визуальной концепции 12/15 постов</li>
              <li>— Мудборд с локациями, образами, позами</li>
              <li>— Мобильная съемка</li>
              <li>— До 30 фотографий в обработке + исходники</li>
              <li>— Составление визуала</li>
            </ul>
            <p className="services-card__price">4 500 р/час</p>
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Визуальная концепция</h2>
            <ul className="services-card__list">
              <li>— Бриф-анкета/созвон</li>
              <li>— Майнд-карта</li>
              <li>— Составление визуальной концепции 12/15 постов</li>
            </ul>
            <p className="services-card__price">3 500 р/час</p>
          </div>
        </div>
        <h1 className="services__title">
          Reels
        </h1>
        <div className="services__container">
          <div className="services-card">
            <h2 className="services-card__title">Сценарий Reels</h2>
            <ul className="services-card__list">
              <li>— Какой-то текст и еще что-то где-то как-то</li>
              <li>— Какой-то текст</li>
              <li>— Какой-то текст</li>
              <li>— Какой-то текст</li>            </ul>
            <p className="services-card__price">1 500 р/час</p>
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Монтаж Reels</h2>
            <ul className="services-card__list">
              <li>— Какой-то текст</li>
              <li>— Какой-то текст</li>
              <li>— Какой-то текст</li>
              <li>— Какой-то текст</li>            </ul>
            <p className="services-card__price">1 500 р/час</p>
          </div>
          </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
