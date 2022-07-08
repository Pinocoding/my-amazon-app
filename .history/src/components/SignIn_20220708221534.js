import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Login.css";
function SignIn() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="#"
          src="https://help.pacisoft.com/wp-content/uploads/2017/11/amazon-logo-preview.png"
        />
      </Link>
      <div className="login__container">
        <div className="login__containertop">
          <h1>Sign-in</h1>
          <form className="login__form">
            <h5>Password</h5>
            <a href="#">Forgot your password</a>
            <input className="login__input" type="text" />
            <p className="login__button">
              <button>Sign-In</button>
            </p>
            <p className="login__text login__checkbox">
              <input type="checkbox" name="rememberMe" />
              <p>
                Keep me signed in . <a href="#">Details</a>
              </p>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
