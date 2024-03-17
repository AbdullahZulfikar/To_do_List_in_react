import React, { useState } from 'react';
import {signOut} from "firebase/auth"
import { auth } from '../../config/firebase-config';
import {useNavigate} from "react-router-dom"


export const useProfileDropdown = (profilePicture, onSignOut) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate()

  const userSignOut = async() => {
    try {
        await signOut(auth)
        localStorage.clear()
        navigate("/")
    }catch (err){
        console.log(err)
    }
  }

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const ProfileDropdown = () => (
    <div className=" inline-block static">
      <img
        src={profilePicture}
        alt="Profile"
        className="h-10 w-10 rounded-full cursor-pointer absolute right-3"
        onClick={handleProfileClick}
      />

      {isProfileOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-md p-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );

  return { ProfileDropdown, isProfileOpen, handleProfileClick };
};


