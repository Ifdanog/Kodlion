import React, { useState, useEffect } from 'react';

function MovingDot({ currentSlideIndex }) {
  const numberOfDots = 20;
  const dotSpacing = 80 / (numberOfDots) + 0.21053;
  const [leftPosition, setLeftPosition] = useState(0);

  // Update the left position of the moving dot based on currentSlideIndex
  useEffect(() => {
    const targetLeft = currentSlideIndex * dotSpacing;
    let animationFrameId;
    
    const animateDot = () => {
      if (leftPosition < targetLeft) {
        setLeftPosition((prevLeft) => prevLeft + 1);
        animationFrameId = requestAnimationFrame(animateDot);
      }
    };

    setLeftPosition(targetLeft)

    animateDot();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentSlideIndex, leftPosition]);

  return (
    <div
      className='w-[20px] h-[20px] gradient rounded-full absolute'
      style={{
        left: `${leftPosition}%`,
        transform: 'translate(-50%, -50%)',
        marginLeft: '10%',
        top: '50%',
        transition: 'left 2s ease', // Add a smooth transition effect
      }}
    ></div>
  );
}

function StraightLineWithDots({ currentSlideIndex }) {
  const numberOfDots = 20;

  const dots = Array.from({ length: numberOfDots }, (_, index) => (
    <div
      key={index}
      className='w-[15px] h-[15px] bg-white rounded-full absolute'
      style={{
        marginLeft: '10%',
        left: `${(index / (numberOfDots - 1)) * 80}%`,
        transform: 'translate(-50%, -50%)',
        top: '50%',
      }}
    ></div>
  ));

  return (
    <div className='w-3/4 h-32 m-auto relative bottom-14 flex justify-center items-center'>
      <div className='w-full h-8 relative flex justify-center items-center'>
        {dots}
        <div className='w-full h-[2px] bg-white absolute left-0 top-[2.5px] mt-3'></div>
        <MovingDot currentSlideIndex={currentSlideIndex} />
      </div>
    </div>
  );
}

export default StraightLineWithDots;
