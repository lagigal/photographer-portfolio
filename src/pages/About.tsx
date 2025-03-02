// (Страница "Обо мне"): Страница с биографией фотографа и контактной информацией.
import React from "react";
import "../styles/About.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dashkensContacts from "../assets/dashkensContacts.jpg";
import GoBackButton from "../components/GoBackButton";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <h1 className="about__title">
        Вы можете задать мне любой интересующий Вас вопрос
        <br /> и&nbsp;договориться о&nbsp;сотрудничестве
        <br /> по&nbsp;ссылкам ниже{" "}
        <img
          src="https://res.cloudinary.com/deqblcqj7/image/upload/v1740951624/IMG_1933_kcrm0s.png"
          width={50}
        />
      </h1>
      <div className="about__image-box">
        <img className="about__image" src={dashkensContacts} />
      </div>
      <Footer />
    </>
  );
};

export default About;
