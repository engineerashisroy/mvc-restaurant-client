import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Features = () => {
  return (
    <div
      className="my-16 md:my-24 bg-fixed bg-cover bg-center relative py-16 md:py-24 text-white"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      {/* Semi-transparent Dark Mask Overlay for beautiful readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-0" />

      {/* Main Content Container - Elevated above the overlay via z-10 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          heading={"Featured Item"}
          subHeading={"Check it out"}
        />

        {/* Responsive Grid Structure */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-10 md:mt-12">
          
          {/* Image Wrapper Block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="overflow-hidden rounded-xl shadow-2xl border border-white/10 max-w-md md:max-w-full">
              <img 
                src={featuredImg} 
                alt="Featured Dish" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text & Call-To-Action Block */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left">
            <p className="text-xl md:text-2xl font-medium text-amber-400 mb-1">
              Aug 20, 2024
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-white mb-4">
              Where can i get some ?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              perferendis itaque obcaecati, commodi adipisci est at expedita
              nesciunt fugiat asperiores, corrupti ex. Mollitia aspernatur officia
              enim, odit sapiente perspiciatis excepturi error dolorem eligendi et
              molestias non delectus quis cupiditate ipsa? Accusamus atque cumque,
              qui odio animi voluptatem a quae dolore?
            </p>
            
            {/* Redesigned Premium Glassmorphic Border-Bottom Button */}
            <button className="px-6 py-3 rounded-xl uppercase tracking-wider text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 border-b-4 border-amber-700 hover:border-amber-800 transition-all duration-200 active:scale-95 shadow-lg shadow-amber-500/10">
              Order Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;