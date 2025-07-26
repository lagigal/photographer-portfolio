import { Link } from 'react-router-dom';
import '../styles/CaseCard.scss';
import { optimizeUrl } from '../utils';

interface CaseCardProps {
  linkTo: string;
  img: string;
  title: string;
  showButton?: boolean;
}

const CaseCard: React.FC<CaseCardProps> = ({ linkTo, img, title, showButton = false }) => {
  return (
    <Link to={linkTo} className="caseCard__link">
      <div className="caseCard">
        <div>
          <img className="caseCard__img" src={optimizeUrl(img)} alt={title} />
          <p className="caseCard__title">{title}</p>
        </div>
        {showButton && <button className="caseCard__button">Смотреть больше</button>}
      </div>
    </Link>
  );
};

export default CaseCard;
