// +- (Главная страница): Здесь ты будешь использовать компоненты, такие как Header, PortfolioPreview и Footer для организации контента.
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />      
      <Footer />
    </>
  );
};

export default Home;
