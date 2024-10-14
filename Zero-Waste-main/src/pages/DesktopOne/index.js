import React from "react";

import { Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate73() {
    navigate("/desktoptwo");
  }

  return (
    <>
      <div className="bg-red_A700 flex flex-col font-inder justify-end mx-[auto] md:p-[155px] sm:p-[15px] p-[226px] w-[100%]">
        <Img
          src="images/img_group711.png"
          className="sm:flex sm:h-[300px] sm:items-center sm:justify-center max-w-[555px] md:ml-[194px] ml-[auto] md:mr-[101px] mr-[auto] md:mt-[196px] mt-[286px] sm:mt-[px] sm:mx-[px] sm:pl-[15px] sm:pr-[15px] sm:text-center w-[100%] sm:w-[300px]"
          alt="Group711"
        />
        <div className="flex flex-col items-center justify-start max-w-[263px] md:ml-[485px] ml-[auto] sm:ml-[px] md:mr-[11px] sm:mr-[9px] mr-[auto] sm:mt-[113px] md:mt-[146px] mt-[213px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Button
            className="common-pointer bg-transparent cursor-pointer sm:flex font-normal sm:h-[px] sm:items-center sm:justify-center not-italic sm:relative sm:text-[28px] md:text-[48px] text-[64px] text-center text-white_A700 w-[100%] sm:w-[100px]"
            onClick={handleNavigate73}
          >
            Continue{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
