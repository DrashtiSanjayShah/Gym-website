import React, { useState } from "react";
import "../Classes.css";
import { CgGym } from "react-icons/cg";

const packages = [
  {
    id: "strength",
    title: "Strength & Conditioning",
    description:
      "Build full-body strength through structured resistance programs. We combine bodyweight training, barbell technique, and dynamic conditioning to sculpt and empower you.",
    points: [
      "Custom strength progressions",
      "Weightlifting technique breakdowns",
      "Mobility and stability routines",
      "Supportive goal tracking tools"
    ]
  },
  {
    id: "cardio",
    title: "High-Energy Cardio",
    description:
      "Dance, sweat, and burn with heart-pumping routines. We fuse rhythmic HIIT, boxing drills, and dynamic movement for peak calorie burn and endorphin release.",
    points: [
      "Dance cardio, boxing, step, and agility drills",
      "Upbeat curated playlists to stay pumped",
      "No mirrors, just fun and sweat",
      "Progress tracking and modifications"
    ]
  },
  {
    id: "mind",
    title: "Mind & Movement",
    description:
      "Reconnect through restorative movement. Yoga-inspired classes that focus on breath, flexibility, balance, and mental clarity.",
    points: [
      "Guided mindfulness and grounding",
      "Breath-led slow flow sequences",
      "Mobility and recovery essentials",
      "Feel-good finish with affirmations"
    ]
  },
  {
    id: "group",
    title: "Small Group Power",
    description:
      "Work out in a close-knit group with hands-on coaching. Sessions are capped for quality and community, with a focus on individual progress and team energy.",
    points: [
      "Circuit-style partner formats",
      "Mini goal-setting and accountability",
      "Group strength and endurance tests",
      "Trainers adjust to your unique pace"
    ]
  },
];

const Classes = () => {
  const [activeTab, setActiveTab] = useState("strength");
  const activeContent = packages.find((p) => p.id === activeTab);

  return (
    <section className="classes-section">
      <h2 style={{ textAlign:'center'}}>Our Class Packs</h2>
      <div className="tab-area">
        <div className="tab-bar chrome-tabs">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              className={`tab chrome-tab ${activeTab === pkg.id ? "active" : ""}`}
              onClick={() => setActiveTab(pkg.id)}
            >
              {pkg.title}
            </button>
          ))}
        </div>

        <div className="class-details chrome-content">
          <h3>{activeContent.title}</h3>
          <p>{activeContent.description}</p>
          <ul className="butler-points">
            {activeContent.points.map((point, i) => (
              <li key={i}>
                <CgGym className="point-icon" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Classes;
