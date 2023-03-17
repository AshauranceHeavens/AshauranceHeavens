import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import CallToAction from "./CallToAction";
import image5 from "./../images/image5.jpg";
import image4 from "./../images/image4.jpg";
import image1 from "./../images/image1.jpg";
import image2 from "./../images/image2.jpg";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".transition", {
      scrollTrigger: {
        trigger: ".transition",
        start: "center bottom",
      },
      y: 50,
      stagger: 0.3,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".transition1", {
      scrollTrigger: {
        trigger: ".transition1",
        start: "center bottom",
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
    });
  }, []);

  return (
    <section id="main">
      <div className="pink-container">
        <div className="pink">
          <div className="pink-grid-container">
            <div className="box transition">
              <div className="image_container image1"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                ut eum possimus optio accusantium aut dignissimos. Dolorem
                dolores sint totam?
              </p>
            </div>
            <div className="box transition">
              <div className="image_container image2"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                ut eum possimus optio accusantium aut dignissimos. Dolorem
                dolores sint totam?
              </p>
            </div>
            <div className="box transition">
              <div className="image_container image3"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                ut eum possimus optio accusantium aut dignissimos. Dolorem
                dolores sint totam?
              </p>
            </div>
            <div className="box transition">
              <div className="image_container image4"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                ut eum possimus optio accusantium aut dignissimos. Dolorem
                dolores sint totam?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container">
        <div className="testimonials">
          <div className="testimonials-grid-container">
            <div className="testimonial transition1">
              <img src={require("./../images/john.jpg")} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                aliquid! <br />
                <b>~ John Mthethwa</b>
              </p>
            </div>
            <div className="testimonial transition1">
              <img src={require("./../images/cindy.jpg")} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                aliquid! <br />
                <b>~ Nokwanda Mdletshe</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default Main;
