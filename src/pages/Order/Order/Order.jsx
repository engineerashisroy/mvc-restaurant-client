import React, { useState, useEffect } from "react";
import Cover from "../../Shared/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMenu from "../../../hooks/useMenu";
import CardItem from "../../../components/CardItem";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import OrderTab from "../../../components/OrderTab";

const Order = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data.menu);
  //       // console.log(data.menu);
  //     });
  // }, []);
  const menu = useMenu();
  // console.log(menu[0]);
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const desserts = menu[0]?.filter((item) => item.category === "dessert");
  const soup = menu[0]?.filter((item) => item.category === "soup");
  const salad = menu[0]?.filter((item) => item.category === "salad");
  const pizza = menu[0]?.filter((item) => item.category === "pizza");
  const drinks = menu[0]?.filter((item) => item.category === "drinks");
  // console.log(desserts);

  return (
    <div>
      <Cover
        image={coverImg}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      />
      <Helmet>
        <title>Order Food</title>
      </Helmet>
      <div className="pt-5 pb-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="container mx-auto">
            <TabList className="flex justify-center bg-yellow-400 space-x-4 cursor-pointer uppercase text-3xl py-4">
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
