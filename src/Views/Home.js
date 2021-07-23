import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="containerHome">
      <div className="homeC homeGrids">
        <div></div>
        <div>
          <h2
            data-aos="fade-left"
            style={{ color: "white", marginBottom: "38px", padding: "15px" }}
          >
            Welcome to Ólafur Arnalds Site
          </h2>
          <h3 data-aos="fade-left" style={{ padding: "15px" }}>
            Some kind of peace
          </h3>
          <h2 data-aos="fade-left" className="hoverNewAlbum">
            New album out now
          </h2>
          <ArrowDropDownIcon />
        </div>
        <div className="leftContainer"></div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
