import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@instructure/ui-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 my-16 md:my-24">
      {/* Structural Headers */}
      <SectionTitle
        heading="testimonials"
        subHeading="What Our Clients Say"
      />

      <div className="mt-10 md:mt-14 relative px-4 md:px-12">
        <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper testimonial-slider"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6 md:px-16 py-4">
                
                {/* Modernized Star Rating Container Wrapper */}
                <div className="mb-6 transform scale-110 md:scale-125 origin-center text-amber-500">
                  <Rating
                    label="Product rating"
                    size="small"
                    iconCount={5}
                    valueNow={review.rating}
                    valueMax={5}
                    margin="none"
                  />
                </div>

                {/* Aesthetic Graphic Quote Ornament */}
                <FaQuoteLeft className="text-4xl md:text-5xl text-amber-500/20 mb-6 shrink-0" />

                {/* Testimonial Detailed Content Paragraph */}
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-sans mb-6 italic">
                  "{review.details}"
                </p>

                {/* Client Name Typography Frame */}
                <h3 className="text-lg md:text-xl font-serif font-bold tracking-wide uppercase text-amber-500">
                  {review.name}
                </h3>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrow Override Utility Styling Injection */}
      <style jsx global>{`
        .testimonial-slider .swiper-button-next,
        .testimonial-slider .swiper-button-prev {
          color: #f59e0b !important; /* Premium Amber Arrow Accent tint */
          transform: scale(0.65);
          transition: all 0.2s ease;
        }
        .testimonial-slider .swiper-button-next:hover,
        .testimonial-slider .swiper-button-prev:hover {
          color: #d97706 !important;
          transform: scale(0.75);
        }
        @media (max-width: 640px) {
          .testimonial-slider .swiper-button-next,
          .testimonial-slider .swiper-button-prev {
            display: none !important; /* Emphasize native touch gestures over micro buttons on small mobile displays */
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;