import "../styles/Gallery.scss";
import Header from "./Header";
import Footer from "./Footer";
import GoBackButton from "./GoBackButton";
import { optimizeUrl } from "../utils";

interface GalleryProps {
  images?: string[];
  videos?: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images, videos }) => {
  return (
    <>
      <Header />
      <div className="gallery">
        <GoBackButton />
        {images?.map((imgSrc, index) => (
          <img
            className="gallery__img"
            src={optimizeUrl(imgSrc)}
            alt={`Photo ${index}`}
            key={imgSrc}
            loading="lazy"
          />
        ))}
        {videos?.map((vidSrc, index) => (
          <video
            controls
            width={300}
            key={index}
            poster={vidSrc
              .replace("/video/upload/", "/video/upload/so_0/")
              .replace(".mp4", ".jpg")}
          >
            <source className="gallery__vid" src={vidSrc} />
          </video>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
