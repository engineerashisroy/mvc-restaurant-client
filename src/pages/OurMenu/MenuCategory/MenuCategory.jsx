// MenuCategory.jsx
import React from "react";
import MenuItem from "../../Shared/MenuItem";
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";

const MenuCategory = ({
  item,
  title,
  image,
  subTitle,
  description,
  children,
}) => {
  return (
    <div className="w-full bg-red-600">
      {/* Cover Section */}
      {title && image && (
        <div className="w-full relative">
          <div className="relative">
            <Cover
              title={title}
              image={image}
              subTitle={subTitle}
              description={description}
            />
          </div>
        </div>
      )}
      {/* Order Button Inside Banner Card */}
      <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 z-20">
        <Link to={`/order/${title.trim()}`}>
          <button className="px-8 py-3 bg-[#1655dd] hover:bg-[#d30997] text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-2xl cursor-pointer border border-[#e7c07a]">
            Order Your Favorite Food
          </button>
        </Link>
      </div>

      {/* Food Items */}
      <div className="max-w-6xl mx-auto px-4   bg-yellow-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {item.map((menuItem) => (
            <MenuItem key={menuItem._id} item={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
