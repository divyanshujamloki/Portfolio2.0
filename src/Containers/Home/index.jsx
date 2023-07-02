import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
// import "../Home/DIVYANSHURESUME.pdf"
import Typed from "react-typed"
import "./Style.scss";
import { saveAs } from 'file-saver';
import Lottie from "lottie-react"


const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const download=()=>{
    saveAs("DIVYANSHURESUME.PDF", "DIVYANSHURESUME.pdf");
  }
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

  
  return (
    <section id="home" className="home">
   
    <div>
    
        <h3 id="box"></h3>
        
        <iframe src="https://embed.lottiefiles.com/animation/64732"></iframe>
    </div>
    <h1 id="home" >Hi! I'm Divyanshu </h1>
      <div className="home__text-wrapper">
        <h1>
        <Typed

            strings={[
                "Oracle Apex",
                "Front-End Developer",
                "Back-End Developer"

            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            
            />
        
         
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={4.5}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
        
          <button onClick={download}>My Resume</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;