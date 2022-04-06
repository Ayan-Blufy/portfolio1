import React, { useState,useEffect } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css"


import Logo1 from '../assets/logoa.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useEffect(() => {

    Aos.init({ duration: 5000 });
  }, [])

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30'>
      <div>
        <img src={Logo1} alt='Logo Image' style={{ width: '80px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500} >
            <span  class="text-green-300 mr-2">01.</span><span>Home</span>
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            <span class="text-green-300 mr-2">02.</span><span>About</span>
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            <span class="text-green-300 mr-2">03.</span><span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            <span class="text-green-300 mr-2">04.</span><span>Contact</span>
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars className='text-2xl cursor-pointer' /> : <FaTimes className='text-2xl cursor-pointer'/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
    
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

     
    </div>
  );
};

export default Navbar;
