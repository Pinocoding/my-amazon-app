import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

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

import Footer from "../components/Footer/Footer";
import Payment from "../components/Payment/Payment";
import BeautyPicks from "../components/Products/BeautyPicks/BeautyPick";
import DealOfTheDay from "../components/Products/DealOfTheDay/DealOfTheDay";
import VideoGames from "../components/Products/ShopByCategory/VideoGames";
import SmartWatches from "../components/Products/SmartWatches/SmartWatches";

// --layoutComponent--

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          // ---home---
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        {/* ------Login----- */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/SignIn"
          element={
            // <RequireAuth>
            <SignIn />
            // </RequireAuth>
          }
        />
        <Route path="/CreateAccount" element={<AuthForm />} />
        {/* ---//---- */}
        {/* ------Checkout---- */}
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        {/*  */}
        {/*  */}
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
        {/*  */}
        <Route
          path="/headsets"
          element={
            <>
              <Header />
              <HeadSets />
            </>
          }
        />
        <Route
          path="/keyboards"
          element={
            <>
              <Header />
              <KeyBoards />
            </>
          }
        />
        <Route
          path="/Mouses"
          element={
            <>
              <Header />
              <Mouses />
              <Footer />
            </>
          }
        />
        <Route
          path="/Chairs"
          element={
            <>
              <Header />
              <Chairs />
              <Footer />
            </>
          }
        />

        <Route
          path="/IndividualPage"
          element={
            <>
              <Header />
              <IndividualPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/ComputersAccessories"
          element={
            <>
              <Header />
              <ComputersAccessories />
            </>
          }
        />

        <Route
          path="/VideoGames"
          element={
            <>
              <Header />
              <VideoGames />
            </>
          }
        />
        <Route
          path="/BeautyPicks"
          element={
            <>
              <Header />
              <BeautyPicks />
            </>
          }
        />

        <Route
          path="/Dresses"
          element={
            <>
              <Header />
              <Dresses />
            </>
          }
        />
        <Route
          path="/StripLights"
          element={
            <>
              <Header />
              <StripLights />
            </>
          }
        />
        <Route
          path="/DealOfTheDay"
          element={
            <>
              <Header />
              <DealOfTheDay />
            </>
          }
        />
        <Route
          path="/BookStores"
          element={
            <>
              <Header />
              <BookStores />
            </>
          }
        />
        <Route
          path="/SmartWatches"
          element={
            <>
              <Header />
              <SmartWatches />
            </>
          }
        />
        <Route
          path="/Admin"
          element={
            <>
              <Admin />
            </>
          }
        />
        <Route
          path="/Baby"
          element={
            <>
              <Header />
              <Baby />
            </>
          }
        />
        <Route
          path="/Toys"
          element={
            <>
              <Header />
              <Toys />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
