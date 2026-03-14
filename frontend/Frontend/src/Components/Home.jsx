import React from "react";
import "./navbar.css";

import NavBar from "./Navbar";
import Banner from "./Banner";
import Temples from "./Temples";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-page" id="home">

      <NavBar />

      <main className="main-content">

        <Banner />

        <Temples />

        <About />

        <Services />

      </main>

      <Footer />

    </div>
  );
};

export default Home;