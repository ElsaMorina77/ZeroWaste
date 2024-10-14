import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopSevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/desktopeight");
  }
  function handleNavigate12() {
    navigate("/desktopeight");
  }
  function handleNavigate13() {
    navigate("/desktopeight");
  }
  function handleNavigate14() {
    navigate("/desktopeight");
  }
  function handleNavigate15() {
    navigate("/desktopeight");
  }
  function handleNavigate16() {
    navigate("/desktopeight");
  }
  function handleNavigate17() {
    navigate("/desktopeight");
  }
  function handleNavigate18() {
    navigate("/desktopeight");
  }
  function handleNavigate19() {
    navigate("/");
  }
  function handleNavigate54() {
    navigate("/desktopfive");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[49px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer sm:h-[150px] max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate19}
          alt="biglogoFourteen"
        />
        <Text
          className="sm:mt-[40px] md:mt-[60px] mt-[88px] not-italic sm:text-[25px] text-black_900 w-[auto]"
          as="h3"
          variant="h3"
        >
          Most Ordered:
        </Text>
        <div className="flex flex-col font-inter items-center justify-start max-w-[248px] mb-[10px] sm:mb-[5px] md:mb-[6px] ml-[auto] mr-[auto] sm:mt-[32px] md:mt-[41px] mt-[61px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_fettuccinealfr.png"
            className="common-pointer max-w-[100%] sm:ml-[px] sm:w-[100%] w-[99%]"
            onClick={handleNavigate18}
            alt="fettuccinealfr"
          />
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[76%] sm:ml-[10px] sm:mt-[10px] md:mt-[21px] mt-[31px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate17}
            shape="RoundedBorder22"
            size="sm"
            variant="FillRed20049"
          >
            Alfredo
          </Button>
          <Img
            src="images/img_chickenfriedr.png"
            className="common-pointer max-w-[100%] sm:ml-[px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[100%] w-[99%]"
            onClick={handleNavigate16}
            alt="ChickenFriedR"
          />
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[76%] sm:ml-[10px] sm:mt-[10px] mt-[13px] md:mt-[8px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate15}
            shape="RoundedBorder22"
            size="sm"
            variant="FillRed20049"
          >
            Fried Rice
          </Button>
          <Img
            src="images/img_onigirijapanes.png"
            className="common-pointer max-w-[100%] sm:mt-[22px] md:mt-[29px] mt-[43px] sm:w-[100%] w-[99%]"
            onClick={handleNavigate14}
            alt="onigirijapanes"
          />
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[76%] sm:ml-[10px] sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate13}
            shape="RoundedBorder22"
            size="4xl"
            variant="FillRed20049"
          >
            Onigiri
          </Button>
          <Img
            src="images/img_pica1.png"
            className="common-pointer max-w-[100%] sm:mt-[32px] md:mt-[41px] mt-[61px] sm:w-[100%] w-[99%]"
            onClick={handleNavigate12}
            alt="picaOne"
          />
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[76%] sm:ml-[10px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
            onClick={handleNavigate11}
            shape="RoundedBorder22"
            size="sm"
            variant="FillRed20049"
          >
            Pizza
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[67%] sm:ml-[10px] sm:mt-[32px] md:mt-[41px] mt-[61px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate54}
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

export default DesktopSevenPage;
