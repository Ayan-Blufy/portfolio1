import React,{useEffect}from 'react'

import Aos from 'aos';
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {

    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div name='contact' className='w-full h-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4'>


      <div data-aos="fade-up" className="max-w-5xl mx-auto px-6 lg:px-0">
        <header className="mb-16 text-center">
          <h3 className="text-xl font-poppins text-theme-gray-light"><span className="text-theme-aquamarine text-base mr-3">04.</span><span className="text-theme-aquamarine">What’s Next?</span></h3>
        </header>


        <div className="w-full  flex flex-col  justify-between content-center ">
          <h2 className=" text-blue-100 font-extrabold text-center text-2xl md:text-5xl mb-6">Get In Touch</h2>


          <div className="w-full h-full  flex flex-col justify-evenly items-center ">
            <p className="text-blue-100 text-center leading-relaxed mb-5 w-full md:w-1/2 space1">
              I’m  currently looking for any new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a href="mailto:modakaryan11@gmail.com" target="_blank"className='text-white max-w-max group border-2 px-6 py-3 my-8 flex items-center hover:text-green-200 hover:border-green-200'>
              Say Hello
            </a>

          </div>



        </div>
      </div>

    </div>

  )
}

export default Contact







