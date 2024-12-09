import { useNavigate } from "react-router-dom";
import "../styles/Gallery.scss";
import Header from "./Header";
import Footer from "./Footer";

interface GalleryProps {
  images?: string[];
  videos?: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images, videos }) => {
  const navigate = useNavigate();
  const goBack = ():void => {
    navigate(-1)
  }

  return (
    <>
    <Header/>
      <div className="gallery">
        <button className="gallery__button" onClick={goBack}>	&larr; Назад</button>
        {images?.map((imgSrc, index) => (
          <img
            className="gallery__img"
            src={imgSrc}
            alt={`Photo ${index}`}
            key={imgSrc}
            loading="lazy"
          />
        ))}
        {videos?.map((vidSrc, index) => (
          <video controls width={300} key={index} poster={vidSrc.replace("/video/upload/", "/video/upload/so_0/").replace(".mp4", ".jpg")}>
            <source className="gallery__vid" src={vidSrc} />
          </video>
        ))}
      </div>
      <Footer/>
    </>
  );
};
