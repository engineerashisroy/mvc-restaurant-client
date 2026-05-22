import React from "react";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const AddItem = () => {
  return (
    <div className="w-full px-4 md:px-10 bg-gradient-to-br from-[#5cd6c8] via-[#33d2de] to-[#000000] min-h-screen">
      
      {/* Section Title */}
      <SectionTitle
        subHeading="---What's new?---"
        heading="ADD AN ITEM"
      />

      {/* Form Container */}
      <div className="max-w-4xl mx-auto  bg-[#f3f3f3] border-2 border-sky-500 shadow-2xl rounded-md p-6 md:p-10">
        
        <form className="space-y-6">
          
          {/* Recipe Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipe name*
            </label>

            <input
              type="text"
              placeholder="Recipe name"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
            />
          </div>

          {/* Category + Price */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category*
              </label>

              <select
                defaultValue="default"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
              >
                <option disabled value="default">
                  Category
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
                placeholder="Price"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipe Details*
            </label>

            <textarea
              rows="7"
              placeholder="Recipe Details"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#D1A054]"
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs bg-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#B58130] to-[#D1A054] hover:scale-105 transition-all duration-300 text-white font-bold px-8 py-3 rounded-md flex items-center gap-2 shadow-lg"
          >
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;