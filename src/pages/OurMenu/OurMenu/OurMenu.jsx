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
  // console.log(desserts);
  return (
    <div>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>

      <Cover
        image={img}
        title="our menu"
        subTitle="would you like to try a dish?"
        description=""
      ></Cover>
      <SectionTitle
        heading="today's offer"
        subHeading="Don't Miss"
      ></SectionTitle>
      <MenuCategory
        item={offered}
        // image={" "}
        title={"offered "}
        subTitle={"offered"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        }
      ></MenuCategory>
      <MenuCategory
        item={desserts}
        image={dessertImg}
        title={"desserts"}
        subTitle={""}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        }
      ></MenuCategory>

      <MenuCategory
        item={pizza}
        image={pizzaImg}
        title={"pizza"}
        subTitle={""}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        }
      ></MenuCategory>

      <MenuCategory
        item={salad}
        image={saladImg}
        title={"salad"}
        subTitle={""}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        }
      ></MenuCategory>

      <MenuCategory
        item={soup}
        image={soupImg}
        title={"soup"}
        subTitle={""}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla. Iusto inventore reiciendis quaerat fugiat harum nisi cumque ullam illo!"
        }
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;
