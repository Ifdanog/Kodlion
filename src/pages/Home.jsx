import { useState } from 'react';
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Array of background images for each link
  const backgroundImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];

  return (
    <div className={`w-full h-screen bg-img bg-transition bg-cover bg-center bg-no-repeat bg-opacity-80 bg-img-${hoveredIndex}`}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="grid grid-cols-4 content-end h-screen text-center"
      >
        {backgroundImages.map((image, index) => (
          <Link
            to={index === 0 ? '/about' : index === 1 ? '/phylosophy' : index === 2 ? '/project' : '/contact'}
            className={`border-r border-grey h-screen text-center moveUp`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            key={index}
          >
            <h1 className='text-sm md:text-3xl text-white font-light montserrat leading-relaxed mt-[85vh]'>
              {index === 0
                ? 'We'
                : index === 1
                ? 'Design+Build'
                : index === 2
                ? 'Innovative Projects'
                : 'Join us'}
            </h1>
          </Link>
        ))}
      </m.div>
    </div>
  );
};

export default Home;
