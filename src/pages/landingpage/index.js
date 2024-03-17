import {useNavigate} from "react-router-dom"
import React from 'react';
import {useGetUserInfo} from "../../customs/hooks/useGetUser"
import {Navigate} from "react-router-dom"

export const LandingPage = () => {

    const navigate = useNavigate();
    const {isAuth} = useGetUserInfo()

    const gotToSignUp = () => {
        navigate('sign-in')
    }


    if(isAuth) {
      return <Navigate to="/expense-tracker"/>
  }
    return(
        
        <div className="bg-red-500 h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <div className="pb-2 text-5xl font-extrabold">
              Expense Tracker
            </div>
            <blockquote className="text-2xl font-semibold italic text-slate-900">
              <span className="pr-1 pl-1">Track down your</span>
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">expense</span>
              </span>
              <span className="pl-1">with just in one click.</span>
            </blockquote>
            <div className="mt-4 pl-2">
              <button onClick={gotToSignUp}
              className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
        )
}




    