import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import {  HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserTypeAndCredentials } from "../../reducer/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useState } from "react";


const ProfileSidebar = ({ setActive, active }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

 

  const userType=useSelector((state)=> state.auth.userType);

  console.log(userType)
 const logoutHandler=()=>{
  console.log("it working logut")
  dispatch(setUserTypeAndCredentials({undefined,undefined}))
  dispatch(setToken(undefined))
  navigate("/")
 
}

  return (
    <div className="w-fit fixed bg-black shadow-sm rounded-[10px] p-4 pt-8">
      {/* Common links for both users and sellers */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 1 ? "text-[red]" : ""} 800px:block hidden`}
        >
          Profile
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${active ===2 ? "text-[red]" : ""} 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <TbAddressBook size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 3 ? "text-[red]" : ""} 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {/* Conditional rendering for seller-specific links */}
      {userType === "user" && (
        <>
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(4)}
          >
            <HiOutlineShoppingBag size={20} color={active === 4 ? "red" : ""} />
            <span
              className={`pl-3 ${active === 4 ? "text-[red]" : ""} 800px:block hidden`}
            >
              Buy Items
            </span>
          </div>

          {/* <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(3)}
          >
            <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
            <span
              className={`pl-3 ${active === 3 ? "text-[red]" : ""} 800px:block hidden`}
            >
              Refunds
            </span>
          </div> */}
        </>
      )}

      {
        userType ==="seller" && (
          <>
            <div
              className="flex items-center cursor-pointer w-full mb-8"
              onClick={() => setActive(5)}
            >
              <MdOutlineAdminPanelSettings size={20} color={active === 5 ? "red" : ""} />
              <span
                className={`pl-3 ${active === 5 ? "text-[red]" : ""} 800px:block hidden`}
              >
                Admin Dashboard
              </span>
            </div>
          </>
        )
      }
      {
        userType ==="user" && (
          <>
            <div
              className="flex items-center cursor-pointer w-full mb-8"
              onClick={() => setActive(6)}
            >
              <FaHeart size={20} color={active === 6 ? "red" : "white"} />
              <span
                className={`pl-3 ${active === 6 ? "text-[red]" : ""} 800px:block hidden`}
              >
                Liked
              </span>
            </div>
          </>
        )
      }
      {
        userType ==="user" && (
          <>
            <div
              className="flex items-center cursor-pointer w-full mb-8"
              onClick={() => setActive(8)}
            >
              <IoCart size={20} color={active === 8 ? "red" : "white"} />
              <span
                className={`pl-3 ${active === 8 ? "text-[red]" : ""} 800px:block hidden`}
              >
                Cart
              </span>
            </div>
          </>
        )
      }

      {/* Common Logout link for both users and sellers */}
      <div
              className="flex items-center cursor-pointer w-full mb-8"
              onClick={() => {setActive(7);logoutHandler()}}
            >
              <AiOutlineLogin size={20} color={active === 7 ? "red" : ""} />
              <span
                className={`pl-3 ${active === 7 ? "text-[red]" : ""} 800px:block hidden`}
              >
                Logout
              </span>
            </div>
      
    </div>
  );
};

export default ProfileSidebar;

