import React, { useState } from "react";
import CardDescr from "./Card.tsx";
import Dashimage from "../assets/dashboard.png";
import Specimage from "../assets/spectrogram.png";
import Engimage from "../assets/engineer.png";

const WorkList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      id="works"
      className="w-full mt-12 flex flex-row flex-wrap sm:flex-nowrap px-[20px] sm:px-[100px] md:px-[150px] lg:px-[230px] xl:px-[248px]"
    >
      <span className="text-center w-full sm:w-auto mr-10">
        <div className="text-white text-[21px] underline underline-offset-10 opacity-[0.60] mb-10">
          Hover on the Image to Read Description
        </div>
        <div className="flex flex-col sm:flex-col gap-4">
          <CardDescr
            title={"Data Engineering"}
            descr={
              "This is a project that is all about data pipelines and integrating Apache Airflow to scrape and clean datasets."
            }
          />
          <CardDescr
            title={"Machine Learning"}
            descr={
              "A demonstration of the model prowess on solving general problems of the world."
            }
          />
          <CardDescr
            title={"Data Analysis"}
            descr={
              "Data cleaning and data visualization using PowerBI to create a comprehensive dashboard."
            }
          />
        </div>
      </span>

      <div className="hidden sm:block w-[2px] bg-white opacity-[.20] mx-6 mr-20"></div>

      <span className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8 sm:mt-0">
        {[Dashimage, Engimage, Specimage].map((src, i) => {
          const isHovered = hoveredIndex === i;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative group overflow-hidden rounded-lg border border-white border-opacity-10
                transition-all duration-500 ease-in-out
                ${isAnyHovered ? (isHovered ? "sm:flex-[6]" : "sm:flex-[2]") : "sm:flex-1"}
                w-full sm:w-auto
              `}
              style={{
                minWidth: 0,
              }}
            >
              <img
                src={src}
                alt="project screenshot"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm bg-black/30">
                <div className="text-white text-sm text-center text-[30px] leading-relaxed max-w-[90%] px-4">
                  {i === 0 &&
                    "This is the Sales Dataset from kaggle that was cleanse in Excel, creating KPI's for the sales data and import on PowerBI."}
                  {i === 1 &&
                    "Using scraping tools and automation like selenium and beautifulsoup. I extract all fixed number of data from pages set by the YAML configs. Then taking the result, I crunched down the data using Spark and generate analytics from the extracted raw data. Finally stored in postgresql, I can orchestrate a generation of statistics visually with matplotlib."}
                  {i === 2 &&
                    "Here is an intensive analysis of the frog audio files using Mel-Spectograms to generate augmentated data. This will be used on the Multi-Modal CNN classifiers in sets of 2k."}
                </div>
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default WorkList;

