import React from "react";
import Pyimage from "../assets/py-ic.png";
import Eximage from "../assets/ex-ic.png";
import Biimage from "../assets/bi-ic.png";
import Rapimage from "../assets/rm-ic.png";

const AboutSec: React.FC = () => {
  return (
    <div id="about" className="mt-[64px] w-full px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1 text-white">
          <h2 className="text-[36px] lg:text-[52px] text-center lg:text-left">
            I'm an <span className="purple-text">AI Developer</span>
          </h2>
          <p className="opacity-[.60] text-[20px] lg:text-[24px] text-center lg:text-left">
            Currently, an intern for OTIS Philippines as an AI Researcher
          </p>
          <p className="text-[18px] lg:text-[22px] mt-4 text-center lg:text-left leading-relaxed">
            A student of Adamson University, pursuing a Bachelor's Degree in Computer Science.
            In this pursuit, I have chosen the path of Data Science. In any data-related role,
            I have challenged myself to be flexible in all aspects of data — whether it's data gathering,
            data cleansing, or building AI models. I’ve prepared myself for those challenges.
          </p>
        </div>

        <div className="flex-1 flex flex-row gap-6 justify-center items-center relative">
          <div className="flex w-full justify-start">
            <img className="w-[100px] lg:w-[150px]" src={Pyimage} alt="Python Icon" />
          </div>
          <div className="flex w-full justify-end">
            <img className="w-[90px] lg:w-[140px]" src={Eximage} alt="Excel Icon" />
          </div>
          <div className="flex w-full justify-start">
            <img className="w-[100px] lg:w-[150px]" src={Biimage} alt="PowerBI Icon" />
          </div>
          <div className="flex w-full justify-end">
            <img className="w-[95px] lg:w-[145px]" src={Rapimage} alt="RapidMiner Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;

