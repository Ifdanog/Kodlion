import { useState } from 'react';
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Array of background images for each link
  const backgroundImages = [img1, img2, img3, img4];

  const rubberBand = {
    transform: [
      "scale3d(1, 1, 1)",
      "scale3d(1.4, .55, 1)",
      "scale3d(.75, 1.25, 1)",
      "scale3d(1.25, .85, 1)",
      "scale3d(.9, 1.05, 1)",
      "scale3d(1, 1, 1)",
    ]
  };

  return (
    <div className="bg-[#000] w-full h-screen relative overflow-hidden">
      {backgroundImages.map((image, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-full h-full bg-cover bg-center bg-no-repeat bg-opacity-70"
          style={{
            backgroundImage: `linear-gradient(to right, #000000e3, #000000e3),
            url(${image})`,
          }}
        ></m.div>
      ))}

      <div className="grid grid-cols-4 content-end h-screen text-center relative">
        {backgroundImages.map((_, index) => (
          <Link
            to={
              index === 0
                ? '/about'
                : index === 1
                ? '/phylosophy'
                : index === 2
                ? '/project'
                : '/contact'
            }
            className={`border-r border-grey h-screen text-center moveUp mid-z`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            key={index}
          >
            <m.h1
              className="text-sm md:text-3xl text-white font-light montserrat leading-relaxed mt-[85vh] transition duration-1000"
              whileHover={rubberBand}
            >
              {index === 0
                ? 'We'
                : index === 1
                ? 'Design+Build'
                : index === 2
                ? 'Innovative Projects'
                : 'Join us'}
            </m.h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
