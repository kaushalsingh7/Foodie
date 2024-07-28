import React from "react";
import Cart from "../components/Cart";
import CatregoryMenu from "../components/CatregoryMenu";
import FoodItem from "../components/FoodItem";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <CatregoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
