import { useNavigate } from 'react-router-dom';
import '../styles/GoBackButton.scss';

export const GoBackButton: React.FC = () => {
  const navigate = useNavigate();
  const goBack = (): void => {
    navigate(-1);
  };

  return (
    <button className="goBackButton" onClick={goBack}>
      &larr; Назад
    </button>
  );
};

export default GoBackButton;
