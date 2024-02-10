import React, { useEffect } from 'react'
import Login from "../components/Login/Login.jsx"
import { setCredentials, setToken, setUserTypeAndCredentials } from '../reducer/Slices/authSlice.js'
import { LOGIN_USER_ROUTE,LOGIN_SELLER_ROUTE } from '../utils/ApiRoutes.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const token=useSelector((state)=> state.auth.token);

  useEffect(()=>{
    if(token)
    {
      navigate("/");
    }
  },[token])
  const handleLogin=async({email,password,accountType})=>{
    console.log(email,password,accountType)
       try {
        if(accountType === "user")
        {
          const {data}=await axios.post(LOGIN_USER_ROUTE,{email,password});
          console.log(data)
          if(data.success === true)
          {
            const credentials=data.userExistence;
            dispatch(setUserTypeAndCredentials({accountType,credentials}))
            dispatch(setToken(data.token));
 
            navigate("/")
          }
          new Error();
         
        }
        else{
          const {data}=await axios.post(LOGIN_SELLER_ROUTE,{email,password});
          if(data.success === true)
          {
            console.log(data.token)
            const credentials=data.userExistence;
            dispatch(setUserTypeAndCredentials({accountType,credentials}))

            dispatch(setToken(data.token));
    
            navigate("/")
          } 
          new Error();
        }
        // console.log("deadlock")
       } catch (error) {
         console.log(error)
       }
  }
  return (
    <Login handleLogin={handleLogin}/>
  )
}


export default LoginPage