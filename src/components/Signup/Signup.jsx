import { useState } from "react";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import { Link } from "react-router-dom";

import axios from 'axios';
import { SIGNUP_SELLER_ROUTE } from "../../utils/ApiRoutes";
import { SIGNUP_USER_ROUTE } from '../../utils/ApiRoutes';

import {  useDispatch } from 'react-redux';
import { setUserTypeAndCredentials } from "../../reducer/Slices/authSlice";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [accountType,setAccountType]=useState("user");


 
  function changeAccountType(value)
  {
     setAccountType(value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const profileImage="";
      if (accountType === "user") {
        const { data } = await axios.post(SIGNUP_USER_ROUTE, {
          name,
          email,
          password,
          accountType,
          profileImage,
        });
        console.log(data)
        if (data.success === true) {
          dispatch(setUserTypeAndCredentials(accountType, { name, email, password, accountType, profileImage }));
          navigate("/");
        } else {
          // Handle error when data.status is not true
          console.error("Signup failed:", data.error);
        }
      } else {
        const { data } = await axios.post(SIGNUP_SELLER_ROUTE, {
          name,
          email,
          password,
          accountType,
          profileImage,
        });
        console.log(data)

        if (data.success === true) {
          dispatch(setUserTypeAndCredentials(accountType, { name, email, password, accountType, profileImage }));
          navigate("/");
        } else {
          // Handle error when data.status is not true
          console.error("Signup failed:", data.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>


            <div>
            <label
                htmlFor="accountType"
                className="block text-sm font-medium text-gray-700"
            >
                Account Type
            </label>
            <div className="mt-1">
            <select
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => changeAccountType(e.target.value)}
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>

            </div>
            </div>


    

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
