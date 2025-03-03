// +- (Главная страница): Здесь ты будешь использовать компоненты, такие как Header, PortfolioPreview и Footer для организации контента.
import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/PortfolioSlider";
import CaseCard from "../components/CaseCard";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__title-box">
          <h1 className="home__title">Дарья Никитенко</h1>
          <p className="home__title-sub">content-creator | photographer</p>
          <p className="home__title-sub">
            Я @dashkens – креатор, визуализатор, рилсмейкер <br />
            занимаюсь созданием креативного, уникального контента для брендов и
            личных блогов, создаю визуалы, продюсирую съёмки и снимаю рилсы.{" "}
            <br />В этой сфере я около 3-х лет, постоянно развиваюсь и обучаюсь
            новому. Буду рада поработать с вами {`<3`}
          </p>
        </div>
        <h2 className="home__portfolio-title">Примеры моих работ</h2>
        <Slider />
        <h2 className="home__portfolio-title">Портфолио</h2>
        <div className="home__potfolio-types">
          <CaseCard
            linkTo="/portfolio/visual"
            title="Визуальные концепции"
            img={
              "https://res.cloudinary.com/deqblcqj7/image/upload/v1740859846/fb2f996f-f1c6-432b-8e4c-e010b50cc092.png"
            }
            showButton
          />
          <CaseCard
            linkTo="/portfolio/mobile"
            title="Мобильная съемка"
            img={
              "https://res.cloudinary.com/deqblcqj7/image/upload/v1740860103/d2a216c0-cede-4233-b663-0b555468966f.png"
            }
            showButton
          />
          <CaseCard
            linkTo="/portfolio/reels"
            title="Видеосъемка и монтаж"
            img={
              "https://res.cloudinary.com/deqblcqj7/image/upload/v1740860161/6d7a13e3-4867-45f7-949c-8425783700e9.png"
            }
            showButton
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
