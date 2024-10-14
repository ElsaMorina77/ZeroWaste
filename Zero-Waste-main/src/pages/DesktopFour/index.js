import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopFourPage = () => {
  const navigate = useNavigate();

  function handleNavigate38() {
    navigate("/");
  }
  function handleNavigate39() {
    navigate("/desktopfive");
  }
  function handleNavigate40() {
    navigate("/desktopfive");
  }
  function handleNavigate41() {
    navigate("/desktopfive");
  }
  function handleNavigate42() {
    navigate("/desktopfive");
  }
  function handleNavigate66() {
    navigate("/desktopfive");
  }
  function handleNavigate67() {
    navigate("/desktopfive");
  }
  function handleNavigate68() {
    navigate("/desktopfive");
  }
  function handleNavigate69() {
    navigate("/desktopfive");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] sm:p-[15px] md:p-[25px] p-[37px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate38}
          alt="biglogoFifteen"
        />
        <Text
          className="leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[30%]"
          as="h3"
          variant="h3"
        >
          Please let us know if you are any of these:{" "}
        </Text>
        <div className="flex flex-col items-center justify-start max-w-[361px] sm:mb-[191px] md:mb-[247px] mb-[360px] ml-[auto] mr-[auto] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Button
            className="common-pointer cursor-pointer font-normal not-italic sm:text-[21px] md:text-[34px] text-[36px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate69}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            Vegan{" "}
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal mt-[131px] sm:mt-[69px] md:mt-[90px] not-italic sm:text-[21px] md:text-[27px] text-[40px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate68}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            Celiac{" "}
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal md:mt-[101px] mt-[147px] sm:mt-[78px] not-italic sm:text-[21px] md:text-[27px] text-[40px] text-black_900 text-center w-[100%]"
            onClick={handleNavigate67}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            Vegetarian{" "}
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal mt-[139px] sm:mt-[74px] md:mt-[95px] not-italic sm:text-[21px] md:text-[27px] text-[40px] text-black_900 text-center sm:text-colors w-[100%]"
            onClick={handleNavigate66}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRed20049"
          >
            None{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
