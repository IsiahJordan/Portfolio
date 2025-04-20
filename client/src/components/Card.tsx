import React from "react";

type Props = {
  title: string;
  descr: string;
};
const CardDescr: React.FC<Props> = ({title, descr}) => {
  return (
    <div className="w-[257px] text-center card-desc ml-auto mr-auto mt-5 ">
      <div className="w-full h-[7px] purple-bg">
      </div>
      <div className="w-full h-[226px] text-white p-5">
        <div className="text-[24px] ml-auto mr-auto mb-2 mt-2">
          {title}
        </div>
        <div className="text-[22px] m-auto opacity-[.60] content-start">
          {descr}
        </div>
      </div>
    </div>
  )
}

export default CardDescr;
