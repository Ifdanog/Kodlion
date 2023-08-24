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

    const handleLinkClick = (event) => {
        // Prevent event propagation to parent elements
        event.stopPropagation();
        closeMenu();
    };

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
            className={`fixed flex overflow-hidden flex-col w-full h-screen bg-black justify-center items-center high-z ${
                showNav ? 'moveUp' : 'moveDown'
            }`}
        >
            <m.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, delay: 1, ease: 'easeOut' }}
                className='text-center'
            >
                <li className="leading-10 text-white tracking-widest poppins transition hover:translate-x-2">
                    <Link to='/' onClick={handleLinkClick}>HOME</Link>
                </li>
                <li className="leading-10 text-white tracking-widest poppins transition hover:translate-x-2">
                    <Link to='/about' onClick={handleLinkClick}>ABOUT</Link>
                </li>
                <li className="leading-10 text-white tracking-widest poppins transition hover:translate-x-2">
                    <Link to='/project' onClick={handleLinkClick}>PROJECT</Link>
                </li>
                <li className="leading-10 text-white tracking-widest poppins transition hover:translate-x-2">
                    <Link to='/phylosophy' onClick={handleLinkClick}>PHYLOSOPHY</Link>
                </li>
                <li className="leading-10 text-white tracking-widest poppins transition hover:translate-x-2">
                    <Link to='/contact' onClick={handleLinkClick}>CONTACT</Link>
                </li>
            </m.ul>
        </nav>
        )}

    </>
  )
}

export default Navbar