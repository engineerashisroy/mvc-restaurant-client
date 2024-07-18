import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto md:w-4/12 mb-3 my-8">
      <p className="text-yellow-600 py-3">---{subHeading}---</p>
      <h3 className="text-4xl uppercase py-3 font-medium border-y-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
