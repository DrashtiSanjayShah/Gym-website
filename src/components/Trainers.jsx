import React from "react";
import "../Trainers.css";

const trainers = [
  {
    name: "Ananya Mehta",
    title: "Strength & Mobility Coach",
    img: "/images/trainer1.jpg",
    description: "Ananya focuses on posture, strength balance, and safe progressions for all fitness levels."
  },
  {
    name: "Zoya Khan",
    title: "Cardio Queen",
    img: "/images/trainer2.jpg",
    description: "Zoya brings the heat with her dance-HIIT fusion, boxing drills, and killer playlists."
  },
  {
    name: "Reena Sharma",
    title: "Mind-Body Specialist",
    img: "/images/trainer3.jpg",
    description: "Reena blends yoga, mobility and mindfulness to help women reconnect with movement."
  }
];

const Trainers = () => {
  return (
    <section className="trainers-section">
      <h2>Meet Our Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((trainer, i) => (
          <div className="card-wrapper" key={i}>
            <div className="trainer-card">
              <div className="front">
                <img src={trainer.img} alt={trainer.name} />
                <h3>{trainer.name}</h3>
                <p>{trainer.title}</p>
              </div>
              <div className="back">
                <p>{trainer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
