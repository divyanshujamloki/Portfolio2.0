import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
// import "../Home/DIVYANSHURESUME.pdf"status
import "./Style.scss";
import { saveAs } from 'file-saver';
import { AiFillCopy } from 'react-icons/ai';
import Lottie from "lottie-react"
import {Typewriter} from 'react-simple-typewriter';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  // const  {text} = useTypewriter({

  //   words: ['Oracle Apex', 'Front-End Developer', 'Back-End Developer'],
  //   loop: {},
  // });

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
         {/* Style will be inherited from the parent element */}
         <Typewriter
            words={['Oracle Apex', 'Front-End Developer', 'Back-End Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
       {/* <Cursor/>
         */}
         
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
        <CopyToClipboard text="divyanshujamloki05@gmail.com">
  <button  > <AiFillCopy/> E-mail</button>
</CopyToClipboard>
        
        </div>
      </Animate>


      
    </section>
  );
};
export default Home;