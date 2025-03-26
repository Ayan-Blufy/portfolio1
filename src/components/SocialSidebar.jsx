import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed bottom-0 left-10 hidden lg:block">
      <ul className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-gray-400 after:mt-6">
        <li className="transition-transform hover:-translate-y-1">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li className="transition-transform hover:-translate-y-1">
          <a 
            href="https://linkedin.com/in/ayan-modak-201aab226/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li className="transition-transform hover:-translate-y-1">
          <a 
            href="https://www.instagram.com/oxby7e/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </li>
        <li className="transition-transform hover:-translate-y-1">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;