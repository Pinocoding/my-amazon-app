import React, { useContext } from "react";
import { DataContext } from "../components/DataLayer/Datalayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// --layoutComponent--
//
import Admin from "../components/Admin/Admin";
//
import AuthForm from "../components/AuthForm/AuthForm";
import "./App.css";
import HealthPersonalCare from "../components/Products/HealthPersonalCare/HealthPersonalCare";

import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Checkout from "../components/CheckOut/Checkout";
import Login from "../components/AuthForm/Login";
import SignIn from "../components/AuthForm/SignIn";
import BookStores from "../components/Products/BookStores/BookStores";
import HeadSets from "../components/Products/Gaming accessories/HeadSets";
import Toys from "../components/Products/ShopByCategory/Toys";
import StripLights from "../components/Products/StripLights/StripLights";
import Baby from "../components/Products/ShopByCategory/Baby";
import ComputersAccessories from "../components/Products/ShopByCategory/ComputersAccessories";
import Dresses from "../components/Products/Dresses/Dresses";
import Chairs from "../components/Products/Gaming accessories/Chairs";
import KeyBoards from "../components/Products/Gaming accessories/KeyBoards";
import Mouses from "../components/Products/Gaming accessories/Mouses";
import IndividualPage from "../components/Products/IndividualPage";
import ForgotPassword from "../components/AuthForm/ForgotPassword";
import Footer from "../components/Footer/Footer";
import Payment from "../components/Payment/Payment";
import BeautyPicks from "../components/Products/BeautyPicks/BeautyPick";
import DealOfTheDay from "../components/Products/DealOfTheDay/DealOfTheDay";
import VideoGames from "../components/Products/ShopByCategory/VideoGames";
import SmartWatches from "../components/Products/SmartWatches/SmartWatches";
import UpdateProfile from "../components/AuthForm/UpdateProfile";
import { MaterialUISwitch } from "../components/Toggle/Toggle";
import NotAlowed from "../components/NotAlowed/NotAlowed";
import Ekindle from "../components/Products/Ekindle/Ekindle";
import Laptop from "../components/Products/Laptop/Laptop";
import ShopPet from "../components/Products/ShopPet/ShopPet";
import Fitness from "../components/Products/Fitness/Fitness";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import Outlet from "../components/Outlet/Outlet";
// --layoutComponent--

function App() {
  const context = useContext(DataContext);
  const checked = context.checked;
  const handleChange = context.handleChange;
  const isDark = context.isDark;

  return (
    <div
      id="Home-section"
      className={`App ${isDark ? "app-dark" : "app-light"}`}
    >
      <div className="toggle-darkmode">
        <MaterialUISwitch checked={!!checked} onChange={handleChange} />
      </div>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route element={<RequireAuth />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="updateprofile" element={<UpdateProfile />} />

          <Route path="login" element={<Login />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="createaccount" element={<AuthForm />} />

          <Route
            path="checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />

          <Route
            path="payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />

          <Route
            path="headsets"
            element={
              <>
                <Header />
                <HeadSets />
                <Footer />
              </>
            }
          />
          <Route
            path="keyboards"
            element={
              <>
                <Header />
                <KeyBoards />
                <Footer />
              </>
            }
          />
          <Route
            path="mouses"
            element={
              <>
                <Header />
                <Mouses />
                <Footer />
              </>
            }
          />
          <Route
            path="chairs"
            element={
              <>
                <Header />
                <Chairs />
                <Footer />
              </>
            }
          />

          <Route
            path="individualpage"
            element={
              <>
                <Header />
                <IndividualPage />
                <Footer />
              </>
            }
          />
          <Route
            path="computersaccessories"
            element={
              <>
                <Header />
                <ComputersAccessories />
                <Footer />
              </>
            }
          />

          <Route
            path="videogames"
            element={
              <>
                <Header />
                <VideoGames />
                <Footer />
              </>
            }
          />
          <Route
            path="beautypicks"
            element={
              <>
                <Header />
                <BeautyPicks />
                <Footer />
              </>
            }
          />

          <Route
            path="dresses"
            element={
              <>
                <Header />
                <Dresses />
                <Footer />
              </>
            }
          />
          <Route
            path="striplights"
            element={
              <>
                <Header />
                <StripLights />
                <Footer />
              </>
            }
          />
          <Route
            path="dealoftheday"
            element={
              <>
                <Header />
                <DealOfTheDay />
                <Footer />
              </>
            }
          />
          <Route
            path="healthpersonalcare"
            element={
              <>
                <Header />
                <HealthPersonalCare />
                <Footer />
              </>
            }
          />
          <Route
            path="bookstores"
            element={
              <>
                <Header />
                <BookStores />
                <Footer />
              </>
            }
          />
          <Route
            path="smartwatches"
            element={
              <>
                <Header />
                <SmartWatches />
                <Footer />
              </>
            }
          />

          <Route
            path="baby"
            element={
              <>
                <Header />
                <Baby />
                <Footer />
              </>
            }
          />
          <Route
            path="toys"
            element={
              <>
                <Header />
                <Toys />
                <Footer />
              </>
            }
          />
          <Route
            path="forgotpassword"
            element={
              <>
                <ForgotPassword />
              </>
            }
          />
          <Route
            path="ekindle"
            element={
              <>
                <Header />
                <Ekindle />
                <Footer />
              </>
            }
          />
          <Route
            path="laptop"
            element={
              <>
                <Header />
                <Laptop />
                <Footer />
              </>
            }
          />
          <Route
            path="shoppet"
            element={
              <>
                <Header />
                <ShopPet />
                <Footer />
              </>
            }
          />
          <Route
            path="fitness"
            element={
              <>
                <Header />
                <Fitness />
                <Footer />
              </>
            }
          />
        </Route>
        <Route path="/notalowed" element={<NotAlowed />} />
        {/* <Route path="*" element={<NotAlowed />} /> */}
      </Routes>
    </div>
  );
}

export default App;
