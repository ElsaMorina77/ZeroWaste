import React from "react";

import { Img, Text, Button, Input } from "components";
import { useNavigate } from "react-router-dom";

const DesktopEightPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/desktopnine");
  }
  function handleNavigate51() {
    navigate("/desktopnine");
  }
  function handleNavigate52() {
    navigate("/desktopnine");
  }
  function handleNavigate53() {
    navigate("/desktopnine");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer sm:max-h-[150px] max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate}
          alt="biglogoFourteen"
        />
        <Text
          className="sm:mt-[20px] md:mt-[26px] mt-[38px] not-italic text-black_900 w-[auto]"
          as="h3"
          variant="h3"
        >
          Quantity needed:
        </Text>
        <div className="flex flex-col items-center justify-start max-w-[361px] sm:mb-[201px] md:mb-[260px] mb-[378px] ml-[auto] mr-[auto] md:mt-[111px] mt-[162px] sm:mt-[86px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Button
            className="common-pointer cursor-pointer font-normal not-italic sm:text-[32px] md:text-[34px] text-[36px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate53}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            1
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal mt-[131px] sm:mt-[69px] md:mt-[90px] not-italic sm:text-[32px] md:text-[34px] text-[36px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate52}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            2
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal md:mt-[101px] mt-[147px] sm:mt-[78px] not-italic sm:text-[32px] md:text-[34px] text-[36px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate51}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            3
          </Button>
          <Input
            className="placeholder:bg-red_200_49 font-normal not-italic p-[0] sm:text-[32px] md:text-[34px] text-[36px] placeholder:text-red_A701 text-red_A701 w-[100%]"
            wrapClassName="md:mt-[95px] mt-[139px] sm:mt-[74px] w-[100%]"
            name="GroupNinetyNine"
            placeholder="Select"
            shape="RoundedBorder49"
            size="sm"
            variant="FillRed20049"
          ></Input>
        </div>
      </div>
    </>
  );
};

export default DesktopEightPage;
