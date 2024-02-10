import React, { useEffect } from "react";

import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import ProductPage from './pages/ProductPage.jsx'

import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";

const App = () => {
  

 
  
  

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>  
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/singleProduct/:_id" element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
};

export default App;
