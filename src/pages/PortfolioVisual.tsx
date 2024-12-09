import CaseCard from "../components/CaseCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/PortfolioPhoto.scss"

const PortfolioVisual: React.FC = () => {
    return (<>
    <Header/>
    <div className="portfolioPhoto">
    <CaseCard
        linkTo="/case1"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733731817/5267048073488624623_rkwoaw.jpg"
        }
        title="case 1"
      />
      <CaseCard
        linkTo="/case2"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733732524/5264796273674936428_rhlrda.jpg"
        }
        title="case 2"
      />
      <CaseCard
        linkTo="/case3"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733732558/5264796273674936427_tv96uw.jpg"
        }
        title="case 3"
      />
      <CaseCard
        linkTo="/case4"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733732618/5264796273674936426_jtmlgp.jpg"
        }
        title="case 4"
      />
      <CaseCard
        linkTo="/case5"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733732925/aadbe7ea-b790-4e55-9bdb-41b10bdccf8d.png"
        }
        title="case 5"
      />
      <CaseCard
        linkTo="/case6"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733733076/1b871b87-69ff-47a6-9661-8df9235e8abf.png"
        }
        title="case 6"
      />
      <CaseCard
        linkTo="/case7"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733733489/7fea3db5-a937-4b4f-8739-bda56ae034ea_dlkdse.jpg"
        }
        title="case 7"
      />
      <CaseCard
        linkTo="/case8"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733735959/509e7119-3cff-49d7-a95a-2e2f07006f53_yrgtnq.jpg"
        }
        title="case 8"
      />
      <CaseCard
        linkTo="/case9"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733734256/c96d7628-a992-48c3-9c76-a1c5e52b223d.png"
        }
        title="case 9"
      />
      <CaseCard
        linkTo="/case10"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733734363/5264796273674936386_yt55k9.jpg"
        }
        title="case 10"
      />
      <CaseCard
        linkTo="/case11"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733734499/5264796273674936390_i9rzwy.jpg"
        }
        title="case 11"
      />
       <CaseCard
        linkTo="/case12"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733736073/5264796273674936306_pere1z.jpg"
        }
        title="case 12"
      />
      <CaseCard
        linkTo="/case13"
        img={
          "https://res.cloudinary.com/deqblcqj7/image/upload/v1733736306/5264796273674936305_hvwxcw.jpg"
        }
        title="case 13"
      />
    </div>
    <Footer/>
    </>
    )
}

export default PortfolioVisual;