import React, { useState } from "react";
import "../Goal.css";
import { IoWomanOutline } from "react-icons/io5";
import { LuFlame, LuBrain } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
const goals = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    icon: <CgGym />,
    description:
      "Sculpt, sweat, and shed with a focused fat-burning track. Whether you're starting fresh or trying to get back in rhythm, we design a sustainable, empowering journey to help you feel lighter and stronger.",
    points: [
      "Cardio-based training with high-energy formats",
      "Customized calorie-burn workouts",
      "Weekly progress check-ins",
      "Supportive meal guidance & habits",
    ],
  },
  {
    id: "strength-gain",
    title: "Strength Gain",
    icon: <LuFlame />,
    description:
      "Fuel your power with a plan built for strength. We focus on compound lifts, progressive overload, and technique—perfect for women who want to build real muscle without the bulk.",
    points: [
      "Full-body resistance programming",
      "Barbell & dumbbell technique mastery",
      "Structured strength milestones",
      "Injury-proof your movement",
    ],
  },
  {
    id: "mental-clarity",
    title: "Mental Clarity",
    icon: <LuBrain />,
    description:
      "Fitness is more than physical. This path blends movement and mindfulness to help you unwind, breathe deeper, and find your inner calm through curated low-impact classes.",
    points: [
      "Guided yoga and meditation blends",
      "Breathwork sessions and slow flow routines",
      "Stress release through movement",
      "Grounding, reset-oriented goals",
    ],
  },
  {
    id: "postpartum",
    title: "Postpartum Fitness",
    icon: <IoWomanOutline />,
    description:
      "Gentle, effective recovery for new moms. Rebuild your core, restore your energy, and move safely in a space that understands your postpartum journey—physically and emotionally.",
    points: [
      "Core & pelvic floor rehabilitation",
      "Slow, adaptive progressions",
      "Mom-friendly schedules and support",
      "Trainers trained in women’s health",
    ],
  },
];

const GoalSelector = () => {
  const [activeGoal, setActiveGoal] = useState("weight-loss");
  const activeContent = goals.find((goal) => goal.id === activeGoal);

  return (
    <section className="goal-section">
      <h2 className="goal-heading">What’s Your Fitness Goal?</h2>
      <div className="goal-tab-area">
        <div className="goal-tab-bar">
          {goals.map((goal) => {
            const IconComponent = goal.icon;
            return (
              <button
                key={goal.id}
                className={`goal-tab ${activeGoal === goal.id ? "active" : ""}`}
                onClick={() => setActiveGoal(goal.id)}
              >
                {goal.title}
              </button>
            );
          })}
        </div>

        <div className="goal-details">
          <h3>{activeContent.title}</h3>
          <p>{activeContent.description}</p>

          <ul className="goal-points">
            {activeContent.points.map((item, i) => (
              <li key={i}>
                <span className="goal-icon">{activeContent.icon}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GoalSelector;
