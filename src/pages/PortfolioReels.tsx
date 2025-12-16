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
          linkTo="/filtih"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765814827/photo_2025-12-15_19-06-49_mcw4k0.jpg"
          title="filtih"
        />
        <CaseCard
          linkTo="/my-self"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753443602/photo_2025-07-25_14-39-17_wdlids.jpg"
          title="творческие съемки"
        />
        <CaseCard
          linkTo="/ilios"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765817201/IMG_9393_h1c81z.jpg"
          title="ilios"
        />
        <CaseCard
          linkTo="/sansusi"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753437149/photo_2025-07-25_12-52-05_yyak7l.jpg"
          title="sansusi"
        />
        <CaseCard
          linkTo="/kedi-myasoeda"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765818400/IMG_9399_iyvwfd.jpg"
          title="кеды мясоеда"
        />
        <CaseCard
          linkTo="/more-prevention"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765816575/IMG_9390_rsc2xw.jpg"
          title="more prevention"
        />
        <CaseCard
          linkTo="/ambroperfume"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1753445597/photo_2025-07-25_15-12-36_kmnvu5.jpg"
          title="ambroperfume"
        />
        <CaseCard
          linkTo="/posolstvo-sochi"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765818093/IMG_9396_w2nvi9.jpg"
          title="posolstvo sochi"
        />
        <CaseCard
          linkTo="/love-stories"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765817732/IMG_9358_vcfb3l.jpg"
          title="love stories"
        />
        <CaseCard
          linkTo="/gorky-village-540"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765816400/photo_2025-12-15_19-32-57_jcpsub.jpg"
          title="gorky village"
        />
        <CaseCard
          linkTo="/tensegrity-pilates"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765818337/IMG_9398_olgxsv.jpg"
          title="tensegrity pilates"
        />
        <CaseCard
          linkTo="/original"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765817904/IMG_9395_bblro8.jpg"
          title="original"
        />
        <CaseCard
          linkTo="/forte-dei-mommy"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765816094/photo_2025-12-15_19-27-51_ewoere.jpg"
          title="forte dei mommy"
        />
        <CaseCard
          linkTo="/lamont"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765817561/IMG_9394_y6djek.jpg"
          title="lamont"
        />
        <CaseCard
          linkTo="/agoy-park"
          img="https://res.cloudinary.com/deqblcqj7/image/upload/v1765874846/IMG_9411_hepwcx.jpg"
          title="agoy park"
        />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioReels;
