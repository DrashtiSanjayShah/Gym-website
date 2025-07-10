import React from "react";
import "../WhyUs.css";

const reasons = [
  {
    title: "No Machines, Just Movement",
    content: "We focus on functional workouts that help you move better in real life. No bulky machines, just bodyweight, resistance and rhythm.",
  },
  {
    title: "Inclusive Community",
    content: "Every fitness level is welcome. Whether you're a beginner or returning after years, you’ll feel right at home.",
  },
  {
    title: "Holistic Approach",
    content: "We combine movement, mindfulness, and motivation to help you become your strongest self.",
  },
  {
    title: "Real Trainers, Real Results",
    content: "Our certified trainers are more like mentors who understand what women really need in their fitness journeys.",
  },
];

const WhyUs = () => {
  return (
    <section className="why-us-grid">
      <h2>Why Choose Us</h2>
      <div className="why-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="why-card">
            <h3>{reason.title}</h3>
            <p>{reason.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
