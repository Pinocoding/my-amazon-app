import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../AuthForm/AuthStyle.css";

function Login() {
  const { t } = useTranslation(["common"]);
  const context = useContext(DataContext);
  const currentUser = context.currentUser;
  const isDark = context.isDark;
  console.log("isDark>>>", isDark);
  return (
    <div className={`login ${isDark ? "login-dark" : "login-light"}`}>
      {isDark ? (
        <Link to="/">
          <img
            className="login__logo-dark"
            alt="#"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            className="login__logo-light"
            alt="#"
            src="https://help.pacisoft.com/wp-content/uploads/2017/11/amazon-logo-preview.png"
          />
        </Link>
      )}

      <div
        className={`login__container ${
          isDark ? "login__container-dark" : "login__container-light"
        }`}
      >
        <div className="login__containertop">
          <h2>{t("Sign-In")}</h2>
          <form className="login__form">
            <h5>{t("Email or mobile phone number")}</h5>
            <input
              className="login__input"
              placeholder="test@gmail.com"
              type="email"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            <Link to="/SignIn">
              <p className="login__button">
                <button>{t("Continue")}</button>
              </p>
            </Link>

            <p className="login__text">
              {t("By continuing, you agree to Amazons")}
            </p>
            <p className="login__help">
              <ArrowRightIcon /> {t("Need help ?")}
            </p>
          </form>
        </div>

        <div
          className={`login__newtoamazone ${
            isDark ? "login__newtoamazone-dark" : "login__newtoamazone-light"
          }`}
        >
          <h5>{t("New to Amazone ?")}</h5>
        </div>



          <button className="login__buttontwo">        {currentUser ?      }
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/CreateAccount"
            >
              {t("Create your Amazon account")}
            </Link>
          </button>


        <button className="login__buttontwo">
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/CreateAccount"
          >
            {t("Create your Amazon account")}
          </Link>
        </button>

        <ul className="login__ect">
          <li>{t("Conditions of Use")}</li>
          <li>{t("Privacy Notice")}</li>
          <li>Help</li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Login;
