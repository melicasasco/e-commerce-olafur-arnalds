import React, { useEffect } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2200 });
  }, []);

  return (
    <div>
      <h2 style={{ padding: "2rem", color: "black" }}>About Ólafur</h2>
      <div className="aboutContent">
        <div>
          <p data-aos="fade-left" className="aboutText">
            Born in 1986, Ólafur Arnalds hails from the suburban Icelandic town
            of Mosfellsbær, just a few kilometres outside of Reykjavík. He was a
            drummer of hardcore metal bands Fighting Shit and Celestine before
            he immersed himself completely in a world of delicate symphonic
            compositions, generating near weightless orchestral pieces. Arnalds
            explores the crossover from classical to pop by mixing chamber
            strings and piano with discreet electronics and was one of the first
            artists to join Erased Tapes in 2007. His motivations are clear:
            <i>
              “The classical scene is kind of closed to people who haven't been
              studying music all their lives. I would like to bring my classical
              influence to the people who don't usually listen to this kind of
              music, to open people's minds.”
            </i>
            <br></br>
            <br></br>
            Through relentless touring and determination the BAFTA-winning
            composer has steadily gained recognition worldwide since his debut
            Eulogy for Evolution. His 2008 follow-up EP Variations of Static
            earned Ólafur acclaim from both the contemporary and classical field
            — transcending a traditional divide. He has sold out some of the
            world’s most renowned music venues including The Roundhouse and
            Barbican Hall in London, and has been awarded Best Live Session of
            2008 by BBC radio presenter Gilles Peterson.
            <br></br>
            <br></br>
            Always a keen experimenter and innovator, Arnalds has constantly
            pushed the boundaries of music, and in addition to his solo and
            scoring work has a number of collaborative projects. Along with
            Janus Rasmussen of Bloodgroup he formed the minimal, experimental
            techno duo Kiasmos in 2009 who’s eponymously titled album was
            released in 2014.
          </p>
        </div>
        <div>
          <img
            className="imgAbout"
            src="https://cdn1.umg3.net/325/files/2017/01/Olafur-Arnalds-x.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
