import React from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useSelector } from "react-redux";
import { BUY_PRODUCT_ROUTE } from "../../utils/ApiRoutes";

const BuyProduct = ({ setisOpen, data, count }) => {
 const {token,credentials}= useSelector((state)=>state.auth);
 const totalAmount=data.productPrice*count;
  const onClose = () => {
    setisOpen(false);
  };
  const buyHandler=async()=>{
    try {
       // {productId,productName,productPrice,productQuantity,productDescription,sellerId,userId}
       if(data)
       {
        const allData={productName:data?.productName,
                productPrice:data?.productPrice,
                productDescription:data?.productDescription,
                productQuantity:count,
                sellerId:data?.sellerId,
                userId:credentials._id
            };
            console.log(allData)
            const response=await axios.post(BUY_PRODUCT_ROUTE,{allData,token});
            onClose();
            console.log(response)
            if(response.status !== 200)
            {
                throw new Error();
            }


       }
       
    } catch (error) {
      console.log(error)
        throw new Error(error);
    }

  }

  return (
    <>
      <div className="fixed w-full backdrop-blur-lg h-screen  top-0 left-0 bg-[#00000030] text-black z-40 flex items-center justify-center">
        <div className="w-[40%] 800px:w-[60%] h-[55vh] overflow-y-scroll  800px:h-[75vh] bg-white rounded-md shadow-sm relative">
          <RxCross1
            size={30}
            color="black"
            className="absolute right-3 top-3 z-50 cursor-pointer"
            onClick={onClose}
          />
          <div className="w-full flex flex-col justify-between items-center space-y-2 pt-8">
            <div className=" relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      key
                    </th>
                    <th scope="col" className="px-6 py-3">
                      value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Product Name
                    </th>
                    <td className="px-6 py-4">{data.productName}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                     Each Product Price
                    </th>
                    <td className="px-6 py-4">{data.productPrice}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      product Quantity
                    </th>
                    <td className="px-6 py-4">{count}</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      sellerId
                    </th>
                    <td className="px-6 py-4">{data.sellerId}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className={`w-[60%] bg-black h-[50px] mt-4  flex items-center justify-center rounded-xl cursor-pointer mt-6 `}
              onClick={buyHandler}
            >
              <span className="text-[#fff] text-[4xl] flex">Pay Now {totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyProduct;
