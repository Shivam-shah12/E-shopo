import React, { useEffect, useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import "../../index.css"
import { useProductContext } from "../context/product_context";


let aosDelay = [0, 200, 400, 600, 800];

const Products = () => {
  const navigate = useNavigate();
  
  const [productsData, setProductsData] = useState([]);
  const {products} = useProductContext();

  useEffect(() => {
    // Ensure products is an array and not empty
    if (Array.isArray(products) && products.length > 0) {
      // Create a shallow copy of the products array before sorting
      const copiedProducts = [...products];
       console.log(copiedProducts)
      // Sort the copiedProducts array by TotalLiked
      const sortedProducts = copiedProducts.sort(
        (a, b) => a.TotalLiked - b.TotalLiked
      );
      
      // Get the top five products
      let topFive = sortedProducts.slice(-5);
      

      // Update the state with the top five products
      setProductsData(topFive.reverse());
    }
  }, [products]);
  console.log(productsData);

 
  return (
    <div className="mt-14 mb-12 font-mono " id="services">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto text-4xl py-2">
          <p data-aos="fade-up" className="text-2xl text-primary">
            Top Selling Products for you
          </p>
          <h1  className="text-4xl font-bold">
            Products
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {productsData.map((data, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={aosDelay[i]}
                key={data.id}
                className="space-y-3 "
                onClick={()=> navigate(`/singleProduct/${data.id}`)}
              >
                <img
                  src={data.image || data.image[0]}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md blur-image blur-image:hover"
                />
                <div>
                  <h3 className="font-semibold">{data.name}</h3>
                  <div className="flex items-center gap-1">
                    <FaHeart className="text-red-400" />
                    <span className="ml-1">{data.TotalLiked}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
          <NavLink to="/products">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
