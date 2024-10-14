import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopSeventeenPage = () => {
  const navigate = useNavigate();

  function handleNavigate44() {
    navigate("/");
  }
  function handleNavigate58() {
    navigate("/desktopthree");
  }
  function handleNavigate59() {
    navigate("/desktopten");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] p-[128px] sm:p-[15px] md:p-[88px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer sm:h-[150px] max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate44}
          alt="biglogoFourteen"
        />
        <Text
          className="leading-[normal] sm:mt-[119px] md:mt-[154px] mt-[225px] not-italic text-black_900 text-center sm:w-[100%] w-[45%]"
          as="h4"
          variant="h4"
        >
          Are you a student or our worker?
          <br />
          Select below:
        </Text>
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[453px] sm:mb-[371px] md:mb-[479px] mb-[697px] ml-[auto] mr-[auto] mt-[124px] sm:mt-[66px] md:mt-[85px] sm:pl-[15px] sm:pr-[15px] rounded-radius295 w-[100%]">
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[42%] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate59}
            shape="RoundedBorder29"
            size="2xl"
            variant="FillRedA701"
          >
            Restaurant
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[42%] sm:ml-[42px] md:ml-[54px] ml-[79px] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate58}
            shape="RoundedBorder29"
            size="2xl"
            variant="FillRedA701"
          >
            Student
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopSeventeenPage;
