import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const handleOnclick=()=>{
    
  }
  return (
    <div>
      <Navbar/>
      <div style={{width:"30%",margin:"auto"}}>
        <input data-cy="login-email" style={{marginBottom:"10px",width:"250px"}} placeholder="Enter Your email..." /><br />
        <input data-cy="login-password" style={{marginBottom:"10px",width:"250px"}} placeholder="Enter Your password..." type={"password"}/><br />
        <button data-cy="login-submit" style={{width:"100px" ,marginLeft:"50px"}} onClick={handleOnclick}>Login</button><br />
      </div>
    </div>
  );
};

export default Login;
