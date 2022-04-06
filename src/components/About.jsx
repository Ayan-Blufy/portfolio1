import React, { useEffect } from 'react';
import im1 from '../images/avatar2.jpg'

import Aos from 'aos';
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {

    Aos.init({ duration: 2000 });
  }, [])

  const skills = ['Firebase', 'Next.js', 'React.js', 'Tailwindcss', 'Node.js', 'RestApi', 'Postman', 'MongoDB'];
  return (


    <section name="about" className="w-full h-full md:h-screen bg-[#0a192f]  ">
      <div data-aos="fade-up" className="max-w-5xl mx-auto px-6 lg:px-0">
        <header className="mb-16">
          <h3 className="text-2xl font-poppins text-theme-gray-light"><span className="text-theme-aquamarine text-base mr-3">02.</span><span className="font-bold">About Me</span></h3>
        </header>
        <div className="flex flex-wrap items-center">
          <div className="w-full tracking-widest">
            <p className="text-blue-100  leading-relaxed mb-3">
              Hello! My name is <span className="font-bold text-xl">Ayan </span>and I enjoy creating things that live on the internet.<br /> My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes and in this process after solving the bug along the path taught me a lot of new things.

            </p>
            <p className="text-blue-100  leading-relaxed mb-3">


              Looking for job in core <span className="text-theme-aquamarine font-bold text-xl">Backend</span>  also interested in <span className="text-theme-aquamarine font-bold text-xl">Blockchain</span>  development. And also knowledge of basics of <span className="text-theme-aquamarine font-bold text-xl">Cloud computing</span> . Recently working on projects related to blockchain. Looking forward to work in an organization where I can input my creative methodologies and out of the box thinking along with excellent work and learning environment.

            </p>

            <div data-aos="fade-up" className="">
              <h4 className="text-blue-100 font-bold text-2xl my-6">My Skills</h4>
              <div className="flex flex-wrap text-theme-gray-deep">
                {skills.map((ele, i) =>
                  <p className="w-1/2 sm:w-2/5 my-2" key={i}><span className="font-black text-theme-aquamarine text-xs mr-3">&gt;</span>{ele}</p>
                )}


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
