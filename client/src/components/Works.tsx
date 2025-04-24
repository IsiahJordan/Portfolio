import React, { useState, useRef, useEffect } from "react";
import CardDescr from "./Card.tsx";
import Dashimage from "../assets/dashboard.png";
import Specimage from "../assets/spectrogram.png";
import Engimage from "../assets/engineer.png";

const WorkList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const [cardHeight, setCardHeight] = useState<number>(0);

  useEffect(() => {
    if (cardContainerRef.current) {
      setCardHeight(cardContainerRef.current.clientHeight);
    }
  }, []);

  const hoverTexts = [
    "Excel sales data cleansed and visualized in PowerBI.",
    "Scraped, analyzed with Spark, and visualized with matplotlib.",
    "Frog audio data transformed via Mel-Spectrograms for CNN use.",
  ];

  const images = [Dashimage, Engimage, Specimage];

  return (
    <div
      id="works"
      className="w-full mt-12 px-6 sm:px-[80px] md:px-[120px] lg:px-[160px] xl:px-[200px] flex flex-col sm:flex-row gap-10"
    >
      {/* Card column */}
      <div
        ref={cardContainerRef}
        className="flex flex-col gap-6 flex-1 justify-start"
      >
        <div className="text-white text-[21px] underline underline-offset-8 opacity-60 mb-4 text-center sm:text-left">
          Hover on the Image to Read Description
        </div>

        <CardDescr
          title="Data Engineering"
          descr="This is a project that is all about data pipelines and integrating Apache Airflow to scrape and clean datasets."
        />
        <CardDescr
          title="Machine Learning"
          descr="A demonstration of the model prowess on solving general problems of the world."
        />
        <CardDescr
          title="Data Analysis"
          descr="Data cleaning and data visualization using PowerBI to create a comprehensive dashboard."
        />
      </div>

      {/* Image column */}
      <div
        className="flex flex-col gap-6 flex-1"
        style={{ height: cardHeight || "auto" }}
      >
        {images.map((src, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group overflow-hidden rounded-xl border border-white border-opacity-10 flex-1"
            >
              <img
                src={src}
                alt={`project-${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4">
                <p className="text-white text-center text-sm leading-relaxed">
                  {hoverTexts[i]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkList;

