import React from "react";

import { Img, Button, Text } from "components";
import { useNavigate } from "react-router-dom";

const DesktopThirteenPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/");
  }
  function handleNavigate4() {
    navigate("/");
  }
  function handleNavigate5() {
    navigate("/");
  }
  function handleNavigate6() {
    navigate("/");
  }
  function handleNavigate7() {
    navigate("/");
  }
  function handleNavigate50() {
    navigate("/desktoptwelve");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer sm:h-[150px] max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate3}
          alt="biglogoFifteen"
        />
        <Button
          className="cursor-pointer font-normal min-w-[24%] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic sm:text-[21px] md:text-[27px] text-[40px] text-black_900 text-center w-[max-content]"
          size="2xl"
          variant="OutlineGray501"
        >
          DONATION
        </Button>
        <Text
          className="leading-[normal] sm:mx-[0] not-italic sm:text-[27px] text-black_900 text-center sm:w-[100%] w-[36%]"
          as="h5"
          variant="h5"
        >
          The food is still good!
          <br />
          Choose some people that would love to have it
        </Text>
        <div className="flex flex-col justify-start max-w-[195px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:pt-[20px] w-[100%]">
          <Img
            src="images/img_female.png"
            className="max-w-[100%] sm:w-[100%] w-[99%]"
            alt="Female"
          />
          <Text
            className="font-poppins ml-[1px] mt-[3px] text-black_900 w-[auto]"
            variant="body4"
          >
            Rina organisation
          </Text>
          <div
            className="h-[10px] sm:h-[6px] md:h-[7px] mt-[13px] sm:mt-[6px] md:mt-[8px] overflow-hidden relative sm:w-[100%] w-[99%]"
            name="rectangleTwo"
          >
            <div className="w-full h-full absolute bg-gray_400_6b rounded-[5.15px]"></div>
            <div
              className="h-full absolute bg-red_A701  rounded-[5px]"
              style={{ width: "18%" }}
            ></div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-inter font-normal min-w-[88%] sm:ml-[3px] md:ml-[4px] ml-[7px] sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate7}
            shape="CircleBorder14"
            size="6xl"
            variant="FillRed20049"
          >
            Select
          </Button>
          <Img
            src="images/img_female_198X193.png"
            className="max-w-[100%] ml-[2px] sm:mt-[44px] md:mt-[57px] mt-[83px] sm:w-[100%] w-[99%]"
            alt="Female One"
          />
          <Text
            className="font-poppins ml-[3px] mt-[4px] text-black_900 w-[auto]"
            variant="body4"
          >
            Help organisation
          </Text>
          <div
            className="h-[10px] sm:h-[6px] md:h-[7px] ml-[2px] mt-[12px] sm:mt-[6px] md:mt-[8px] overflow-hidden relative sm:w-[100%] w-[99%]"
            name="rectangeSix"
          >
            <div className="w-full h-full absolute bg-gray_400_6b rounded-[5.15px]"></div>
            <div
              className="h-full absolute bg-red_A701  rounded-[5px]"
              style={{ width: "85%" }}
            ></div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-inter font-normal min-w-[88%] sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate6}
            shape="CircleBorder14"
            size="6xl"
            variant="FillRed20049"
          >
            Select
          </Button>
          <Img
            src="images/img_image15.png"
            className="max-w-[100%] ml-[1px] sm:mt-[39px] md:mt-[51px] mt-[75px] sm:w-[100%] w-[99%]"
            alt="imageFifteen"
          />
          <Text
            className="font-poppins ml-[1px] mt-[2px] text-black_900 w-[auto]"
            variant="body4"
          >
            For children in need
          </Text>
          <div
            className="h-[10px] sm:h-[6px] md:h-[7px] ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] overflow-hidden relative sm:w-[100%] w-[99%]"
            name="rectangleOne"
          >
            <div className="w-full h-full absolute bg-gray_400_6b rounded-[5.15px]"></div>
            <div
              className="h-full absolute bg-red_A701  rounded-[5px]"
              style={{ width: "50%" }}
            ></div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-inter font-normal min-w-[88%] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[14px] md:mt-[18px] mt-[27px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate5}
            shape="CircleBorder14"
            size="6xl"
            variant="FillRed20049"
          >
            Select
          </Button>
          <Img
            src="images/img_female_1.png"
            className="max-w-[100%] ml-[1px] sm:mt-[30px] md:mt-[39px] mt-[58px] sm:w-[100%] w-[99%]"
            alt="Female Two"
          />
          <Text
            className="font-poppins ml-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-black_900 w-[auto]"
            variant="body4"
          >
            Workers community
          </Text>
          <div className="flex flex-col items-center justify-start ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius515 sm:w-[100%] w-[99%]">
            <div className="bg-red_A701 h-[10px] sm:h-[6px] md:h-[7px] rounded-radius515 w-[100%]"></div>
          </div>
        </div>
        <div className="flex flex-col font-inter justify-start max-w-[171px] sm:mb-[114px] md:mb-[147px] mb-[215px] ml-[auto] mr-[auto] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Button
            className="common-pointer cursor-pointer font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate4}
            shape="CircleBorder14"
            size="6xl"
            variant="FillRed20049"
          >
            Select
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[96%] sm:ml-[5px] sm:mt-[47px] md:mt-[61px] mt-[89px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate50}
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

export default DesktopThirteenPage;
