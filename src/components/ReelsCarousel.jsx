import React, { useState } from "react";

const placeholderReels = [
  "/videos/reel1.mp4",
  "/videos/reel2.mp4",
  "/videos/reel3.mp4",
  "/videos/reel4.mp4",
  "/videos/reel5.mp4",
  "/videos/reel6.mp4",
  "/videos/reel7.mp4",
  "/videos/reel8.mp4"
];

const Reels = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 4 < placeholderReels.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleReels = placeholderReels.slice(startIndex, startIndex + 4);

  return (
    <section className="reels">
      <h2>From Our Instagram</h2>
      <div className="reels-scroll-wrapper">
        <button className="scroll-btn left" onClick={handlePrev} disabled={startIndex === 0}>
          ◀
        </button>
        <div className="reels-gallery">
          {visibleReels.map((src, index) => (
            <div className="reel-frame" key={index}>
              <video
                src={src}
                muted
                autoPlay
                loop
                playsInline
                controls
              ></video>
            </div>
          ))}
        </div>
        <button
          className="scroll-btn right"
          onClick={handleNext}
          disabled={startIndex + 4 >= placeholderReels.length}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Reels;
