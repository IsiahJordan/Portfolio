import React from "react";

type TabData = {
  label: string;
  action: () => void;
};

type HeaderProps = {
  lastname: string;
  tabs: TabData[];
};

type SectionProps = {
  items: TabData[];
};

type ContactProps = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export {TabData, HeaderProps, SectionProps};
