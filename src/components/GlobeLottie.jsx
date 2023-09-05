import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/JmlZPLEzxU.json'; // Replace with your animation file
import { motion as m } from 'framer-motion'

function GlobeLottie() {
    return (
      <m.div 
        initial={{ x: '1000%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 3, delay: 3, ease: 'easeOut' }}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '500px',
          height: '500px',
          marginTop: '10%',
          backgroundColor: 'transparent'
        }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className='scalingUp'
        />
      </m.div>
    );
  }
  
export default GlobeLottie