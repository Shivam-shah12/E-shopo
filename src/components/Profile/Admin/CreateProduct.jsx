import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_PRODUCT_SELLER } from "../../../utils/ApiRoutes";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.credentials);
  const token = useSelector((state) => state.auth.token);
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
    category: "",
    sellerId: userData._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post(CREATE_PRODUCT_SELLER, {...formData,token});
      console.log(response);
      setFormData({
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
        category: "",
        sellerId: userData._id,
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-mono text-white">
      <div className="w-[40%] bg-gray-800 p-8 rounded-md">
        <h2 className="text-center text-3xl font-bold mb-6">Create Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="border rounded px-4 py-4 border-none text-xl mt-2 text-black "
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="productDescription">Description:</label>
            <input
              type="text"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              className="border rounded px-4 py-4 text-xl mt-2 text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category:</label>
            <select
                className="appearance-none block text-black w-full px-3 py-4 text-xl border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                name="category"
                value={formData.category}
                onChange={(event) => {
                  setFormData({ ...formData, category: event.target.value });
              }}
                >
                <option className="text-xl" value="mobile"> Mobile </option>
                <option className="text-xl" value="laptop"> Laptop </option>
                <option className="text-xl" value="hair&care"> Hair & Care </option>
                <option className="text-xl" value="Garments"> Garments </option>
                <option className="text-xl" value="watch"> watch </option>
                <option className="text-xl" value="accessories"> accessories </option>
                <option className="text-xl" value="computer"> computer </option>

                </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="productPrice">Product Price:</label>
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              className="border rounded px-4 py-4 text-xl mt-2 text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="productImage">Product Image:</label>
            <input
              type="text"
              name="productImage"
              value={formData.productImage}
              onChange={handleChange}
              className="border rounded px-4 py-4 text-xl mt-2 text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="shopId">Shop ID:</label>
            <input
              type="text"
              name="shopId"
              value={formData.sellerId}
              className="border rounded px-4 py-4 text-xl mt-2 text-black"
              required
              readOnly
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold px-6 py-3 rounded mt-4"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
