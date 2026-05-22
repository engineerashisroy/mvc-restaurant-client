// OurMenu.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover";
import img from "../../../assets/contact/banner.jpg";
import dessertImg from "../../../assets/menu/dessert.jpeg";
import pizzaImg from "../../../assets/menu/pizza.jpg";
import saladImg from "../../../assets/menu/salad.jpg";
import soupImg from "../../../assets/menu/soup.jpg";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const menu = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="bg-white text-neutral-800 min-h-screen pb-1 font-sans selection:bg-[#D1A054]/20">
      <Helmet>
        <title>Our Menu | AS Restaurant</title>
      </Helmet>

      {/* Top Banner */}
      <Cover
        image={img}
        title="our menu"
        subTitle="would you like to try a dish?"
        description=""
      />

      {/* TODAY'S OFFER */}
      <section className="max-w-6xl mx-auto px-4 mt-2 mb-1 ">
        <SectionTitle heading="today's offer" subHeading="Don't Miss" />

        <MenuCategory
          item={offered}
          title="offered"
          subTitle=""
          description=""
        />
         
      </section>

      {/* DESSERT */}
      <section className="">
        <MenuCategory
          item={desserts}
          image={dessertImg}
          title="desserts"
          subTitle="Sweet Confections"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        />
         
      </section>

      {/* PIZZA */}
      <section className="">
        <MenuCategory
          item={pizza}
          image={pizzaImg}
          title="pizza"
          subTitle="Stone Baked Classics"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        />
      </section>

      {/* SALAD */}
      <section className="">
        <MenuCategory
          item={salad}
          image={saladImg}
          title="salad"
          subTitle="Fresh & Organic"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        />
      </section>

      {/* SOUP */}
      <section className="">
        <MenuCategory
          item={soup}
          image={soupImg}
          title="soup"
          subTitle="Warm Simmered Broths"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        />
      </section>
    </div>
  );
};

export default OurMenu;