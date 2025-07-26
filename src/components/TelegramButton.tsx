import tleg from '../assets/icons8-telegram.svg';
import '../styles/TelegramButton.scss';

interface TelegramButtonProps {
  text: string;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ text }) => {
  return (
    <button className="button" onClick={() => window.open('https://t.me/darbth', '_blank')} role="link">
      {text}
      <img src={tleg} alt="Telegram Icon" />
    </button>
  );
};

export default TelegramButton;
