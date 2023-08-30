import { useState } from 'react'
import {Link} from 'react-router-dom'
import { TbMenu } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'
import logo from '../assets/logo.png'
import { motion as m } from 'framer-motion'

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const openMenu = () => {
        setShowNav(true);
        document.querySelector('nav').style.display = 'flex';
    };

    const closeMenu = () => {
        setShowNav(false);
        document.querySelector('nav').style.animation = 'moveDown 0.5s ease-in-out;';
        document.querySelector('nav').style.display = 'none';
    };

    const handleLinkClick = (e) => {
        e.stopPropagation();
        closeMenu();
    };

    const rubberBand = () => {
        return {
          transform:  [
            "scale3d(1, 1, 1)",
            "scale3d(1.4, .55, 1)",
            "scale3d(.75, 1.25, 1)",
            "scale3d(1.25, .85, 1)",
            "scale3d(.9, 1.05, 1)",
            "scale3d(1, 1, 1)",
          ]
      }
      }

  return (
    <>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease:
            'easeOut' }} className="absolute w-full flex justify-between items-center py-4 px-8 higher-z">
            <Link to='/'><m.img src={logo} className='h-10' alt="" /></Link>
           <div>
            <div className='transition duration-1000'>
            {!showNav ? 
                <TbMenu className='absolute right-8 top-4 text-white text-4xl cursor-pointer' onClick={openMenu} /> : 
                <IoMdClose className='absolute right-8 top-4 text-white text-4xl cursor-pointer' onClick={closeMenu} />
            }
            </div>
           </div>
        </m.div>
        
        {showNav && (
            <nav
            className={`fixed flex overflow-hidden flex-col w-full h-screen bg-[#000] high-z ${
                showNav ? 'moveUp' : 'moveDown'
            }`}
        >
            <m.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, delay: 1, ease: 'easeOut' }}
                className='text-right absolute bottom-[5%] right-[5%]'
            >
                <m.li className="leading-10 text-4xl text-white font-light tracking-widest poppins transition" whileHover={() => rubberBand}>
                    <Link to='/' onClick={handleLinkClick}>Home</Link>
                </m.li>
                <m.li className="leading-10 text-4xl mt-8 text-white font-light tracking-widest poppins transition" whileHover={() => rubberBand}>
                    <Link to='/about' onClick={handleLinkClick}>About</Link>
                </m.li>
                <m.li className="leading-10 text-4xl mt-8 text-white font-light tracking-widest poppins transition" whileHover={() => rubberBand}>
                    <Link to='/project' onClick={handleLinkClick}>Project</Link>
                </m.li>
                <m.li className="leading-10 text-4xl mt-8 text-white font-light tracking-widest poppins transition" whileHover={() => rubberBand}>
                    <Link to='/phylosophy' onClick={handleLinkClick}>Phylosophy</Link>
                </m.li>
                <m.li className="leading-10 text-4xl mt-8 text-white font-light tracking-widest poppins transition" whileHover={() => rubberBand}>
                    <Link to='/contact' onClick={handleLinkClick}>Contact</Link>
                </m.li>
            </m.ul>
        </nav>
        )}

    </>
  )
}

export default Navbar