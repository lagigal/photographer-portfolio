// (Страница с услугами и ценами): Страница с подробным описанием услуг и их стоимости.
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Services.scss";
import GoBackButton from "../components/GoBackButton";
import TelegramButton from "../components/TelegramButton";

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <section className="services">
        <h1 className="services__title">
          Мобильная съемка / Визуальная концепция
        </h1>
        <div className="services__container">
          <div className="services-card">
            <h2 className="services-card__title">Мобильная съемка</h2>
            <ul className="services-card__list">
              <li>— Обсуждение идеи съёмки</li>
              <li>— Мудборд с локациями, образами, позами</li>
              <li>— Организация съемки полностью на мне</li>
              <li>— Съемка 1,5 часа</li>
              <li>
                — До 30 фотографий в обработке + исходники + маленькие видео без
                монтажа
              </li>
              <li>
                — За 1,5 часа съёмки можно снять 1-2 образа в нескольких
                локациях
              </li>
              <li>
                дополнительные расходы (аренда студий, работа моделей, реквизит
                и тд.) оплачиваются отдельно клиентом
              </li>
            </ul>
            {/* <p className="services-card__price">от 1 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Визуал под ключ</h2>
            <ul className="services-card__list">
              <li>— Бриф-анкета/созвон</li>
              <li>— Анализ существующего визуала</li>
              <li>— Распаковка личности/бренда</li>
              <li>
                — Создание визуальной концепции на основе выявленных смыслов и
                целей, подбор референсов
              </li>
              <li>— Мудборд с локациями, образами, позами</li>
              <li>— Организация и проведение съемки</li>
              <li>— Отбор, кадрирование, ретушь, цветокоррекция фотографий</li>
              <li>— Составление сетки визуала на 15 кадров</li>
              <li>— До 30 фото дополнительно для серий</li>
              <li>
                дополнительные расходы (аренда студий, работа моделей, реквизит
                и тд.) оплачиваются отдельно клиентом
              </li>
            </ul>
            {/* <p className="services-card__price">4 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Визуальная концепция</h2>
            <ul className="services-card__list">
              <li>— Бриф-анкета/созвон</li>
              <li>— Анализ существующего визуала</li>
              <li>— Распаковка личности/бренда</li>
              <li>
                — Составление сетки визуала на 15 кадров на основе выявленных
                смыслов и целей, подбор референсов
              </li>
              <li>
                дополнительно можно оформить аватарку, шапку профиля, актуальные
                и обложки на reels
              </li>
            </ul>
            {/* <p className="services-card__price">3 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Консультация</h2>
            <ul className="services-card__list">
              <li>
                — Любой ваш запрос на тему визуала, профиля, ведения инстаграма,
                обработки, оформления сторис и т.д.
              </li>
              <li>
                — Готовлю материал по вашему вопросу в виде презентации и
                созваниваемся по видео звонку
              </li>
              <li>
                — Делюсь лайфхаками, полезными приложениями, даю практические
                советы
              </li>
              <li>— Созвон до 1,5 часа</li>
              <li></li>
            </ul>
            {/* <p className="services-card__price">от 1 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
        </div>
        <h1 className="services__title">Reels</h1>
        <div className="services__container">
          <div className="services-card">
            <h2 className="services-card__title">Съемка Reels</h2>
            <ul className="services-card__list">
              <li>— Обсуждение идеи съёмки</li>
              <li>— Сценарий для каждого reels</li>
              <li>— Мудборд с локациями, образами, позами</li>
              <li>— Организация и проведение съемки</li>
              <li>— Отбор, кадрирование, ретушь, цветокоррекция видео</li>
              <li>— Монтаж снятых видео</li>
              <li>
                дополнительные расходы (аренда студий, работа моделей, реквизит
                и тд.) оплачиваются отдельно клиентом
              </li>
            </ul>
            {/* <p className="services-card__price">1 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
          <div className="services-card">
            <h2 className="services-card__title">Монтаж Reels</h2>
            <ul className="services-card__list">
              <li>— Формат: базовый, сложный, анимационный</li>
              <li>— Выбор лучших видео из всего исходного материала</li>
              <li>— Упорядочивание и создание сюжетной структуры видео</li>
              <li>— Работа со скоростью и звуковым оформлением</li>
              <li>— Цветокоррекция</li>
              <li>— Наложение футуажа, спецэффектов</li>
              <li>— Моушен-дизайн</li>
              <li></li>
            </ul>
            {/* <p className="services-card__price">1 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
          <div className="services-card">
            <h2 className="services-card__title">ИИ-контент</h2>
            <ul className="services-card__list">
              <li>— Нейрофотосессия</li>
              <li>— Контент для брендов/экспертов</li>
              <li>— Генерация видео с помощью ИИ</li>
              <li></li>
            </ul>
            {/* <p className="services-card__price">1 500 р/час</p> */}
            <TelegramButton text="Узнать цену" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
