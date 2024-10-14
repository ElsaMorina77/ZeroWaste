import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopSixPage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/");
  }
  function handleNavigate21() {
    navigate("/desktopeight");
  }
  function handleNavigate22() {
    navigate("/desktopeight");
  }
  function handleNavigate23() {
    navigate("/desktopeight");
  }
  function handleNavigate24() {
    navigate("/desktopeight");
  }
  function handleNavigate25() {
    navigate("/desktopeight");
  }
  function handleNavigate26() {
    navigate("/desktopeight");
  }
  function handleNavigate27() {
    navigate("/desktopeight");
  }
  function handleNavigate28() {
    navigate("/desktopeight");
  }
  function handleNavigate500() {
    navigate("/desktopfive");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] sm:p-[15px] md:p-[25px] p-[37px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer sm:h-[150px] max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate20}
          alt="biglogoFourteen"
        />
        <Text
          className="font-inder sm:mt-[14px] md:mt-[18px] mt-[27px] not-italic sm:text-[25px] text-black_900 w-[auto]"
          as="h3"
          variant="h3"
        >
          Our Picks:{" "}
        </Text>
        <Img
          src="images/img_salad2.png"
          className="common-pointer sm:h-[200px] sm:max-h-[200px] sm:max-w-[250px] max-w-[252px] sm:mb-[10px] ml-[auto] mr-[auto] sm:mt-[43px] md:mt-[55px] mt-[81px] sm:pl-[15px] sm:pr-[15px] sm:py-[px] w-[100%] sm:w-[250px]"
          onClick={handleNavigate28}
          alt="saladTwo"
        />
        <div className="flex flex-col font-inter items-center justify-start max-w-[198px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Button
            className="common-pointer cursor-pointer font-normal sm:max-w-[250px] sm:min-w-[250px] min-w-[95%] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center sm:w-[250px] w-[max-content]"
            onClick={handleNavigate27}
            shape="RoundedBorder22"
            size="sm"
            variant="FillRed20049"
          >
            Salad
          </Button>
          <Img
            src="images/img_pasta2.png"
            className="common-pointer max-w-[100%] sm:max-w-[200px] md:mt-[22px] sm:mt-[27px] mt-[32px] w-[100%] sm:w-[200px]"
            onClick={handleNavigate26}
            alt="pastaTwo"
          />
          <Button
            className="common-pointer cursor-pointer font-normal sm:max-w-[250px] min-w-[95%] sm:min-w-[95px] mt-[14px] sm:mt-[17px] md:mt-[9px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center sm:w-[250px] w-[max-content]"
            onClick={handleNavigate25}
            shape="RoundedBorder22"
            size="sm"
            variant="FillRed20049"
          >
            Bolognese
          </Button>
        </div>
        <Img
          src="images/img_burger1.png"
          className="common-pointer sm:max-w-[300px] max-w-[302px] ml-[auto] mr-[auto] md:mt-[21px] sm:mt-[26px] mt-[31px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[300px]"
          onClick={handleNavigate24}
          alt="burgerTwo"
        />
        <Button
          className="common-pointer cursor-pointer font-inter font-normal min-w-[14%] sm:ml-[px] sm:mr-[em] sm:mt-[10px] not-italic sm:pr-[px] sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center sm:w-[250px] w-[max-content]"
          onClick={handleNavigate23}
          shape="RoundedBorder22"
          size="4xl"
          variant="FillRed20049"
        >
          Burger
        </Button>
        <Img
          src="images/img_chickensoupre.png"
          className="common-pointer sm:h-[200px] max-w-[179px] sm:max-w-[250px] ml-[auto] sm:ml-[px] mr-[auto] md:mt-[36px] sm:mt-[38px] mt-[53px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[200px]"
          onClick={handleNavigate22}
          alt="chickensoupre"
        />
        <Button
          className="common-pointer cursor-pointer font-inter font-normal sm:max-w-[250px] min-w-[14%] sm:ml-[px] sm:mt-[13px] md:mt-[4px] mt-[7px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center sm:w-[250px] w-[max-content]"
          onClick={handleNavigate21}
          shape="RoundedBorder22"
          size="sm"
          variant="FillRed20049"
        >
          Soup
        </Button>
        <Button
            className="common-pointer cursor-pointer font-normal min-w-[55%] sm:ml-[10px] sm:mt-[32px] md:mt-[41px] mt-[61px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate500}
            shape="RoundedBorder24"
            size="md"
            variant="FillGray500"
          >
            Back{" "}
          </Button>

      </div>
    </>
  );
};

export default DesktopSixPage;
