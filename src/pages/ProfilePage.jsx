import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import ProfileSideBar from '../components/Profile/ProfileSideBar.jsx';
import ProfileContent from '../components/Profile/ProfileContent.jsx';

import styles from '../styles/style.js';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { token } = useSelector((state) => state.auth);
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token)
    {
        navigate("/login")
    }
  },[token])

  // console.log("token in profilePage " + token);

  return (
    <div>
      {token ? (
        <div className='w-full flex bg-white  flex-col '>
          <Navbar isProfile={true} />
          <div className={`w-[11/12] min-h-screen flex  py-10`}>
            <div className="w-[50px] h-fit 800px:w-[335px] sticky 800px:mt-0 py-auto ml-6 ">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <div className='w-full min-h-screen relative'>
            <ProfileContent active={active}  className="relative"/>
            </div>
            
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default ProfilePage;
