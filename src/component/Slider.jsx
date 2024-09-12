import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const images = [
  {
    src: "https://teslalaptops.com.pk/wp-content/uploads/2024/04/Lenovo-Banner-scaled.webp",
    alt: "Laptop",
    link: "laptops",
  },
  {
    src: "https://storage-asset.msi.com/event/2023/CND/qd-oled/images/banner-pc.jpg",
    alt: "Monitor",
    link: "monitors",
  },
  {
    src: "https://mobilehublondon.com/wp-content/uploads/2021/04/6054db27ef426a74c6886907_RM-Web-Banner-iPhone-12-Pro-Max-LAUNCH-2048x563.jpg",
    alt: "Mobile",
    link: "mobiles",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate(); // For navigation between components

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (link) => {
    navigate(`/${link}`); // Navigate to respective component
  };

  return (
    <div
      className="relative w-full overflow-hidden mb-7"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full cursor-pointer"
            onClick={() => handleImageClick(image.link)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover md:h-64 lg:h-80"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
