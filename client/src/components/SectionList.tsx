import React from "react";
import { SectionProps, TabData } from "../utilities/types.ts";

const SectionList: React.FC<SectionProps> = ({ items }) => {
  const handleTabClick = (item: TabData) => {
    item.action();
  };

  return (
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[32px] text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
      {items.map((item, index) => (
        <li
          onClick={() => handleTabClick(item)}
          className="tab-btn hover:underline decoration-4 decoration-purple-500 underline-offset-8 cursor-pointer"
          key={index}
        >
          {item.label.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default SectionList;

