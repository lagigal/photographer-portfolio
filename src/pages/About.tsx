import React from 'react';
import '../styles/About.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dashkensPhoto from '../assets/dashaPhoto.jpg';
import GoBackButton from '../components/GoBackButton';
import inst from '../assets/icons8-instagram.svg';
import tleg from '../assets/icons8-telegram.svg';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <h1 className="about__title">
        Вы можете задать мне любой интересующий Вас вопрос
        <br /> и&nbsp;договориться о&nbsp;сотрудничестве
        <br /> по&nbsp;ссылкам ниже{' '}
        <img src="https://res.cloudinary.com/deqblcqj7/image/upload/v1740951624/IMG_1933_kcrm0s.png" width={50} />
      </h1>
      <div className="about__buttons">
        <button className="about__button" onClick={() => window.open('https://t.me/dddarni', '_blank')} role="link">
          Tелеграм
          <img src={tleg} alt="Telegram Icon" />
        </button>
        <button
          className="about__button"
          onClick={() => window.open('https://www.instagram.com/dashkens/', '_blank')}
          role="link"
        >
          Инстаграм
          <img src={inst} alt="Instagram Icon" />
        </button>
      </div>
      <div className="about__image-box">
        <img className="about__image" src={dashkensPhoto} />
      </div>
      <Footer withButtons={false} />
    </>
  );
};

export default About;
