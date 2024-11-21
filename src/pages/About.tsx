// (Страница "Обо мне"): Страница с биографией фотографа и контактной информацией.
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dashaContacts from '../assets/dashaContacts.jpg'
import '../styles/About.scss'

const About: React.FC = () => {
  return (<>
    <Header />
    <h1 className='about__title'>Вы можете задать мне любой интересующий Вас вопрос<br/> и&nbsp;договориться о&nbsp;сотрудничестве<br/> по&nbsp;ссылкам ниже&#128140;</h1>
    <div className='about__image-box'>
    <img className="about__image" src={dashaContacts} />
    </div>
    <Footer />
  </>
  );
};

export default About;
