import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  return (
    <div>
      <br />
      <input data-cy="login-email" placeholder="email" />
      <br />
      <input data-cy="login-password" placeholder="password" />
      <br />
      <button data-cy="login-submit">Login</button>
      <br />
    </div>
  );
};



export default Login;
