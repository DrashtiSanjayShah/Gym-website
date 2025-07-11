import React from "react";
import { motion } from "framer-motion";
import "../WhyUs.css";
import { FaStreetView } from "react-icons/fa";
import { GiGymBag, GiMedallist } from "react-icons/gi";
import { RiUserCommunityLine } from "react-icons/ri";

const reasons = [
  {
    title: "No Machines, Just Movement",
    content: "We focus on functional workouts that help you move better in real life. No bulky machines, just bodyweight, resistance and rhythm.",
    icon: <GiGymBag />,
    direction: "up", // float up first
  },
  {
    title: "Inclusive Community",
    content: "Every fitness level is welcome. Whether you're a beginner or returning after years, you’ll feel right at home.",
    icon: <RiUserCommunityLine />,
    direction: "down", // float down first
  },
  {
    title: "Holistic Approach",
    content: "We combine movement, mindfulness, and motivation to help you become your strongest self.",
    icon: <FaStreetView />,
    direction: "up",
  },
  {
    title: "Real Trainers, Real Results",
    content: "Our certified trainers are more like mentors who understand what women really need in their fitness journeys.",
    icon: <GiMedallist />,
    direction: "down",
  },
];

const WhyUs = () => {
  return (
    <section className="why-us-grid">
      <h2>Why Choose Us</h2>
      <div className="why-grid">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="why-card"
            animate={{
              y: reason.direction === "up" ? [0, -20, 0] : [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="why-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
