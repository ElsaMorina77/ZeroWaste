import React from "react";

import { Img, Stack, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    navigate("/desktopeight");
  }
  function handleNavigate30() {
    navigate("/desktopeight");
  }
  function handleNavigate31() {
    navigate("/desktopeight");
  }
  function handleNavigate32() {
    navigate("/desktopeight");
  }
  function handleNavigate33() {
    navigate("/desktopeight");
  }
  function handleNavigate34() {
    navigate("/desktopeight");
  }
  function handleNavigate35() {
    navigate("/desktopeight");
  }
  function handleNavigate36() {
    navigate("/desktopeight");
  }
  function handleNavigate37() {
    navigate("/");
  }
  function handleNavigate55() {
    navigate("/desktopsix");
  }
  function handleNavigate56() {
    navigate("/desktopseven");
  }
  function handleNavigate64() {
    navigate("/desktopsix");
  }
  function handleNavigate65() {
    navigate("/desktopseven");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[408px] sm:mb-[105px] md:mb-[136px] mb-[198px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_biglogo11.png"
            className="common-pointer sm:flex sm:h-[150px] sm:justify-center max-w-[100%] sm:max-w-[150px] md:ml-[112px] sm:ml-[115px] ml-[164px] sm:mr-[px] sm:text-center sm:w-[150px] w-[32%]"
            onClick={handleNavigate37}
            alt="biglogoFourteen"
          />
          <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
            <Stack className="h-[1339px] relative w-[100%]">
              <Stack className="absolute h-[1339px] w-[100%]">
                <Text
                  className="absolute leading-[normal] not-italic text-black_900 text-center top-[0] w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  What would you like to eat? Select below:{" "}
                </Text>
                <div className="absolute bottom-[0] flex flex-col font-inter items-center justify-start sm:mx-[0] sm:px-[0] right-[7%] sm:w-[100%] w-[74%]">
                  <Img
                    src="images/img_burger1.png"
                    className="common-pointer sm:h-[200px] sm:max-h-[200px] max-w-[100%] sm:max-w-[250px] sm:mb-[px] sm:ml-[40px] sm:w-[250px] w-[83%]"
                    onClick={handleNavigate35}
                    alt="burgerOne"
                  />
                  <Button
                    className="common-pointer cursor-pointer font-normal sm:mb-[px] min-w-[63%] sm:ml-[50px] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
                    onClick={handleNavigate36}
                    shape="RoundedBorder22"
                    size="sm"
                    variant="FillRed20049"
                  >
                    Burger{" "}
                  </Button>
                  <Img
                    src="images/img_hotdog1.png"
                    className="common-pointer max-w-[100%] sm:max-w-[250px] sm:ml-[50px] md:mt-[60px] mt-[88px] sm:my-[px] sm:w-[250px] w-[83%]"
                    onClick={handleNavigate34}
                    alt="hotdogOne"
                  />
                  <Button
                    className="common-pointer cursor-pointer font-normal min-w-[63%] sm:ml-[60px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
                    onClick={handleNavigate33}
                    shape="RoundedBorder22"
                    size="4xl"
                    variant="FillRed20049"
                  >
                    HotDog
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-normal min-w-[63%] sm:ml-[60px] md:mt-[182px] sm:mt-[250px] mt-[265px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
                    onClick={handleNavigate31}
                    shape="RoundedBorder22"
                    size="5xl"
                    variant="FillRed20049"
                  >
                    Chicken
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-normal min-w-[63%] sm:ml-[60px] md:mt-[192px] sm:mt-[250px] mt-[279px] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
                    onClick={handleNavigate29}
                    shape="RoundedBorder22"
                    size="5xl"
                    variant="FillRed20049"
                  >
                    Rice
                  </Button>
                </div>
              </Stack>
              <Img
                src="images/img_chicken1.png"
                className="common-pointer absolute h-[170px] sm:h-[200px] max-w-[100%] sm:max-w-[250px] sm:ml-[60px] sm:mt-[790px] sm:w-[250px] w-[61%]"
                onClick={handleNavigate32}
                alt="chickenOne"
              />
              <Img
                src="images/img_rice1.png"
                className="common-pointer absolute h-[189px] sm:h-[200px] sm:max-h-[200px] max-w-[100%] sm:max-w-[300px] sm:ml-[40px] sm:mr-[px] sm:mt-[950px] top-[10%] sm:w-[300px] w-[71%]"
                onClick={handleNavigate30}
                alt="riceOne"
              />
            </Stack>
            <Text
              className="leading-[normal] sm:mt-[19px] md:mt-[25px] mt-[37px] not-italic text-black_900 text-center w-[100%]"
              as="h3"
              variant="h3"
            >
              Not sure?
              <br /> Check:{" "}
            </Text>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[32px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
              <Button
                className="common-pointer cursor-pointer font-normal min-w-[47%] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
                onClick={handleNavigate65}
                shape="RoundedBorder29"
                size="lg"
                variant="FillGray800_1"
              >
                Most ordered
              </Button>
              <Button
                className="common-pointer cursor-pointer font-normal min-w-[47%] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
                onClick={handleNavigate64}
                shape="RoundedBorder29"
                size="lg"
                variant="FillRedA701"
              >
                Our picks
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
