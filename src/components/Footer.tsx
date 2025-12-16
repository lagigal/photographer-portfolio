import { useEffect, useRef } from 'react';
import '../styles/Footer.scss';
import inst from '../assets/icons8-instagram.svg';
import tleg from '../assets/icons8-telegram.svg';

interface FooterProps {
  withButtons?: boolean;
}

const Footer: React.FC<FooterProps> = ({ withButtons = true }) => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.classList.add('footer--visible');
    }
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__title-box">
        <h2 className="footer__title">dashkens </h2>
        <h2 className="footer__title">Крым | Симферополь</h2>
      </div>
      {withButtons && (
        <div className="footer__buttons">
          <button className="footer__button" onClick={() => window.open('https://t.me/darbth', '_blank')} role="link">
            Договориться о съемке
            <img src={tleg} alt="Telegram Icon" />
          </button>
          <button
            className="footer__button"
            onClick={() => window.open('https://www.instagram.com/dashkens/', '_blank')}
            role="link"
          >
            Подписаться
            <img src={inst} alt="Instagram Icon" />
          </button>
        </div>
      )}
      <h3 className="footer__description">Все материалы данного сайта являются объектами авторского права</h3>
    </footer>
  );
};

export default Footer;
