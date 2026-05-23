import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";

const AddItem = () => {

  const [loading, setLoading] = useState(false);

  // ================= ADD ITEM =================
  const handleAddItem = async (e) => {

    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const recipe = form.recipe.value;
    const image = form.image.value;

    const menuItem = {
      name,
      category,
      price,
      recipe,
      image,
    };

    console.log(menuItem);

    try {

      // get token
      const token = localStorage.getItem(
        "access-token"
      );

      const response = await fetch(
        "http://localhost:8000/api/v1/menu",
        {
          method: "POST",

          headers: {
            "content-type": "application/json",

            // Bearer Token
            authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(menuItem),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        Swal.fire({
          icon: "success",
          title: "Item Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();

      } else {

        Swal.fire({
          icon: "error",
          title: data.message || "Failed to Add Item",
        });
      }

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e9f7ff] via-[#f5fbff] to-[#dff6ff] py-10 px-4">
      
      {/* Section Title */}
      <SectionTitle
        subHeading="---What's new?---"
        heading="ADD AN ITEM"
      />

      {/* Form Card */}
      <div className="max-w-3xl mx-auto mt-8">
        
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl border border-white p-6 md:p-10">
          
          <form
            onSubmit={handleAddItem}
            className="space-y-5"
          >
            
            {/* Recipe Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Name*
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter recipe name"
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all duration-300"
              />
            </div>

            {/* Category + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category*
                </label>

                <select
                  name="category"
                  defaultValue="default"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all duration-300"
                >
                  <option disabled value="default">
                    Select Category
                  </option>

                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price*
                </label>

                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all duration-300"
                />
              </div>
            </div>

            {/* Recipe Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Details*
              </label>

              <textarea
                rows="5"
                name="recipe"
                placeholder="Write recipe details..."
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 resize-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all duration-300"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL*
              </label>

              <input
                type="text"
                name="image"
                placeholder="Paste image URL"
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white font-semibold px-8 py-3 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                {
                  loading
                    ? "Adding..."
                    : "Add Item"
                }

                <FaUtensils className="group-hover:rotate-12 transition-all duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;