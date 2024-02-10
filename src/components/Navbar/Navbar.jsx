import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useNavigate } from 'react-router-dom';
import {CgProfile} from "react-icons/cg"
import styles from "../../styles/style";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Liked Products",
    link: "/#services",
  },
  {
    id: 3,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "all Products",
    link: "/products",
  },
  {
    id: 2,
    name: "Garments",
    link: "/#bestSelling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#bestSelling",
  },
];

const Navbar = ({isProfile}) => {
  const navigate=useNavigate();
  const token=useSelector((state)=> state.auth.token)
  useEffect(()=>{
    console.log(token)
  },[token])
  const handleOrderPopup=()=>{

  }

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-4 h-[55px]">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-4xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              E-shop
            </a>
          </div>
  
            <div className="w-fit flex items-center gap-4 text-2xl font-mono">
              {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
            {
              token ? (
                <Link to="/profile">
                   <div className="w-[90px] cursor-pointer tracking-2xl px-4 py-4 bg-black text-white flex items-center justify-center  rounded-md " onClick={()=> navigate("/login")}>
                 Profile
                </div>
                  </Link>
              ):(
                <div className="flex  w-fit gap-4">
                <div className="w-[90px] cursor-pointer tracking-2xl px-4 py-4 bg-black text-white flex items-center justify-center  rounded-md " onClick={()=> navigate("/login")}>
                 Login
                </div>

                <div className="w-[90px] cursor-pointer tracking-2xl px-4 py-4 bg-black text-white  rounded-md flex items-center justify-center  " onClick={()=> navigate("/signup")}>
                 Signup
                </div>
                </div>
              )
            }
            </div>
          </div>
       

      </div>
      {/* lower Navbar */}
      <div className="font-mono text-2xl h-[35px] flex items-center justify-center">
      {
        isProfile === true ?  <NavLink to="/">
        <IoArrowBackSharp className="relative" size={30} color="white"/>
     </NavLink> : null
       } 
      <div className="flex justify-center ml-90">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200 scroll-smooth focus:scroll-auto"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
