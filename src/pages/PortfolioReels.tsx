import CaseCard from '../components/CaseCard';
import Footer from '../components/Footer';
import GoBackButton from '../components/GoBackButton';
import Header from '../components/Header';
import '../styles/PortfolioPhoto.scss';

const PortfolioReels: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <div className="portfolioPhoto">
        <CaseCard
          linkTo="/sansusi"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753437149/photo_2025-07-25_12-52-05_yyak7l.jpg"
          title="sansusi"
        />
        <CaseCard
          linkTo="/my-self"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753443602/photo_2025-07-25_14-39-17_wdlids.jpg"
          title="творческие съемки"
        />
        <CaseCard
          linkTo="/kedi-myasoeda"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753438003/photo_2025-07-25_13-05-49_isaynk.jpg"
          title="кеды мясоеда"
        />
        <CaseCard
          linkTo="/filtih"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1741039740/2c7829ec-72ab-4047-9077-71a8ab6bf7be.png"
          title="filtih"
        />
        <CaseCard
          linkTo="/ambroperfume"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753445597/photo_2025-07-25_15-12-36_kmnvu5.jpg"
          title="ambroperfume"
        />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioReels;
