// Transformation.js
import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImg from "../assets/images/hero.jpg";
import afterImg from "../assets/images/bg.png";
import "../Transformation.css";
// export type AppTouchEvent = TouchEvent;

const Transformation = () => {
  return (
    <section className="transformation-section">
      <h2>Before & After</h2>
      <p>Real results from women just like you.</p>

  <div className="slider-wrapper">
  <div className="caption-wrapper">
    <span className="caption before">Before</span>
    <span className="caption after">After</span>
  </div>

  <ReactCompareImage
    leftImage={beforeImg}
    rightImage={afterImg}
    sliderLineColor="#FF5722"
  />
</div>


      <button className="transformation-cta">I Want My Own Transformation</button>
    </section>
  );
};

export default Transformation;
