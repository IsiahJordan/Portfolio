import React from "react";
import Codeimage from "../assets/code.png";
import Analysisimage from "../assets/data-analysis.png";
import DBimage from "../assets/Database-icon.png";
import Frameimage from "../assets/frame.png";

const skillsData = [
  {
    title: "Programming Languages",
    image: Codeimage,
    description: `I have experience with C++, C, R, Python, C#, Rust, Java, JavaScript, PHP, and Lua. 
      My strongest language is Python. I also work with Bash scripts and frontend technologies like HTML, CSS, and SCSS.`,
  },
  {
    title: "Data Analysis Tools",
    image: Analysisimage,
    description: `For cleansing data, I’ve used Pandas, Scikit-Learn, and Excel. 
      For data visualization: PowerBI and Tableau are my tools of choice.`,
  },
  {
    title: "Database Tools",
    image: DBimage,
    description: `If you require me to use relational databases,
      I can use MYSQL, SQL Server, and Postgresql.
      I can also use NoSQL with MongoDB.`,
  },
  {
    title: "Frameworks",
    image: Frameimage,
    description: `There are many libraries that I use to do  
    machine learning, full stack, and overall programming. 
    I have used Flask, React, NextJs, and Node for the 
    full stack. While I have used Tensorflow, Pytorch, FastAPI, 
    BeautifulSoup, and Numpy.`,
  },
];

const Skills: React.FC = () => {
  return (  
    <div id="skills" className="w-full px-4 sm:px-6 md:px-[80px] lg:px-[120px] xl:px-[340px]">
      <div className="text-white text-center text-[32px] sm:text-[40px] md:text-[52px] mt-[50px] md:mt-[90px]">
        What Can I <span className="purple-text">Provide?</span>
      </div>
      <div className="text-white opacity-60 mt-3 text-center text-[18px] sm:text-[22px] md:text-[28px] mb-10">
        An overview of the Skillsets
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row p-6 rounded-xl bg-[rgba(47,47,47,0.75)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] shadow-lg hover:shadow-[0_0_20px_rgba(187,118,255,0.3)] transition-shadow duration-300"
          >
            <img
              className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] object-contain mb-4 sm:mb-0 sm:mr-5 mx-auto sm:mx-0"
              src={skill.image}
              alt={`${skill.title} Icon`}
            />
            <div className="text-white text-center sm:text-left">
              <div className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold mb-2">
                {skill.title}
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[16px] opacity-60 leading-relaxed">
                {skill.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

