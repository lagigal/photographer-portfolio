import CaseCard from '../components/CaseCard';
import Footer from '../components/Footer';
import GoBackButton from '../components/GoBackButton';
import Header from '../components/Header';
import '../styles/PortfolioPhoto.scss';

const PortfolioVisual: React.FC = () => {
  return (
    <>
      <Header />
      <GoBackButton />
      <div className="portfolioPhoto">
        <CaseCard
          linkTo="/case1"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1733732524/5264796273674936428_rhlrda.jpg'}
          title="case 1"
        />
        <CaseCard
          linkTo="/case2"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1733732558/5264796273674936427_tv96uw.jpg'}
          title="case 2"
        />
        <CaseCard
          linkTo="/case3"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1733732618/5264796273674936426_jtmlgp.jpg'}
          title="case 3"
        />
        <CaseCard
          linkTo="/case4"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740865296/01fcb379-8fd7-4998-ade3-623019570a9e.png'}
          title="case 4"
        />
        <CaseCard
          linkTo="/case5"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857407/34c5e5eb-a29b-49a4-8c45-07e1caabcbfe.png'}
          title="case 5"
        />
        <CaseCard
          linkTo="/case6"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857487/349181bb-de56-4f06-96af-2b3b036a07f1.png'}
          title="case 6"
        />
        <CaseCard
          linkTo="/case7"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857577/7fef39a4-4403-4dc9-87d9-2d1252c366cf.png'}
          title="case 7"
        />
        <CaseCard
          linkTo="/case8"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857621/13ecf673-7fa1-4daf-adc2-90028ec0d622.png'}
          title="case 8"
        />
        <CaseCard
          linkTo="/case9"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857676/4b7d45c7-bf2c-4137-a1c7-1c13f242355b.png'}
          title="case 9"
        />
        <CaseCard
          linkTo="/case10"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857731/32d7facc-457c-4b60-bf7d-a0130f46b618.png'}
          title="case 10"
        />
        <CaseCard
          linkTo="/case11"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740857793/0cee4ff3-7b71-460d-b1ba-ee4593109abf.png'}
          title="case 11"
        />
        <CaseCard
          linkTo="/case12"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740858335/787ded55-e66d-4b39-ada5-758225a36b5d.png'}
          title="case 12"
        />
        <CaseCard
          linkTo="/case13"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740858417/a126d55c-8bc9-4aa9-808c-1e2c28f68c63.png'}
          title="case 13"
        />
        <CaseCard
          linkTo="/case14"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740858748/f6945dd0-1b2d-406f-acc1-75857a4dd1c0.png'}
          title="case 14"
        />
        <CaseCard
          linkTo="/case15"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740858819/16dcf43d-3408-431d-8a0e-d34849d7065f.png'}
          title="case 15"
        />
        <CaseCard
          linkTo="/case16"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1740858894/91528f22-9413-4da6-be06-7828a99f4168.png'}
          title="case 16"
        />
        <CaseCard
          linkTo="/case17"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1753440699/photo_2025-07-25_13-51-06_egp3su.png'}
          title="case 17"
        />
        <CaseCard
          linkTo="/case18"
          img={'https://res.cloudinary.com/deqblcqj7/image/upload/v1753440755/photo_2025-07-25_13-52-17_z8vl7m.jpg'}
          title="case 18"
        />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioVisual;
