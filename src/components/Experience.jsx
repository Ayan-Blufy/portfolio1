import React, { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";

const experienceData = [
  {
    id: 1,
    role: "Founder & CEO",
    company: "Zahabi",
    time: "2024 - Present",
    points: [
      "Developing a platform that allows users to collateralize gold for instant loans",
      "Building investment products that enable users to invest in gold-backed tokens",
      "Leading a team of developers and financial experts to bring financial inclusion through gold",
      "Securing partnerships with gold custodians and financial institutions"
    ],
    tech: ["React", "TypeScript", "Blockchain", "Smart Contracts"]
  },
  {
    id: 2,
    role: "Senior Financial Analyst",
    company: "Golden Trust",
    time: "2020 - 2024",
    points: [
      "Led the development of innovative gold-backed financial products",
      "Analyzed market trends and created investment strategies for high-net-worth clients",
      "Increased portfolio performance by 32% through strategic allocation to precious metals",
      "Developed risk assessment models for commodity-based investments"
    ],
    tech: ["Financial Modeling", "Data Analysis", "Risk Management"]
  },
  {
    id: 3,
    role: "Financial Technology Consultant",
    company: "MetalTech",
    time: "2018 - 2020",
    points: [
      "Advised fintech startups on integration of precious metals into their product offerings",
      "Developed API connections between gold dealers and digital platforms",
      "Created educational content about gold investments for digital platforms",
      "Optimized trading algorithms for precious metals markets"
    ],
    tech: ["APIs", "Python", "Financial Education", "Market Analysis"]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <header class="mb-16">
                        <h3 class="text-4xl font-poppins text-blue-200 font-extrabold"><span class="text-green-300 text-xl mr-3">03.</span><span class="font-bold"></span>Experience</h3>
                    </header>
        
        <div className="mt-12 lg:flex">
          {/* Tabs */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible mb-6 lg:mb-0 lg:w-48">
            {experienceData.map(exp => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-4 py-3 lg:border-l-2 whitespace-nowrap font-mono text-sm transition-all duration-300 ${
                  activeTab === exp.id 
                    ? 'text-green-300 border-b-2 lg:border-b-0 border-green-300 lg:bg-green-300/5' 
                    : 'border-gray-200 text-white hover:text-green-300 hover:bg-green-300/5'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="lg:pl-8 lg:ml-8 lg:border-l border-gray-200">
            {experienceData.map(exp => (
              <div 
                key={exp.id} 
                className={`transition-all duration-500 ${
                  activeTab === exp.id ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <h3 className="text-xl font-medium mb-1 text-white">
                  {exp.role} <span className="text-green-300">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-green-300 mb-4">{exp.time}</p>
                
                <ul className="space-y-4 text-white">
                  {exp.points.map((point, index) => (
                    <li key={index} className="flex">
                      <span className="text-green-300 mr-2 flex-shrink-0 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span key={index} className="text-xs font-mono py-1 px-2 text-green-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;