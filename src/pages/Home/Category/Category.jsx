import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-16 md:my-24">
      {/* Centered Main Layout Header Wrapper */}
      <SectionTitle
        heading={"Oder Online"}
        subHeading={"From 11.00am to 10.00pm"}
      />
      
      {/* Optimized Configured Slider Frame */}
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 16 },
          480: { slidesPerView: 2.5, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 pb-14 food-category-slider"
      >
        <SwiperSlide>
          <div className="relative overflow-hidden rounded-xl shadow-lg group aspect-[3/4]">
            {/* Soft Linear Shadows to elevate the floating text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <img 
              src={slide1} 
              alt="Slide one" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <h3 className="absolute bottom-6 left-0 right-0 text-2xl md:text-3xl font-serif tracking-wide uppercase text-white text-center z-20 drop-shadow-md select-none">
              Salads
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden rounded-xl shadow-lg group aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <img 
              src={slide2} 
              alt="Slide one" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <h3 className="absolute bottom-6 left-0 right-0 text-2xl md:text-3xl font-serif tracking-wide uppercase text-white text-center z-20 drop-shadow-md select-none">
              Soups
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden rounded-xl shadow-lg group aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <img 
              src={slide3} 
              alt="Slide one" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <h3 className="absolute bottom-6 left-0 right-0 text-2xl md:text-3xl font-serif tracking-wide uppercase text-white text-center z-20 drop-shadow-md select-none">
              Pizzas
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden rounded-xl shadow-lg group aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <img 
              src={slide4} 
              alt="Slide one" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <h3 className="absolute bottom-6 left-0 right-0 text-2xl md:text-3xl font-serif tracking-wide uppercase text-white text-center z-20 drop-shadow-md select-none">
              Desserts
            </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden rounded-xl shadow-lg group aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <img 
              src={slide5} 
              alt="Slide one" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <h3 className="absolute bottom-6 left-0 right-0 text-2xl md:text-3xl font-serif tracking-wide uppercase text-white text-center z-20 drop-shadow-md select-none">
              Soups
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Global CSS Pagination Override Injection */}
      <style jsx global>{`
        .food-category-slider .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .food-category-slider .swiper-pagination-bullet-active {
          background: #f59e0b !important; /* Premium Amber target tint */
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </div>
  );
};

export default Category;