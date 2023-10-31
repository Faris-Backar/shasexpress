import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Info from "./Component/Info";
import Loader from "./Component/loader/Loader";
import NavBar from "./Component/Nav/NavBar";
import TopInfo from "./Component/Nav/TopInfo";
import About from "./Component/pages/about/About";
import Contact from "./Component/pages/contact/Contact";
import Service from "./Component/pages/services/Service";

export default function App() {
  return (
    <div className="header-area">
      <div className="main-header ">
        <Loader/>
        <TopInfo />
        <NavBar />
        <Header/>
        <Info/>
        <Service/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
