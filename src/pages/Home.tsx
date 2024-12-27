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
        </div>
        <h2 className="home__portfolio-title">Примеры моих работ</h2>
        <Slider />
        <h2 className="home__portfolio-title">Портфолио</h2>
        <div className="home__potfolio-types">
          <CaseCard
            linkTo="/portfolio/visual"
            title="Визуальные концепции"
            img={
              "https://res.cloudinary.com/deqblcqj7/image/upload/v1733736073/5264796273674936306_pere1z.jpg"
            }
            showButton
          />
          <CaseCard
            linkTo="/portfolio/mobile"
            title="Мобильная съемка"
            img={
              "https://res.cloudinary.com/deqblcqj7/image/upload/v1733675391/5343563362543462563_e4ial7.jpg"
            }
            showButton
          />
          <CaseCard
            linkTo="/portfolio/reels"
            title="Рилсмейкер"
            img={
              "https://res.cloudinary.com/deqblcqj7/image/upload/v1735240190/IMG_7428_ub2dse.jpg"
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
