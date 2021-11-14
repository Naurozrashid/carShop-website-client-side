import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import "./Home.css";
import Banner from "./HomeComponents/Banner";
import CarBlogs from "./HomeComponents/CarBlogs";
import OurAchivements from "./HomeComponents/OurAchivements";
import Products from "./HomeComponents/Products";
import UsersReview from "./HomeComponents/UsersReview";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Products></Products>
      <OurAchivements></OurAchivements>
      <UsersReview></UsersReview>
      <CarBlogs></CarBlogs>
      <Footer></Footer>
    </>
  );
};

export default Home;
