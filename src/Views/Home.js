import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="containerHome">
      <div className="homeC homeGrids">
        <div>
          <h1 data-aos="fade-left" style={{ color: "white", margin: "3rem" }}>
            Welcome to Ólafur Arnalds Site
          </h1>
          <h3 data-aos="fade-left" style={{ padding: "15px" }}>
            Some kind of peace tour | 2022
          </h3>
          <h2 data-aos="fade-left" className="hoverNewAlbum">
            Coming soon
          </h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
