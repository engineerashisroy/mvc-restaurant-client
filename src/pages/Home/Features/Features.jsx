import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Features = () => {
  return (
    <div
      className="my-10 bg-fixed py-5 "
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>

      <div className="sm:flex mt-5">
        <div className="px-5">
          <img src={featuredImg} alt="" />
        </div>
        <div className="pl-5 items-center justify-center">
          <p className="text-3xl py-2">Aug 20, 2024</p>
          <h2 className="uppercase py-2">Where can i get some ?</h2>
          <p className="py-3 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            perferendis itaque obcaecati, commodi adipisci est at expedita
            nesciunt fugiat asperiores, corrupti ex. Mollitia aspernatur officia
            enim, odit sapiente perspiciatis excepturi error dolorem eligendi et
            molestias non delectus quis cupiditate ipsa? Accusamus atque cumque,
            qui odio animi voluptatem a quae dolore?
          </p>
          <button className="btn btn-outline btn-accent border-0 border-b-4 bg-yellow-400">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
