import React from "react";
import MenuItem from "../../Shared/MenuItem";
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";

const MenuCategory = ({ item, title, image, subTitle, description }) => {
  // console.log(title);

  return (
    <div>
      {title && image && (
        <Cover
          title={title}
          image={image}
          subTitle={subTitle}
          description={description}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center pb-3">
        <Link to={`/order/${title}`}>
          <button className="btn   px-30 bg-green-400">
            Order You Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
