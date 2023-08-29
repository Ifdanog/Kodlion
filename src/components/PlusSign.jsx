const PlusSign = ({ activeSlideIndex }) => {
  const randomNum = Math.floor(Math.random() * 3) + 1; 

  return (
    <div
      className="plus-sign"
      style={{
        top: `${activeSlideIndex * randomNum}vh`, // Move the PlusSign vertically based on the active slide
        left:`${activeSlideIndex * randomNum}vh`, // Position it at the top-left corner
      }}
    >
      <div className="plus-line horizontal-line"></div>
      <div className="plus-line vertical-line"></div>
      <div className="plus-line horizontal-line line1"></div>
      <div className="plus-line vertical-line line2"></div>
    </div>
  );
};

export default PlusSign;
