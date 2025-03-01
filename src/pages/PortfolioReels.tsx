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
          linkTo="/roza"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1733725389/c4bfd07a-beee-48dd-a5d5-78917faee4b2.png"
          title="roza"
        />
        <CaseCard
          linkTo="/my-self"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1733675432/5343563362543462552_lxk9n1.jpg"
          title="my self"
        />
        <CaseCard
        linkTo="/tatiana-reels"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733703713/9710bf31-cc61-4592-82ae-27549a69700e.png"
        }
        title="tatiana"
      />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioReels;
