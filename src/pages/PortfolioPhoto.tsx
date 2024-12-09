import CaseCard from "../components/CaseCard"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/PortfolioPhoto.scss"

const PortfolioPhoto: React.FC = () => {
    return (<>
    <Header/>
    <div className="portfolioPhoto">
    <CaseCard
        linkTo="/anastasia"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733694723/5264796273674936488_jvekod.jpg"
        }
        title="anastasia"
      ></CaseCard>
      <CaseCard
        linkTo="/elizabeth"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695529/5264796273674936458_ujmlg3.jpg"
        }
        title="elizabeth"
      ></CaseCard>
      <CaseCard
        linkTo="/dmitry"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695259/5264796273674936469_uri3yd.jpg"
        }
        title="dmitry"
      ></CaseCard>
      <CaseCard
        linkTo="/emine"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695782/5264796273674936436_alu7jt.jpg"
        }
        title="emine"
      ></CaseCard>
      <CaseCard
        linkTo="/jewelryBrand"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733675436/5343563362543462558_ne23cw.jpg"
        }
        title="jewelry brand"
      ></CaseCard>
      <CaseCard
        linkTo="/tatiana"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733703713/9710bf31-cc61-4592-82ae-27549a69700e.png"
        }
        title="tatiana"
      ></CaseCard>
    </div>
    <Footer/>
    </>)
}

export default PortfolioPhoto