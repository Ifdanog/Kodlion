import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import PlusSign from './PlusSign'
import { motion as m } from 'framer-motion'
import cloud from '../assets/cloud.png'
import StraightLineWithDots from './StraightLineWitthDots';

const Slider = ({ slides }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    // Delay for 5 seconds
    const delayTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, 5000); // 5000 milliseconds (5 seconds)
  
    return () => clearTimeout(delayTimer);
  }, [slides.length]);
  

  if (!showContent) {
    return (
    <div className="bg-img w-screen h-screen flex justify-center items-center">
      <h1 className='text-8xl montserrat text-white font-semibold py-10'>project</h1>
    </div>
    )
  }

  return (
    <>
      <PlusSign activeSlideIndex={currentSlideIndex} className='hidden md:block' />
    <div className='hidden md:block w-full h-full'>
      <m.div className="w-screen h-screen flex overflow-visible scale-75 " 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}>
      {slides.map((slide, index) => (
        <div
        key={index}
            className={`grid grid-cols-7 gap-8 h-full justify-center items-center mx-[15%] mt-[5%] pl-10 slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${130 * currentSlideIndex}%)`,
            }}
            >
            <img src={cloud} alt='cloud' className='absolute -top-20 left-48 w-1/2 z-100 opacity-70 moveLeft' />
            <img src={slide.imageUrl} alt={`Slide ${index}`} className='col-span-3 w-full py-10' />
            <div className='col-span-3'>
              <span className='text-white opacity-30 font-bold montserrat text-9xl'>0{index + 1}</span>
              <h1 className='text-white text-2xl montserrat font-bold pb-4'>{slide.heading}</h1>
              <p className='text-white'>{slide.text}</p>
              <Link to={slide.id}>
                <button className='py-2 px-8 bg-white mt-4 text-xs font-semibold tracking-widest mid-z'>READ MORE</button>
              </Link>
            </div>
          </div>
        ))}
        </m.div>
    </div>
    <div className='block md:hidden'>
      <m.div className="flex" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, delay: 1, ease: 'easeOut' }}>
      {slides.map((slide, index) => (
        <m.div
        key={index}
            className={`block h-full justify-center items-center mx-auto pl-10 slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${100 * currentSlideIndex}%)`,
            }}
            whileHover={() => rubberBand}
            >
            <img src={slide.imageUrl} alt={`Slide ${index}`} className='w-[80%] py-10 mt-[45%]' />
            <div className='w-[80%]'>
              <h1 className='text-white text-xl montserrat font-bold pb-4'>{slide.heading}</h1>
              <p className='text-white text-xs'>{slide.text}</p>
              <Link to={slide.id}>
                <button className='py-2 px-8 bg-white mt-4 text-xs font-semibold tracking-widest'>READ MORE</button>
              </Link>
            </div>
          </m.div>
        ))}
        </m.div>
    </div>
      <StraightLineWithDots currentSlideIndex={currentSlideIndex} />
    </>
  );
};

export default Slider
