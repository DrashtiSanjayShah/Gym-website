import React, { useState } from "react";
import "../FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

const questions = [
  {
    question: "Do I need to be fit to start?",
    answer: "Not at all! We welcome all levels. Our programs are beginner-friendly and customizable."
  },
  {
    question: "What should I wear?",
    answer: "Comfortable workout clothes and a smile. You don’t need fancy gear to begin."
  },
  {
    question: "Can I bring a friend?",
    answer: "Absolutely! We love when women bring friends. Your first trial session is free."
  },
  {
    question: "I’ve never been to a gym before. Is that okay?",
    answer: "Totally okay! Our team will guide you from the first step so you never feel lost or awkward."
  },
  {
    question: "Do you offer support for postpartum fitness?",
    answer: "Yes, we have a dedicated track with certified trainers to help new moms recover gently and confidently."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <CgGym />}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
