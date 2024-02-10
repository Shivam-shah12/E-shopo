// import React, { useEffect } from "react";
// import { useSelector,useDispatch} from "react-redux";
// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { AiOutlineCamera, AiOutlineArrowRight } from "react-icons/ai";

// import { MdOutlineTrackChanges } from "react-icons/md";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import {AiFillDelete} from 'react-icons/ai'
// import styles from "../../styles/style";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import {BiUserCircle} from 'react-icons/bi'
// // AdminDashboard componennt
// import CreateProduct from "./Admin/CreateProduct.jsx";
// import AllProducts from "./Admin/AllProducts.jsx";
// import SoldProducts from "./Admin/SoldProducts.jsx";
// import { CHANGE_PASSWORD_USER_ROUTE,CHANGE_PASSWORD_SELLER_ROUTE } from "../../utils/ApiRoutes.js";
// import { setUserTypeAndCredentials, setUserAddress } from "../../reducer/Slices/authSlice.js";
// import { SAVE_ADDRESS } from "../../utils/ApiRoutes.js";
// import { setToken } from "../../reducer/Slices/authSlice.js";
// import { GET_LIKED_DETAILS,GET_CART_DETAILS,GET_BUYED_DETAILS } from "../../utils/ApiRoutes.js";
// import { FaPlus } from "react-icons/fa";

// const ProfileContent = ({ active }) => {
//  const userData=useSelector((state)=> state.auth.credentials);
//  const token=useSelector((state)=> state.auth.token);
//  const userType=useSelector((state)=> state.auth.userType)
//  const [userProfile,setUserProfile]=useState({});
 

//   const dispatch=useDispatch();  

  
//   useEffect(()=>{
//     if(userData && userType && token){
//       setUserProfile({
//         name:userData.name,
//         email:userData.email,
//         profileImage:userData.profileImage,
//         Id:userData && (userData._id)
//       })
      
//     }
//   },[userData,token,userType])
 
//   const handleImage = () => {};


//   return (
//     <div className="w-full relative bg-white min-h-screen">
//      {active === 1 && (
//      <>
//     <div className="flex flex-col justify-center w-full items-center">
//       <div className="relative mb-6">
//         {/* Instead of {BiUserCircle} --> i have to put Image here */}
//         <BiUserCircle  className="w-[150px] h-[150px] rounded-full object-cover"/>
//         <FaPlus size={30} color={"white"} className="absolute top-10 right-0"/>
//       </div>
    
    
//     <div className="w-full px-5 justify-center space-y-4 items-center">
//     <div className="w-[40%] 800px:w-[100%]  mx-auto">
//             <label className="block pb-2 font-bold text-xl">Id</label>
//             <input
//               type="text"
//               className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-1 800px:mb-0 text-white bg-black`}
//               required
//               value={userProfile?.Id}
//             />
//           </div>
    
//           <div className="w-[40%] 800px:w-[100%]  mx-auto">
//             <label className="block pb-2 font-bold text-xl">Full Name</label>
//             <input
//               type="text"
//               className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-4 800px:mb-0 text-white bg-black`}
//               required
//               value={userProfile?.name}
//             />
//           </div>
//           <div className="w-[40%] 800px:w-[100%]  mx-auto">
//             <label className="block pb-2 font-bold text-xl">Email Address</label>
//             <input
//               type="text"
//               className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-1 800px:mb-0 text-black`}
//               required
//               value={userProfile?.email}
//             />
//           </div> 
//     </div>
//     </div>
//         </>
//         )}

//        {
//         // order section
//         active === 2 && (
//           <div>
//             <ChangePassword />
//           </div>
//         )
//       }

//        {active === 3 && (
//         <div>
//           <Address />
//         </div>
//       )} 
     
//        {active === 4 && (
//         <div>
//           <BuyItems />
//         </div>
//       )}
//       {
//         active===5 &&(
//           <div>
//           <AdminDashboard/>
//           </div>
//         )
//       }
//       {
//         active === 6 && (
//           <div>
//             <LikedProduct/>
//           </div>
//         )
//       }
//       {
//         active===8 && (
//           <div>
//             <CartProduct/>
//           </div>
//         )
//       }
     

//     </div>
//   );
// };

// const ChangePassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmNewPassword, setConfirmPassword] = useState("");
//   const token = useSelector((state) => state.auth.token);
//   const userType = useSelector((state) => state.auth.userType);
//   const userData = useSelector((state) => state.auth.credentials);
//   const dispatch = useDispatch();

//   const ChangePasswordHandler = async (e) => {
//     e.preventDefault();
    
//     try {
//       if (newPassword !== confirmNewPassword) {
//         throw new Error("New Password and Confirm Password do not match.");
//       }

//       const oldPassword = userData.password;
//       const email = userData.email;

//       if (userType === "user") {
//         const response = await axios.post(CHANGE_PASSWORD_USER_ROUTE, {
//           email,
//           oldPassword,
//           newPassword,
//           confirmNewPassword,
//           token
//         });

//         if (response.data.success === true) {
//           userData.password = newPassword;
//           dispatch(setCredentials(userData)); // Assuming you have an action to update credentials
//           console.log(userData);
//         }
//       } else {
//         const response = await axios.post(CHANGE_PASSWORD_SELLER_ROUTE, {
//           email,
//           oldPassword,
//           newPassword,
//           confirmNewPassword,
//           token
//         });

//         if (response.data.success === true) {
//           userData.password = newPassword;
//           dispatch(setCredentials(userData)); // Assuming you have an action to update credentials
//           console.log(userData);
//         }
//       }
//     } catch (error) {
//       console.log("Error in ChangePasswordHandler: ", error.message);
//       // You can handle the error here, for example, show a message to the user.
//     }
//   };

//   return (
//     <div className="w-full h-screen">
//       <div className="flex-col w-[47%] mx-auto my-auto p-2 space-y-4">
//         <div className="w-[100%] 800px:w-[94%]">
//           <label className="block pb-2">New Password</label>
//           <input
//             type="password" // It's a password, so it should be of type 'password'
//             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//             required
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </div>
//         <div className="w-[100%] 800px:w-[94%]">
//           <label className="block pb-2">Confirm Password</label>
//           <input
//             type="password" // It's a password, so it should be of type 'password'
//             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//             required
//             value={confirmNewPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <div className="w-[100%] 800px:w-[94%]">
//           <button
//             className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] 
//                     rounded-[3px] mt-8 cursor-pointer`}
//             onClick={ChangePasswordHandler}
//           >
//             Change Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineCamera, AiOutlineArrowRight } from "react-icons/ai";

import { MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillDelete } from 'react-icons/ai'
import styles from "../../styles/style";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi'
// AdminDashboard componennt
import CreateProduct from "./Admin/CreateProduct.jsx";
import AllProducts from "./Admin/AllProducts.jsx";
import SoldProducts from "./Admin/SoldProducts.jsx";
import { CHANGE_PASSWORD_USER_ROUTE, CHANGE_PASSWORD_SELLER_ROUTE } from "../../utils/ApiRoutes.js";
import { setUserTypeAndCredentials, setUserAddress } from "../../reducer/Slices/authSlice.js";
import { SAVE_ADDRESS } from "../../utils/ApiRoutes.js";
import { setToken } from "../../reducer/Slices/authSlice.js";
import { GET_LIKED_DETAILS, GET_CART_DETAILS, GET_BUYED_DETAILS } from "../../utils/ApiRoutes.js";
import { FaPlus } from "react-icons/fa";

const ProfileContent = ({ active }) => {
  const userData = useSelector((state) => state.auth.credentials);
  const token = useSelector((state) => state.auth.token);
  const userType = useSelector((state) => state.auth.userType)
  const [userProfile, setUserProfile] = useState({});
  const [image,setImage]=useState(undefined)


  const dispatch = useDispatch();


  useEffect(() => {
    if (userData && userType && token) {
      setUserProfile({
        name: userData.name,
        email: userData.email,
        profileImage: userData.profileImage,
        Id: userData && (userData._id)
      })

    }
  }, [userData, token, userType])

  const handleImage = (e) => {
    try {
      
      
    } catch (error) {
      
    }

   };



  return (
    <div className="w-full relative bg-white min-h-screen text-black">
      {active === 1 && (
        <>
          <div className="flex flex-col justify-center w-full items-center">
            <div className="relative mb-6 cursor-pointer" id="photo-picker" onClick={handleImage}>
              {/* Instead of {BiUserCircle} --> i have to put Image here */}
              {
                userProfile.profileImage ? <img src={userProfile.profileImage} className="w-[150px] h-[150px] rounded-full object-cover" /> :<BiUserCircle className="w-[150px] h-[150px] rounded-full object-cover" />
              } 
              
            </div>


            <div className="w-full px-5 justify-center space-y-4 items-center">
              <div className="w-[40%] 800px:w-[100%]  mx-auto">
                <label className="block pb-2 font-bold text-xl">Id</label>
                <input
                  type="text"
                  className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-1 800px:mb-0 text-white bg-gray-800`}
                  required
                  value={userProfile?.Id}
                />
              </div>

              <div className="w-[40%] 800px:w-[100%]  mx-auto">
                <label className="block pb-2 font-bold text-xl">Full Name</label>
                <input
                  type="text"
                  className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-4 800px:mb-0 text-white bg-gray-800`}
                  required
                  value={userProfile?.name}
                />
              </div>
              <div className="w-[40%] 800px:w-[100%]  mx-auto">
                <label className="block pb-2 font-bold text-xl">Email Address</label>
                <input
                  type="text"
                  className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-1 800px:mb-0 text-white bg-gray-800`}
                  required
                  value={userProfile?.email}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {
        // order section
        active === 2 && (
          <div>
            <ChangePassword />
          </div>
        )
      }

      {active === 3 && (
        <div>
          <Address />
        </div>
      )}
      {active === 4 && (
        <div>
          <BuyItems />
        </div>
      )}
      {
        active === 5 && (
          <div>
            <AdminDashboard />
          </div>
        )
      }
      {
        active === 6 && (
          <div>
            <LikedProduct />
          </div>
        )
      }
      {
        active === 8 && (
          <div>
            <CartProduct />
          </div>
        )
      }


    </div>
  );
};

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmPassword] = useState("");
  const token = useSelector((state) => state.auth.token);
  const userType = useSelector((state) => state.auth.userType);
  const userData = useSelector((state) => state.auth.credentials);
  const dispatch = useDispatch();

  const ChangePasswordHandler = async (e) => {
    e.preventDefault();

    try {
      if (newPassword !== confirmNewPassword) {
        throw new Error("New Password and Confirm Password do not match.");
      }

      const email = userData.email;

      if (userType === "user") {
        const response = await axios.post(CHANGE_PASSWORD_USER_ROUTE, {
          email,
          newPassword,
          confirmNewPassword,
          token
        });
         console.log(response)
      } else {
        const response = await axios.post(CHANGE_PASSWORD_SELLER_ROUTE, {
          email,
          newPassword,
          confirmNewPassword,
          token
        });

        console.log(response)
      }
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      console.log("Error in ChangePasswordHandler: ", error.message);
      // You can handle the error here, for example, show a message to the user.
    }
  };

  return (
    <div className="w-full min-h-screen space-y-8 ">
      <div className="flex-col w-[47%] mx-auto my-auto p-2 space-y-4">
        <div className="w-[100%] 800px:w-[94%] my-8">
          <label className="block pb-2 font-bold text-xl">New Password</label>
          <input
            type="password" // It's a password, so it should be of type 'password'
            className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-1 800px:mb-0 text-white bg-gray-800`}
            required
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
        </div>

        <div className="w-[100%] 800px:w-[94%]">
          <label className="block pb-2 font-bold text-xl">Confirm New Password</label>
          <input
            type="password" // It's a password, so it should be of type 'password'
            className={`${styles.input} w-full py-4 text-2xl px-[10px] mb-1 800px:mb-0 text-white bg-gray-800`}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmNewPassword}
          />
        </div>

        <div className="flex justify-center w-full">
          <button
            className="py-2 px-4 rounded-lg bg-black text-white hover:bg-gray-800"
            onClick={ChangePasswordHandler}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

// Other components remain the sam


const Address = () => {
    const {userAddress,token,credentials}=useSelector((state)=> state.auth)
    const [addresses, setAddresses] = useState([]);
  
    const handleAddNewAddress = () => {
      setAddresses([...addresses, { address: '', phone: '', isSaved: false }]);
    };
  
    const handleAddressChange = (index, field, value) => {
      const updatedAddresses = [...addresses];
      updatedAddresses[index][field] = value;
      setAddresses(updatedAddresses);
    };
  
    const handleSaveAddress = (index) => {
      const updatedAddresses = [...addresses];
      updatedAddresses[index].isSaved = true;
      setAddresses(updatedAddresses);
    };
  
    const handleDeleteAddress = (index) => {
      const updatedAddresses = [...addresses];
      updatedAddresses.splice(index, 1);
      setAddresses(updatedAddresses);
    };
    useEffect(()=>{
      let arr=[]
      for(const address of userAddress)
      {
        arr.push(address);
      }
      setAddresses(arr);
    },[userAddress])

    const saveAddress=async()=>{
        try {
            const userId=credentials._id;
            const response=await axios.post(SAVE_ADDRESS,{addresses,token,userId})
            console.log(response)
            if(response.status===200)
            {
                // we assume we get an array from backend
                setUserAddress(response.address);
            }
            else{
                throw new Error("error in address component")
            }
        } catch (error) {
            console.log(error)
        }

    }
  
    return (
      <div className="w-full flex flex-col  relative space-y-3 ">
        <div className="flex w-[90%] justify-between py-3 mx-auto">
          <h2 className="font-bold text-[30px] my-auto inline-block w-[50%]">
            My Address
          </h2>
          <div>
            <div
              className={`${styles.button} bg-[white] mt-4 rounded h-11 `}
              onClick={handleAddNewAddress}
            >
              <span className="text-white text-2xl flex items-center rounded-[4px]">
                Add New<AiOutlineShoppingCart size={22} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
  
        {addresses.map((address, index) => (
          <div
            key={index}
            className="w-[90%] mx-auto py-3 text-black px-5 h-[70px] flex items-center justify-between"
          >
            <input
              type="text"
              value={address.address}
              className="border py-4 px-[10px] min-w-[20%] text-xl"
              onChange={(e) =>
                handleAddressChange(index, 'address', e.target.value)
              }
              placeholder="Address"
              disabled={address.isSaved}
            />
            <input
              type="text"
              value={address.phone}
              className="border py-4 px-[10px] min-w-[20%] text-xl"
              onChange={(e) => handleAddressChange(index, 'phone', e.target.value)}
              placeholder="Phone"
              disabled={address.isSaved}
            />
            {address.isSaved ? (
              <button onClick={() => handleDeleteAddress(index)}>Delete</button>
            ) : (
              <button onClick={() => handleSaveAddress(index)}>Save</button>
            )}
          </div>
        ))}

        <div className="flex w-[90%] justify-between py-3 mx-auto">
          <button
            className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] 
                    rounded-[3px] mt-8 cursor-pointer`}
            onClick={saveAddress}
          >
            save Address
          </button>
        </div>
      </div>
    );
  };
  




const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("create");
  
  const dispatch=useDispatch();
  const token=useSelector((state)=> state.auth.token)
  const userData=useSelector((state)=> state.auth.credentials);
  const [alldetails,setalldetails]=useState(undefined)
  const [soldDetails,setallDetails]=useState(undefined)

 
  function setAllProducts()
  {
    // we need to make array of object for seller product
    setActiveSection("allproduct")
  }
  

  function setAllSoldDetails()
  {
    // -->{ here we need to fetch allSellDetails }
    setActiveSection("soldproduct");
  }
  

  // Function to render the selected section
  const renderSection = () => {
    if (activeSection === "create") {
      return <CreateProduct />;
    } else if (activeSection === "allproduct") {
      return <AllProducts  Details={alldetails}/>;
    } else if (activeSection === "soldproduct") {
      return <SoldProducts Details={soldDetails}/>;
    }
  };

  return (
    <div className="bg-lightgray h-full flex flex-col items-center">
      {/* Navbar */}
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === "create" ? "bg-blue-500 text-white" : "bg-black text-white"
          }`}
          onClick={() => setActiveSection("create")}
        >
          Create
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === "allproduct" ? "bg-blue-500 text-white" : "bg-black text-white"
          } ml-4`}
          onClick={() => setAllProducts()}
        >
          All Products
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeSection === "soldproduct" ? "bg-blue-500 text-white" : "bg-black text-white"
          } ml-4`}
          onClick={() => setAllSoldDetails()}
        >
          Sold Products
        </button>
      </div>

      {/* Main Content Area */}
      <div className="mt-8 w-full flex flex-col items-center px-4">
        {renderSection()} {/* Render the selected section */}
      </div>
    </div>
  );
}



// ************ Later i will do ************
const BuyItems = () => {
  const {credentials,token}=useSelector((state)=> state.auth);
  const [buyDetails,setBuyDetails]=useState([]);
  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const userId=credentials._id;
      const {data}=await axios.post(GET_BUYED_DETAILS,{userId,token});
      console.log(data)
      if(data.success === true)
      {
        const {allBuyProduct}=data;
        setBuyDetails(allBuyProduct);
      }
      else{
        throw new Error();
      }
    } catch (error) {
      throw new Error(error);
    }
   }
   fetchData();
  },[]);
  return (
    <div className="p-4 flex justify-center">{
     buyDetails ? (
      <div className='w-[85%] min-h-screen flex  flex-col text-white '>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full  mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="py-8 text-xl">
                <th scope="col" class="px-6 py-3">
                    seller Id
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
                        Purchasing Date
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
        (buyDetails && buyDetails.length!== 0) ? (
          buyDetails.map((elem, index) => (
        <tbody className="text-lg">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-4">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {elem.sellerId}
                </th>
                <td class="px-6 py-4">
                    {elem._id}
                </td>
                <td class="px-6 py-4">
                    {elem.purchasingDate}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">info</a>
                </td>
            </tr>    
        </tbody>
  

          ))
        ) : (<div></div>)
        
      }
      </table>
        </div>
    </div>
     ) : (
      <p>No Buyed products available.</p>
    )
    }
    </div>
  );

  
};

const CartProduct=()=>{
  const {credentials,token}=useSelector((state)=> state.auth);
  console.log(token)
  const [cartDetails,setCartDetails]=useState([]);
  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const userId=credentials._id;
      const {data}=await axios.post(GET_CART_DETAILS,{userId,token});
      console.log(data)
      if(data.success === true)
      {
        const {products}=data;
        setCartDetails(products);
      }
      else{
        throw new Error();
      }
    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
   }
   fetchData();
  },[cartDetails,token]);
  return (
    <div className="p-4 flex justify-center">{
     cartDetails ? (
      <div className='w-[85%] min-h-screen flex  flex-col text-white '>
      <div class="relative  shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                       Product Id
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">info</span>
                </th>
            </tr>
        </thead>
      {
        (cartDetails && cartDetails.length!== 0) ? (
          cartDetails.map((elem, index) => (
        <tbody className="text-lg text-white">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="px-6 py-4">
                    {elem.productId}
                </td>

                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">info</a>
                </td>
            </tr>    
        </tbody>
  

          ))
        ) : (
          <div></div>
        )
        
      }
      </table>
        </div>
    </div>
     ) :  (
      <p>No  products available.</p>
    )
     
    }
    </div>
  );
}

const LikedProduct=()=>{
  const {credentials,token}=useSelector((state)=> state.auth);
  const [likedDetails,setLikedDetails]=useState([]);
  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const userId=credentials._id;
      const {data}=await axios.post(GET_LIKED_DETAILS,{userId,token});
      console.log(data)
      if(data.success === true)
      {
        const {products}=data;
        setLikedDetails(products);
      }
      else{
        throw new Error();
      }
    } catch (error) {
      throw new Error(error);
    }
   }
   fetchData();
  },[]);
  return (
    <div className="p-4 flex justify-center">{
      likedDetails ?  (
      <div className='w-[85%] min-h-screen flex  flex-col text-white '>
      <div class="relative w-full  overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                       Product Id
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">info</span>
                </th>
            </tr>
        </thead>
      {
        (likedDetails && likedDetails.length!== 0) ? (
          likedDetails.map((elem, index) => (
        <tbody className="text-lg text-white">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="px-6 py-4">
                    {elem.productId}
                </td>

                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">info</a>
                </td>
            </tr>    
        </tbody>
  

          ))
        ) : (<div></div>)
        
      }
      </table>
        </div>
    </div>
     ) :(
      <div className="w-full h-full">
         <span className="mx-auto">No  products available.</span>
      </div>
     
    )
    }
    </div>
  );
}










export default ProfileContent;
