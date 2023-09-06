import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/MphAihcJD2.json'
import { motion as m } from 'framer-motion'

function GlobeLottie() {
    return (
      <m.div 
        initial={{ x: '1000%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 3, delay: 3, ease: 'easeOut' }}
        className='relative w-[800px] h-[800px] pt-[10%] -ml-[50%] md:ml-0'
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