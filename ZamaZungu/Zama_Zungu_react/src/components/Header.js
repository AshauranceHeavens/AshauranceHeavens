import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import colours from "./colours.js";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";

const Header = ({ title }) => {
  const slider = useRef(null);
  const header = useRef(null);

  const tl = gsap.timeline();

  const ham = () => {
    slider.current.style.right = "0vw";
  };

  const cross = () => {
    slider.current.style.right = "-70vw";
  };

  useEffect(() => {
    //to fix glitchy display before animation
    header.current.style = "visibility: visible";
    tl.from(".stagger1", {
      opacity: 0,
      y: -40,
      ease: Power4.easeOut,
      duration: 2,
    });
  }, []);

  return (
    <header className="header" ref={header}>
      <nav className="nav">
        <figcaption>Zama Zungu</figcaption>
        <div id="ham" onClick={() => ham()}>
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div>
        </div>
        <div id="slider" ref={slider}>
          <div id="cross" onClick={() => cross()}>
            <div className="div1"></div>
            <div className="div2"></div>
          </div>
          <div className="ul-container">
            <ul>
              <li>
                <Link to="/ZamaZungu/">Home</Link>
              </li>
              <li>
                <Link to="/ZamaZungu/About">About</Link>
              </li>
              <li>
                <Link to="/ZamaZungu/Products">Products</Link>
              </li>
              <li>
                <Link to="/ZamaZungu/Contacts">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="hero">
        {title ? (
          <h1 className="stagger1">{title}</h1>
        ) : (
          <h1 className="stagger1">
            Skin Care <br /> <span className="stagger1"> By </span>
            <br /> Zama Zungu
          </h1>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
