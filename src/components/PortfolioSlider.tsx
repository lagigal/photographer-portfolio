import React, { useState, useEffect, useRef } from "react";
import "../styles/Slider.scss";

const images = [
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733694514/5264796273674936505_fconxj.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1740864467/photo_6_2025-03-02_00-27-31_w3o8kt.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1740862521/df744cbc-9ef3-49aa-af80-302d349e50fd.png",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1740861364/13882dc3-dd2d-4f19-8976-8550a44ef7dd.png",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1740863855/photo_1_2025-03-02_00-16-58_nbkx2j.jpg",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1740862675/566d5e28-8ff7-40d0-9deb-dd60605d8fea.png",
  "https://res.cloudinary.com/deqblcqj7/image/upload/v1733675391/5343563362543462563_e4ial7.jpg",
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
