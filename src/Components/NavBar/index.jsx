import React, { useState } from "react";
import { GiAbstract027 } from "react-icons/gi";

import { FaBars } from "react-icons/fa"

import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./NStyle.scss";
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "EXPERIENCE",
    to: "/experience",
  },
  {
    label: "PROJECTS",
    to: "/projects",
  },
  {
    label: "CONTACT",
    to: "/contacts",
  }
];



const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);



  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };



  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link
            to={"/"}
            className="navbar__container__logo"
            onClick={() => setToggleIcon(false)}
          >
            <GiAbstract027 size={50} style={{
              boxShadow: '1px 2px 9px #E8DAD6',
              margin: '0.5em',
              padding: '0.5em',
              borderRadius: "50%",
            }} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)}
              >
                {item.label}
              </Link>

            </li>
          ))}
          <a
            href="https://github.com/divyanshujamloki"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setToggleIcon(false)}
          >
            <AiFillGithub className="navbar__container__menu__item__links" size={40} color="white" margin="5px" />
          </a>
          <a
            href="https://www.linkedin.com/in/divyanshu-jamloki-2a7789250/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setToggleIcon(false)}
          >
            <AiFillLinkedin className="navbar__container__menu__item__links" size={40} color="white" margin="5px" />
          </a>
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon} >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;