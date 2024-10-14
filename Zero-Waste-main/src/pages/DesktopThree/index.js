import React from "react";

import { Img, Text, Datepicker, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate43() {
    navigate("/");
  }
  function handleNavigate57() {
    navigate("/desktopfour");
  }
  function handleNavigate70() {
    navigate("/desktopfour");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] p-[128px] sm:p-[15px] md:p-[88px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate43}
          alt="biglogoFourteen"
        />
        <Text
          className="leading-[normal] sm:mt-[119px] md:mt-[154px] mt-[225px] not-italic text-black_900 text-center sm:w-[100%] w-[45%]"
          as="h4"
          variant="h4"
        >
          Let us know if you’ll eat here again :)
        </Text>
        <Datepicker
          className="placeholder:bg-transparent bg-transparent font-normal sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] not-italic sm:text-[31px] md:text-[33px] text-[35px] placeholder:text-black_900 text-black_900 sm:text-center sm:w-[100%] w-[17%]"
          name="language"
          placeholder="Select Date: "
        ></Datepicker>
        <Button
          className="common-pointer cursor-pointer font-normal sm:mb-[290px] md:mb-[375px] mb-[545px] min-w-[19%] sm:mt-[118px] md:mt-[153px] mt-[223px] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 sm:w-[250px] w-[max-content]"
          onClick={handleNavigate70}
          shape="RoundedBorder24"
          size="md"
          variant="FillGray800"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default DesktopThreePage;
