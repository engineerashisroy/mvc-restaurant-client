import React from "react";

const Cover = ({ image, title, subTitle, description }) => {
  return (
    <div className="relative w-full overflow-hidden shadow-xl">
      <div
        className="hero h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center transition-all duration-500"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Dynamic dark vignette layout overlay */}
        <div className="absolute inset-0  z-0" />
        
        {/* Main Content Card Wrapper */}
        <div className="hero-content text-center text-white relative z-10 w-full  px-4 md:px-10">
          
          {/* Elegant Frosted Glass Content Panel Box */}
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-6 py-12 md:px-20 md:py-16 rounded-xl shadow-2xl mx-auto w-full transition-all duration-300">
            
            {/* Main Section Header */}
            <h1 className="mb-3 text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest text-white drop-shadow-md">
              {title}
            </h1>
            
            {/* Secondary Subtitle Accent Line */}
            {subTitle && (
              <p className="mb-4 uppercase text-lg md:text-xl font-medium tracking-widest text-[#D1A054] drop-shadow-sm font-sans">
                {subTitle}
              </p>
            )}

            {/* Custom Aesthetic Spacer Accent Ornament */}
            <div className="w-16 h-[2px] bg-[#D1A054] mx-auto mb-6 rounded-full opacity-80" />
            
            {/* Detailed Description Context Block */}
            {description && (
              <p className="text-sm md:text-base text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-sans">
                {description}
              </p>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cover;