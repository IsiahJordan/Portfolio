import React from "react";

const BrandService: React.FC = () => {
  return (
    <div className="brand w-full flex justify-center mt-15 flex-col md:flex-row">
      <span className="mr-[64px] ml-[64px] mt-15 text-center md:text-center">
        <div className="text-white text-[36px]">
          Do You Need <p className="inline purple-text">Integrate AI?</p>
        </div>
        <div className="text-white text-[22px]">Do you need AI solution? I got you.</div>
      </span>

      <div className="w-[2px] mr-[64px] bg-white opacity-[.20] h-[150px] md:h-[200px] flex-shrink-0 mx-6 my-6 md:mx-[20px] hidden md:block"></div>

      <span className="mr-[64px] ml-[64px] mt-15 text-center md:text-center">
        <div className="text-white text-[36px]">
          Do You Need <p className="inline purple-text">Data Mining?</p>
        </div>
        <div className="text-white text-[22px] text-center md:text-center">
          How about data mining? I could also <br />
          do that.
        </div>
      </span>

      <div className="w-[2px] bg-white opacity-[.20] h-[150px] md:h-[200px] flex-shrink-0 mx-6 my-6 md:mx-[20px] hidden md:block"></div>

      <span className="ml-[64px] mr-[64px] mt-15 text-center md:text-center">
        <div className="text-white text-[36px]">
          Do You Need <p className="inline purple-text">Data Preprocessing?</p>
        </div>
        <div className="text-white text-[22px] text-center md:text-center">
          Need me to process your data? No problem.
        </div>
      </span>
    </div>
  );
};;

const BrandWork: React.FC = () => {
  return (
    <div className="brand w-full flex flex-col md:flex-row h-auto text-white mt-30 px-4 md:px-[300px]">
      <span className="pt-15 text-center md:text-left">
        <div className="text-[32px] md:text-[44px]">
          Hands-On <span className="purple-text">Highlights...</span>
        </div>
        <div className="text-[20px] md:text-[24px] w-full whitespace-nowrap opacity-[.60]">
          Description matches images from Left to Right
        </div>
      </span>

      <div className="w-[2px] bg-white opacity-[.20] h-[150px] md:h-[200px] flex-shrink-0 mx-6 my-5 md:mx-[40px] hidden md:block"></div>

      <span className="text-[18px] md:text-[22px] mt-auto mb-auto text-center md:text-center pb-5">
        Curious to see what I’ve built? Look no further below. Demonstrating my proud works over a years-long grind. Now, evaluate me as the man for the job.
      </span>
    </div>
  );
};


export { BrandService, BrandWork };

