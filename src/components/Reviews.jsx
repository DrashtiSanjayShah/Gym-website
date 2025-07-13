import React from "react";

const reviews = [
  {
    name: "Aisha",
    text: "This is the first time I’ve looked forward to working out. CrossFit helped me find joy in movement again. The vibe, the women, the space — all of it is powerful.",
  },
  {
    name: "Aisha",
    text: "This is the first time I’ve looked forward to working out. CrossFit helped me find joy in movement again. The vibe, the women, the space — all of it is powerful.",
  },
  {
    name: "Aisha",
    text: "This is the first time I’ve looked forward to working out. CrossFit helped me find joy in movement again. The vibe, the women, the space — all of it is powerful.",
  },
  {
    name: "Meera",
    text: "No mirrors. No pressure. Just me, feeling strong. I love how inclusive this space is.",
  },
  {
    name: "Fatima",
    text: "The trainers are so understanding. They helped me grow stronger in every way, not just physically.",
  },
  {
    name: "Rhea",
    text: "I used to feel nervous in gyms. This one feels like home."
  },
];

const Reviews = () => {
  return (
    <section className="reviews-bento">
      <h2>What Our Members Say</h2>
      <div className="bento-grid">
        {reviews.map((review, index) => (
          <div key={index} className={`bento-tile bento-${index + 1}`} style={{ marginBottom:'1rem', border: '2px solid var(--primary)' }}>
            <p>“{review.text}”</p>
            <span>– {review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
