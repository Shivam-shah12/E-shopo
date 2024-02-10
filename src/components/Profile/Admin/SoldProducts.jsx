import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { GET_SELL_DETAIL} from '../../../utils/ApiRoutes';

const SoldProducts = () => {
  const userData = useSelector((state) => state.auth.credentials);
  const token=useSelector((state)=> state.auth.token)
 // Use optional chaining here
  const [soldDetails, setsoldDetails] = useState([])
  useEffect(()=>{

    async function fetchData()
    {
      try {
        const sellerId = userData._id;
        if(sellerId)
        {
          const {data}=await axios.post(GET_SELL_DETAIL,{sellerId,token});
          // console.log(data)
          // console.log(allSellProductDetails)
          if(data)
          {
            const allData=data.allSellProductDetails;
            console.log(allData)
            setsoldDetails(allData);
          }
          else
          throw new Error();
       }
      } catch (error) {
        console.log(error)
      }

    }
    fetchData();
    
  
  },[userData,token])

  return (
    <div className="w-full p-4 flex justify-center">
      {
        soldDetails && (
          <div className='w-[85%] min-h-screen flex  flex-col text-white '>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    user Id
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                       Product Id
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Total Items
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
      {
        (soldDetails && soldDetails.length!== 0) ? (
          soldDetails.map((elem, index) => (
        <tbody className='text-lg text-white'>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {elem.userId}
                </th>
                <td class="px-6 py-4">
                    {elem.productId}
                </td>
                <td class="px-6 py-4">
                    {elem.totalItem}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">info</a>
                </td>
            </tr>    
        </tbody>
  

          ))
        ) : (
          <p>No sold products available.</p>
        )
        
      }
      </table>
        </div>
    </div>
        )
      }
    </div>
    
  );
};

export default SoldProducts;
