import React from "react";

import { Stack, Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopSixteenPage = () => {
  const navigate = useNavigate();

  function handleNavigate48() {
    navigate("/desktopseventeen");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] sm:p-[15px] md:p-[218px] p-[318px] w-[100%]">
        <Stack className="h-[170px] max-w-[194px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Img
            src="images/img_biglogo11.png"
            className="absolute sm:h-[150px] h-[170px] max-w-[100%] sm:max-w-[150px] w-[100%] sm:w-[150px]"
            alt="biglogoEleven"
          />
        </Stack>
        <Text
          className="sm:mt-[49px] md:mt-[63px] mt-[92px] not-italic text-black_900 w-[auto]"
          as="h3"
          variant="h3"
        >
          Log In
        </Text>
        <div className="flex flex-col items-center justify-start max-w-[463px] sm:mb-[166px] md:mb-[214px] mb-[312px] ml-[auto] mr-[auto] sm:mt-[39px] md:mt-[51px] mt-[75px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[350px]">
          <Input
            className="placeholder:bg-red_200_33 font-normal sm:max-h-[px] not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%]"
            wrapClassName="w-[100%]"
            type="text"
            name="username"
            placeholder="Username"
            shape="RoundedBorder34"
            size="xl"
            variant="FillRed20033"
          ></Input>
          <Input
            className="placeholder:bg-red_200_33 font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%]"
            wrapClassName="md:mt-[44px] mt-[65px] sm:mt-[34px] w-[100%]"
            type="password"
            name="email"
            placeholder="Password"
            shape="RoundedBorder34"
            size="md"
            variant="FillRed20033"
          ></Input>
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[47%] sm:mt-[43px] md:mt-[56px] mt-[82px] not-italic sm:py-[10px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate48}
            shape="RoundedBorder24"
            size="xl"
            variant="FillGray800"
          >
            Log In{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopSixteenPage;
