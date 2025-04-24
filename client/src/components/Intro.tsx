import React from "react";
import profile from "../assets/formal.png";
import { ContractProps } from "../utilities/types.ts";

const IntroSec: React.FC<ContractProps> = ({isModalOpen, setModalOpen}) => { 
  return (
    <div
      id="home"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-[148px] xl:px-[338px] pt-10 md:pt-24 gap-10 md:gap-0"
    >
      <LeftPane 
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
      <RightPane />
    </div>
  );
};

const LeftPane: React.FC<ContractProps> = ({isModalOpen, setModalOpen}) => {
  const handleClick = () => {
    setModalOpen(!isModalOpen);
  }

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
      <div className="text-white text-[24px] sm:text-[28px] md:text-[32px]">
        Hello, I Am <span className="purple-text">Isiah Jordan Dimauanahan</span>
      </div>
      <div className="text-white text-[36px] sm:text-[44px] md:text-[58px] mt-2 md:mt-[-20px] flicker-text leading-tight">
        I know AI. Do you know AI?
      </div>
      <div className="text-white text-[20px] sm:text-[26px] md:text-[32px] opacity-60 mt-3 md:mt-[-15px] mb-8">
        Let’s build the next big thing together.
      </div>
      <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        <button className="text-black text-[18px] sm:text-[20px] md:text-[24px] bg-white rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer transition" onClick={handleClick}>
          Contact Me
        </button>
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="text-white pt-2 text-[18px] sm:text-[20px] md:text-[24px] underline underline-offset-4 hover:text-gray-300 transition-colors duration-300"
        >
          View Resume
        </a>

      </div>
    </div>
  );
};

const RightPane: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-[445px] h-auto rounded-full overflow-hidden glow-ring">
        <img
          className="w-full h-full object-cover rounded-full"
          src={profile}
          alt="My Formal Picture"
        />
      </div>
    </div>
  );
};

export default IntroSec;

