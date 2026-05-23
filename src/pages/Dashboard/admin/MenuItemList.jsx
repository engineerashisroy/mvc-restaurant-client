import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MenuItemList = () => {
  const [items, setItems] = useState([]);

  // fetch menu data
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  // delete item
  const handleDelete = async (id) => {
    console.log("delete id:", id);

    // your delete api here
  };

  // update item
  const handleUpdate = (item) => {
    console.log("update item:", item);

    // navigate update page here
  };

  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
      <table className="table w-full">
        {/* Table Head */}
        <thead className="bg-gradient-to-r from-[#5B6EF5] to-[#7B61FF] text-white">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Recipe</th>
            <th>Category</th>
            <th>Price</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {items
            ?.sort((a, b) => b._id.localeCompare(a._id))
            .map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {/* Index */}
                <td className="font-semibold">{index + 1}</td>

                {/* Image */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>

                {/* Name */}
                <td className="font-bold text-gray-700">{item.name}</td>

                {/* Recipe */}
                <td className="max-w-xs truncate text-sm text-gray-500">
                  {item.recipe}
                </td>

                {/* Category */}
                <td>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 uppercase">
                    {item.category}
                  </span>
                </td>

                {/* Price */}
                <td className="font-bold text-[#D1A054]">₹ {item.price}</td>

                {/* Update Button */}
                <td className="text-center">
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn btn-sm bg-[#5B6EF5] hover:bg-[#4c5de0] border-none text-white"
                  >
                    <FaEdit />
                  </button>
                </td>

                {/* Delete Button */}
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuItemList;
