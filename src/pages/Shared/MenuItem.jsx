import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { image, name, price, recipe, category } = item;
  return (
    <div>
      <div className="flex space-x-3 my-6">
        <div>
          <img
            src={image}
            alt="item images"
            className="w-[120px] "
            style={{ borderRadius: "0 200px 200px 200px" }}
          />
        </div>
        <div className="px-5">
          <h3 className="uppercase">{name}--------</h3>
          <p>{recipe}</p>
        </div>
        <div>
          <p className="text-yellow-500">{price}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
