// Этот компонент не используется тк рилс порфолио это только работы Даши,
// но в будущем можно будет поменять путь в Home на нужный(он еще остался в роутинге) и все заработает
import CaseCard from "../components/CaseCard";
import Footer from "../components/Footer";
import GoBackButton from "../components/GoBackButton";
import Header from "../components/Header";
import "../styles/PortfolioPhoto.scss";

const PortfolioReels: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <div className="portfolioPhoto">
        <CaseCard
          linkTo="/my-self"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1741039919/4209d979-3c87-453c-9e45-02238b1b26dd.png"
          title="dashkens"
        />
        <CaseCard
          linkTo="/filtih"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1741039740/2c7829ec-72ab-4047-9077-71a8ab6bf7be.png"
          title="filtih"
        />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioReels;
