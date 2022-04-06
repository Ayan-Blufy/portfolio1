import React,{useEffect} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import cv from '../assets/cv.pdf'
import Aos from 'aos';
import { BsLinkedin } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si'

import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
   
      Aos.init({duration:2000});
  }, [])

  return (
    <div name='home'  className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div data-aos="fade-up" className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h4 className="text-green-200 mb-3">Hi, my name is</h4>
        <h1 className="text-white  text-3xl sm:text-6xl font-poppins font-extrabold  mb-5 md:mb-10">Ayan Modak.</h1>
        <h1 className="text-white mb-8 text-3xl sm:text-7xl font-poppins font-black">I build things for the web.</h1>
        <div className="w-full sm:w-[60%] mb-12">
          <p className="text-blue-100 leading-relaxed mb-3">
            I am pursuing <span className="text-green-200">Computer Science Engineering</span>.<br />
            I love working on <span className='text-green-200'>frontend</span> as well as <span className='text-green-200'>backend</span> side of web projects.<br />
            I am a 2 star coder on <span className='text-green-200'>Codechef</span>.
          </p>
        </div>

        <div className="text-3xl md:text-4xl text-theme-gray-light flex w-[80px] sm:w-[100px] justify-between align-center cursor-pointer my-3 mb-5">
          <a href='https://www.linkedin.com/in/ayan-modak-201aab226/' target='_blank'>< BsLinkedin className="hover:text-theme-aquamarine"  /></a> 
          <a href="https://github.com/Ayan-Blufy" target='_blank'><SiGithub className="hover:text-theme-aquamarine" /></a>
        </div>

        <a href={cv} download className='text-white max-w-max group border-2 px-6 py-3 my-2 flex items-center hover:text-green-200 hover:border-green-200'>
          Resume

        </a>


      </div>
    </div>
  );
};

export default Home;
