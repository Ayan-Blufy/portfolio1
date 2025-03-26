import React from "react";

const EmailSidebar = () => {
  return (
    <div className="fixed bottom-0 right-10 hidden lg:block">
      <div className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-gray-400 after:mt-6">
        <a 
          href="mailto:modakaryan11@gmail.com" 
          className="font-mono text-sm tracking-widest text-white hover:text-green-300 transition-colors vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          modakaryan11@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailSidebar;