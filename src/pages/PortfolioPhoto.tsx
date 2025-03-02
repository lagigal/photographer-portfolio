import CaseCard from "../components/CaseCard";
import Footer from "../components/Footer";
import GoBackButton from "../components/GoBackButton";
import Header from "../components/Header";
import "../styles/PortfolioPhoto.scss";

const PortfolioPhoto: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <div className="portfolioPhoto">
        <CaseCard
          linkTo="/anastasia"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1733694525/5264796273674936506_zpxoer.jpg"
          }
          title="anastasia p.1"
        />
        <CaseCard
          linkTo="/anastasia2"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1740862283/4140ff87-b227-4cde-a24f-58d931c670f1.png"
          }
          title="anastasia p.2"
        />
        <CaseCard
          linkTo="/ekaterina"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1740863888/photo_8_2025-03-02_00-16-58_xgzhca.jpg"
          }
          title="ekaterina"
        />
        <CaseCard
          linkTo="/elizabeth"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695515/5264796273674936453_z8kvrp.jpg"
          }
          title="elizabeth"
        />
        <CaseCard
          linkTo="/dmitry"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695259/5264796273674936469_uri3yd.jpg"
          }
          title="dmitry"
        />
        <CaseCard
          linkTo="/emine"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695782/5264796273674936436_alu7jt.jpg"
          }
          title="emine"
        />
        <CaseCard
          linkTo="/jewelryBrand"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1740861720/ec66232e-bd5b-481c-8924-4c75077cb37e.png"
          }
          title="jewelry brand"
        />
        <CaseCard
          linkTo="/tatiana"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1733703713/9710bf31-cc61-4592-82ae-27549a69700e.png"
          }
          title="tatiana"
        />
        <CaseCard
          linkTo="/cosmetology"
          img={
            "https://res.cloudinary.com/deqblcqj7/image/upload/v1740864791/photo_4_2025-03-02_00-32-48_henyxx.jpg"
          }
          title="cosmetology"
        />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPhoto;
