import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GET_SINGLE_PRODUCT } from "../../utils/ApiRoutes";
import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";
import {
  AiOutlineMessage,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "../../styles/style";
import { PiCurrencyInr } from "react-icons/pi";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { ADD_LIKED_ROUTE,REMOVE_LIKED_ROUTE } from "../../utils/ApiRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setLikedProduct,setaddCart } from "../../reducer/Slices/authSlice";
import { ADD_TO_CART_ROUTE } from "../../utils/ApiRoutes";
import BuyProduct from "../BuyProduct/BuyProduct";

const SingleProduct = () => {
  const navigate = useNavigate();
  const {credentials}=useSelector((state)=> state.auth);
  const {token}=useSelector((state)=>state.auth)
  const dispatch=useDispatch();


  const [data, setdata] = useState(undefined);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [isOpen,setisOpen]=useState(false);
  const { _id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productId = _id;
        const { data } = await axios.post(GET_SINGLE_PRODUCT, { productId });
        setdata(data.getProduct);
        console.log(data.getProduct);
      } catch (error) {
        console.error("Error fetching single product:", error);
        // Handle the error or log it as needed
      }
    };

    fetchData(); // Call the function immediately
  }, [_id]);

  const handleWindow = () => {
    navigate("/");
  };
  const handleMessageSubmit = () => {};
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  const removeFromWishlistHandler =async () => {
    setClick(false)
    try {
      const userId=credentials._id;
      const productId=data._id;
      const response=await axios.post(REMOVE_LIKED_ROUTE,{productId,userId,token});
      const allProduct=response.data.updateLiked;

      if(response.data.success === true)
      {
           dispatch(setLikedProduct(allProduct))
      }
      else{
        setClick(!click)
        throw new Error();
      }

    } catch (error) {
      throw new Error(error);
      
    }
  };
  const addToWishlistHandler = async() => {
    if(click===false)
    {
      setClick(true);
      try {
        const userId=credentials._id;
        const productId=data._id;
        const response= await axios.post(ADD_LIKED_ROUTE,{productId,userId,token});
        console.log(response)
        const allProduct=response.data.allLikeProduct;
  
        if(response.data.success === true)
        {
             dispatch(setLikedProduct(allProduct))
        }
        else{
          setClick(!click)
          throw new Error();
        }
      } catch (error) {
        console.log(error)
        throw new Error(error);
      }
  
    }
   
  };

  const addToCartHandler = async () => {
    try {
      const userId=credentials._id;
      const productId=data._id;
      const response= await axios.post(ADD_TO_CART_ROUTE,{productId,userId,token});
      console.log(response)
      const allProduct=response.data.updatedCart;

      if(response.data.success === true)
      {
           dispatch(setaddCart(allProduct))
      }
      else{
        
        throw new Error();
      }
    } catch (error) {
      throw new Error(error);
    }

  };
  const buyHandler = () => {
      setisOpen(!isOpen);
  };

  return (
    <>
      {data && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] text-black z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll  800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              color="black"
              className="absolute right-3 top-3 z-50 cursor-pointer"
              onClick={handleWindow}
            />

            <div className=" w-full  flex 800px:flex mt-8">
              <div className="w-[40%] m-auto 800px:w-[50%]">
                <img src={`${data.productImage[0]}`} alt="" />
                <div className="flex">
                  <img
                    src={`${data.productImage[0]}`}
                    alt=""
                    className="w-[50px] h-[50px] mt-2 rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data?.sellerId}</h3>
                    <h5 className="pb-3 text-[15px]">
                      {data.TotalLiked} Likes
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>

              <div className="w-[45%] 800px:w-[50%]  pl-[5px] pr-[5px] gap-y-4 ">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.productName}
                </h1>
                <p className="text-black">{data.productDescription.text}</p>

                <div className="flex pt-3">
                  <p className="text-xl font-bold">Product Price : </p>
                  <span
                    className={`flex items-center justify-center  ${styles.price}`}
                  >
                    <PiCurrencyInr />
                    {data?.productPrice ? data.productPrice : null}
                  </span>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div className="flex items-center">
                    <button onClick={decrementCount}>
                      <FaSquareMinus size={30} />
                    </button>
                    <div className="bg-white block text-red-400 text-xl font-medium px-4 h-[48px] py-2">
                      {count}
                    </div>
                    <button onClick={incrementCount}>
                      <FaPlusSquare size={30} />
                    </button>
                  </div>
                  <div>
                    {click === true ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer "
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : ""}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        color="black"
                        className="cursor-pointer "
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`w-[80%] bg-black h-[50px] my-3  flex items-center justify-center rounded-xl cursor-pointer mt-6 `}
                  onClick={() => addToCartHandler()}
                >
                  <span className="text-[#fff] text-[4xl] flex">
                    Add to cart{" "}
                    <AiOutlineShoppingCart size={30} className="ml-1" />
                  </span>
                </div>
                <div
                  className={`w-[80%] bg-black h-[50px] my-3  flex items-center justify-center rounded-xl cursor-pointer mt-6 `}
                  onClick={buyHandler}
                >
                  <span className="text-[#fff] text-[4xl] flex">
                    Buy Now <PiCurrencyInr size={30} className="ml-1" />{" "}
                    {data.productPrice * count}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {
          isOpen && data && count &&      
             <BuyProduct setisOpen={setisOpen} data={data} count={count}/>
         
         }
        </div>
        
      )}
    </>
  );
};

export default SingleProduct;
