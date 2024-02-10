import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GET_MY_PRODUCT } from '../../../utils/ApiRoutes';
import axios from 'axios';

const AllProducts = () => {
  // Use useState to set up the 'products' state
  const userData=useSelector((state)=> state.auth.credentials);
  const token=useSelector((state)=> state.auth.token);
  const [products,setProduct]=useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellerId = userData._id;
        const { data } = await axios.post(GET_MY_PRODUCT, { sellerId, token });
        setProduct(data.allProduct);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, [userData, token]);
  

  

  return (
    <div className="container mx-auto p-6 w-full relative">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Details</h1>
      <div className="w-full flex flex-col">
        {products.length !== 0 ? (products.map((product) => (
          <div className="container  p-6 w-[90%] ">
          <div className=" w-full ">
            <div className="w-full bg-white border rounded shadow-sm p-4 text-black flex flex-col">
            {/* <div className='w-full px-6'>
              <p className="text-lg font-bold mb-2">Image URLs:</p>
              {product.image_Url.map((image, index) => (
                <p key={index} className="mb-6">{image.url}</p>
              ))}
            </div> */}
             <div className='w-full px-6'>
              <p className="text-lg font-bold mb-2">ProductName:</p>
              <p className="mb-6">{product?.productName}</p>
              </div>

              <div className='w-full px-6'>
              <p className="text-lg font-bold mb-2">Description:</p>
              <p className="mb-6">{product?.productDescription?.text || product?.productDescription }</p>
              </div>
             
              <div className='w-full px-6'>
              <p className="text-lg font-bold mb-2">Category:</p>
              <p className="mb-6">{product?.category}</p>
              </div>
              
              <div className='w-full px-6'>
              <p className="text-lg font-bold mb-2">Original Price:</p>
              <p className="mb-6">Rs. {product?.productPrice}</p>
              </div>
              
              <div className='w-full px-6'>
               <p className="text-lg font-bold mb-2">productImage :</p>
              <p className="mb-6">Rs. {product?.productImage}</p>
              </div>
             
              <div className='w-full px-6'>
              <p className="text-lg font-bold mb-2">TotalLiked:</p>
              <p className="mb-6">{product?.TotalLiked}</p>
              </div>
             
            
            </div>
          </div>
        </div>
        ))
  ):
  <p> No Products Created by Seller</p>
        
        }
      </div>
    </div>
  );
};

export default AllProducts;
