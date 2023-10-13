import React, { useState, useEffect } from "react";
import Featured from "../components/navbar/Featured";
import Logo from "../components/navbar/Logo";
import "../styles/home.css";
import logo from "../images/logo.png";

const Home = () => {
  const [styles, setStyles] = useState(false);
  setInterval(() => {
    setStyles(true);
  }, 3000);

  useEffect(() => {
    const handleScroll = (event) => {
      let in_opacity = document.getElementById("increase_opacity");
      let header = document.getElementById("content");
      let scrollTop = document.documentElement.scrollTop;
      header.style.opacity = 1 - scrollTop / 300;
      in_opacity.style.opacity = scrollTop / 300;
      // console.log(header.style.opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className=" fixed opacity-0  left-4 top-4 max-lg:hidden"
        id="increase_opacity"
      >
        <img src={logo} alt="" className="h-12  " />
      </div>
      <div className="justify-center text-white  ">
        
        <div className="h-screen     " id="content">
          <div className="justify-center  flex items-center h-screen columns-2">
            <div className="fixed z-2 opacity-100 max-lg:hidden ">
              <Logo />
            </div>
            <div
              className={
                styles
                  ? "page_about_feature relative z-1 overflow-y-auto "
                  : "hidden"
              }
            >
              <div className="featured py-20 my-20 fixed text-left mx-20  max-lg:my-1 max-lg:inset-x-0">
                <Featured />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
