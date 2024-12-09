// компоенент для карточки в портфолио,
//в который должна передаваться ссылка на роут, по которому будет открываться галерея с конкретным кейсом(человеком)

import { Link } from "react-router-dom";
import "../styles/CaseCard.scss";

interface CaseCardProps {
  linkTo: string;
  img: string;
  title: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ linkTo, img, title }) => {
  return (
    <>
      <Link to={linkTo} className="caseCard">
        <div>
          <img className="caseCard__img" src={img} alt={title} />
          <p className="caseCard__title">{title}</p>
        </div>
      </Link>
    </>
  );
};

export default CaseCard;
