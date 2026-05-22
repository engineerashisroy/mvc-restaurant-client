import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden shadow-2xl">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={700}
        emulateTouch={true}
        className="restaurant-banner-carousel"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <li
              className={`inline-block mx-1.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isSelected ? "w-8 bg-amber-500" : "w-2.5 bg-white/50 hover:bg-white"
              }`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative h-[55vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh] w-full overflow-hidden group">
            {/* Dark Linear Gradient Overlay for beautiful contrast with Navbar */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 z-10 pointer-events-none" />

            {/* Premium Zooming Slider Image */}
            <img
              src={img}
              alt={`Restaurant Premium Dish ${idx + 1}`}
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[5000ms] ease-out"
            />

            {/* Decorative Figma Style Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 z-20" />
          </div>
        ))}
      </Carousel>

      {/* Tailwind Overrides for Core Component Styles */}
      <style jsx global>{`
        .restaurant-banner-carousel .thumbs-wrapper {
          margin: 0 !important;
          padding: 12px 0;
          background: #0f172a; /* matches deep slate footer */
          display: flex;
          justify-content: center;
        }
        .restaurant-banner-carousel .thumb {
          border: 2px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 6px;
          overflow: hidden;
          transition: all 0.2s ease;
          cursor: pointer;
          height: 50px;
          width: 70px !important;
          margin: 0 6px !important;
        }
        .restaurant-banner-carousel .thumb.selected,
        .restaurant-banner-carousel .thumb:hover {
          border: 2px solid #f59e0b !important; /* Amber border selection */
          transform: translateY(-2px);
        }
        .restaurant-banner-carousel .control-arrow {
          z-index: 20;
          width: 50px;
          height: 50px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 9999px;
          margin: 0 20px;
          background-color: rgba(15, 23, 42, 0.4) !important;
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: all 0.3s ease !important;
        }
        .restaurant-banner-carousel:hover .control-arrow {
          opacity: 1;
        }
        .restaurant-banner-carousel .control-arrow:hover {
          background-color: #f59e0b !important;
          color: #0f172a !important;
        }
        .restaurant-banner-carousel .control-dots {
          bottom: 90px !important;
          z-index: 20;
        }
        @media (max-width: 768px) {
          .restaurant-banner-carousel .control-dots {
            bottom: 80px !important;
          }
          .restaurant-banner-carousel .thumbs-wrapper {
            display: none !important; /* Hide thumbs on mobile for clean look */
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;