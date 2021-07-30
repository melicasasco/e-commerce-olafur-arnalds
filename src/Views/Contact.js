import React from "react";
import "./about.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import qr from "./qr_img.png";

function Contact() {
  return (
    <div>
      <h2 style={{ padding: "2rem", color: "black" }}>Contact Me</h2>
      <div className="contactContent">
        <div>
          <img
            className="contactImg"
            src="https://www.neo2.com/wp-content/uploads/2021/06/Olafur-Arnalds-ft-Josin-IFEMA-Madrid-Live-01.jpg"
            alt="Olafur Arnalds"
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PinDropIcon style={{ color: "#05314d" }}></PinDropIcon>
            <p className="contactTitle">Reykjavík, Iceland</p>
          </div>
          <div>
            <img
              src={qr}
              alt="Olafur Arnalds"
              style={{
                height: "15rem",
                display: "flex",
                justifyContent: "flex-start",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
