import React, { useState, useEffect } from 'react';
import angle1SVGContent from '../assets/angle1.svg'; 
import { motion as m } from 'framer-motion'

const AngleShape = ({ currentSlideIndex }) => {
  const [svgContent, setSvgContent] = useState('');

  // Get all the paths you want to animate
const paths = document.querySelectorAll('.fil0');

// Define the animation duration and delay
const animationDuration = 1000; // in milliseconds
const animationDelay = 200; // in milliseconds

// Function to animate the paths based on the currentSlideIndex
function animatePaths(svgContent, currentSlideIndex) {
  // Create a new DOMParser
  const parser = new DOMParser();
  
  // Parse the SVG content
  const doc = parser.parseFromString(svgContent, 'image/svg+xml');
  
  // Get all the paths in the SVG
  const paths = doc.querySelectorAll('.fil0');
  paths.forEach((path, index) => {
    const delay = index * animationDelay; // Delay based on path index

    // Animate the path's fill attribute
    path.style.transition = `fill ${animationDuration}ms ease ${delay}ms`;
    
    if (index === currentSlideIndex) {
      path.style.fill = 'red'; // Change fill color for the current slide
    } else {
      path.style.fill = 'black'; // Reset fill color for other slides
    }
  });
}
animatePaths(paths, currentSlideIndex)

useEffect(() => {
  // Fetch the SVG content from the file
  fetch(angle1SVGContent)
    .then(response => response.text())
    .then(content => setSvgContent(content))
    .catch(error => console.error('Error fetching SVG content:', error));
}, []);

  return (
    <m.div 
      className='w-full h-full absolute bottom-5 higher-z text-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}>
     <svg
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className='w-full h-full mt-[45%]'
      />
    </m.div>
  );
};

export default AngleShape;
