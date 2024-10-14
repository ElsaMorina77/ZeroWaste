import React from "react";

import { Img, Text, Stack, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopFourteenPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/");
  }
  function handleNavigate49() {
    navigate("/desktoptwelve");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] p-[4px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer sm:h-[150px] max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate2}
          alt="biglogoFourteen"
        />
        <div className="border-2 border-gray_501 border-solid flex flex-col items-center justify-end max-w-[328px] ml-[auto] mr-[auto] p-[11px] sm:p-[5px] md:p-[7px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-black_900 w-[auto]"
            as="h3"
            variant="h3"
          >
            COMPOST
          </Text>
        </div>
        <Stack className="h-[373px] max-w-[496px] ml-[auto] mr-[auto] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Img
            src="images/img_female_193X193.png"
            className="absolute bottom-[0] sm:h-[184px] h-[193px] inset-x-[0] max-w-[100%] sm:max-w-[200px] mx-[auto] md:w-[132px] sm:w-[174px] w-[193px]"
            alt="Female"
          />
          <Text
            className="absolute leading-[normal] not-italic sm:text-[25px] text-black_900 text-center top-[0] w-[100%]"
            as="h5"
            variant="h5"
          >
            The food has expired!
            <br />
            Contact farmers that may help you with the 0 waste mission
          </Text>
        </Stack>
        <div className="flex flex-col items-center justify-start max-w-[194px] sm:mb-[32px] md:mb-[41px] mb-[61px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="font-poppins leading-[21.84px] md:leading-[normal] sm:leading-[normal] text-black_900 sm:text-center w-[100%] sm:w-[200px]"
            variant="body3"
          >
            Tammy Davis 📍1km
            <br />
            +1 216-920-9211
          </Text>
          <Img
            src="images/img_female_2.png"
            className="md:h-[133px] sm:h-[184px] h-[193px] max-w-[100%] sm:max-w-[200px] md:mt-[39px] sm:mt-[40px] mt-[58px] sm:w-[100%] md:w-[132px] w-[193px]"
            alt="Female One"
          />
          <Text
            className="font-poppins leading-[21.84px] md:leading-[normal] sm:leading-[normal] text-black_900 sm:text-center w-[100%] sm:w-[200px]"
            variant="body3"
          >
            Aamina Peterson 📍17km
            <br />
            +1 213-401-2579
          </Text>
          <Stack className="font-poppins h-[216px] sm:mt-[36px] md:mt-[47px] mt-[69px] relative w-[100%]">
            <Img
              src="images/img_female_194X194.png"
              className="absolute sm:h-[174px] h-[194px] max-w-[100%] top-[0] sm:w-[100%] md:w-[133px] w-[194px]"
              alt="Female Two"
            />
            <Text
              className="absolute bottom-[0] inset-x-[0] leading-[21.84px] md:leading-[normal] sm:leading-[normal] text-black_900 w-[100%]"
              variant="body3"
            >
              May Tyler 📍5km
              <br />
              +1 407-844-3491
            </Text>
          </Stack>
          <Img
            src="images/img_male.png"
            className="max-w-[100%] sm:mt-[30px] md:mt-[39px] mt-[58px] w-[100%]"
            alt="Male"
          />
          <Text
            className="font-poppins leading-[21.84px] md:leading-[normal] sm:leading-[normal] text-black_900 w-[100%]"
            variant="body3"
          >
            Willard Stuart 📍23km
            <br />
            +1 905-644-5254
          </Text>
          <Button
            className="common-pointer cursor-pointer font-inter font-normal min-w-[85%] sm:mt-[36px] md:mt-[47px] mt-[69px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate49}
            shape="RoundedBorder24"
            size="md"
            variant="FillGray500"
          >
            Back{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopFourteenPage;
