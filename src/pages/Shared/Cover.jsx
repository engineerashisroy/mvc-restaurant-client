import React from "react";

const Cover = ({ image, title, subTitle, description }) => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase text-3xl">{subTitle}</p>
            <p className="mb-5  text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
