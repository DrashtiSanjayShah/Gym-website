import React from "react";
import "../Location.css";

const Location = () => {
  return (
    <section className="location-section">
      <h2 style={{ textAlign: "center" }}>Find Us Here</h2>
      <div className="location-container">
        <div className="location-info">
          <ul>
            <li>
              <strong>Address:</strong> 123 Fitness Street, Near Inorbit Mall,
              Mumbai
            </li>
            <li>
              <strong>Landmark:</strong> Opposite Domino’s Pizza
            </li>
            <li>
              <strong>Timings:</strong> Mon–Sat: 6 AM – 9 PM
            </li>
            <li>
              <strong>Phone:</strong> +91 9876543210
            </li>
          </ul>
          <button className="directions-btn">Get Directions</button>
        </div>

        <div className="location-map">
          <iframe
            title="gym-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610076594!2d72.74109984396938!3d19.08219783824514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f1c2d443f%3A0x57e4d2aab4dbad11!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698675678912!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
