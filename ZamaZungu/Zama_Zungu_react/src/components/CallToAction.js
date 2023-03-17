import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

const CallToAction = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".transition2", {
      scrollTrigger: {
        trigger: ".transition2",
        start: "center bottom",
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="call_to_action transition2">
      <div className="container ">
        <h3>Email Or Call For An Order</h3>
        <a href="tel:+27452158963">Call Now</a>
      </div>
    </div>
  );
};

export default CallToAction;
