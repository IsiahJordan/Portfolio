import React from "react";
import SectionList from "./SectionList.tsx";
import { HeaderProps } from "../utilities/types.ts";

const Header: React.FC<HeaderProps> = ({ lastname, tabs }) => {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-[124px] xl:px-[300px] mt-[-30px] pt-2">
      <span className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-white">
        {lastname}
      </span>
      <div className="pt-2 md:pt-0">
        <SectionList items={tabs} />
      </div>
    </header>
  );
};

export default Header;

