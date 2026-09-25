import { SignIn,useUser } from '@clerk/react';
import React from 'react'
import { Navigate } from 'react-router-dom';

const Login = ({mode="login"}) => {
  const Isregister = mode == "register";
    const {isLoaded,isSignedIn}=useUser();
    
    if(isLoaded && isSignedIn) {
      return <Navigate to="/dashboard"/>
    }
  return (
    <div className="login_wrapper">
      <div className="login_container">
       {
        Isregister ? 
        (<SignIn path="/register" routing="path" SigninUrl="/login" fallbackRedirectUrl="/dashboard" />) 
        :
        (<SignIn path="/login" routing="path" SigninUrl="/login" fallbackRedirectUrl="/dashboard" />)
       }
      </div>
    </div>
  )
}

export default Login
