import React, { useState, useEffect, useRef } from "react";
import "../styles/Slider.scss";

const images = [
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733694723/5264796273674936488_jvekod.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733694643/5264796273674936483_yih6hy.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733694621/5264796273674936487_vxlgxd.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695518/5264796273674936452_jdn9q6.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695514/5264796273674936451_kilpd5.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695778/5264796273674936439_xj30zy.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733675436/5343563362543462558_ne23cw.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733675433/5343563362543462553_n7w66m.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733675310/5348243751614669714_eeytst.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733695259/5264796273674936469_uri3yd.jpg",
];

const CustomSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  // Автоматическая прокрутка каждые 5 секунд
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay(); // Очищаем предыдущий таймер
    timeoutRef.current = window.setTimeout(() => {
      handleNext();
    }, 5000); // Интервал в миллисекундах
  };

  const stopAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePrev = () => {
    setCurrentIndex(getPrevIndex());
  };

  const handleNext = () => {
    setCurrentIndex(getNextIndex());
  };

  return (
    <div
      className="custom-slider"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Кнопки переключения */}
      <button
        className="custom-slider__button custom-slider__button--prev"
        onClick={handlePrev}
      >
        &#10094; {/* Левая стрелка */}
      </button>

      <div className="custom-slider__content">
        {images.map((image, index) => {
          // Рассчитываем класс для текущего слайда
          const slideClass =
            index === currentIndex
              ? "custom-slider__slide--active"
              : index === getPrevIndex()
              ? "custom-slider__slide--prev"
              : index === getNextIndex()
              ? "custom-slider__slide--next"
              : "";

          return (
            <div key={index} className={`custom-slider__slide ${slideClass}`}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>

      <button
        className="custom-slider__button custom-slider__button--next"
        onClick={handleNext}
      >
        &#10095; {/* Правая стрелка */}
      </button>

      {/* Индикаторы */}
      <div className="custom-slider__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`custom-slider__indicator ${
              index === currentIndex ? "custom-slider__indicator--active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
