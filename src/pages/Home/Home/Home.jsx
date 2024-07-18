import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PupularMenu/PopularMenu";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ashis Roy Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
