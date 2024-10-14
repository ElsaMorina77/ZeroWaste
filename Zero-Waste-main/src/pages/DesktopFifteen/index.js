import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopFifteenPage = () => {
  const navigate = useNavigate();

  function handleNavigate46() {
    navigate("/");
  }
  function handleNavigate47() {
    navigate("/desktopseventeen");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder justify-end mx-[auto] sm:p-[15px] md:p-[189px] p-[276px] w-[100%]">
        <div className="flex flex-col items-end max-w-[463px] md:ml-[157px] ml-[auto] sm:ml-[px] sm:mr-[103px] md:mr-[133px] mr-[auto] sm:mt-[21px] md:mt-[28px] mt-[41px] sm:pl-[15px] sm:pr-[15px] px-[112px] sm:px-[15px] md:px-[77px] w-[100%]">
          <Img
            src="images/img_biglogo11.png"
            className="common-pointer sm:block sm:flex-row sm:h-[150px] sm:items-start sm:justify-around max-w-[100%] sm:max-w-[150px] sm:ml-[px] sm:mr-[120px] sm:relative sm:w-[150px] w-[82%]"
            onClick={handleNavigate46}
            alt="biglogoEleven"
          />
          <Text
            className="sm:ml-[px] sm:mr-[150px] md:mr-[21px] mr-[31px] not-italic text-black_900 sm:w-[100px] w-[auto]"
            as="h3"
            variant="h3"
          >
            Sign Up{" "}
          </Text>
        </div>
        <div className="flex flex-col items-center max-w-[463px] md:ml-[157px] ml-[auto] sm:ml-[px] sm:mr-[103px] md:mr-[133px] mr-[auto] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%] sm:w-[350px]">
            <Input
              className="placeholder:bg-red_200_33 font-normal sm:h-[px] not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%] sm:w-[350px]"
              wrapClassName="w-[100%]"
              type="text"
              name="Name"
              placeholder="Name"
              shape="RoundedBorder34"
              size="xl"
              variant="FillRed20033"
            ></Input>
            <Input
              className="placeholder:bg-red_200_33 font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%] sm:w-[350px]"
              wrapClassName="md:mt-[39px] mt-[58px] sm:mt-[30px] w-[100%]"
              type="text"
              name="Surname"
              placeholder="Surname"
              shape="RoundedBorder34"
              size="xl"
              variant="FillRed20033"
            ></Input>
            <Input
              className="placeholder:bg-red_200_33 font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%] sm:w-[350px]"
              wrapClassName="md:mt-[39px] mt-[58px] sm:mt-[30px] w-[100%]"
              type="text"
              name="username"
              placeholder="Username"
              shape="RoundedBorder34"
              size="xl"
              variant="FillRed20033"
            ></Input>
            <Input
              className="placeholder:bg-red_200_33 font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%] sm:w-[350px]"
              wrapClassName="md:mt-[39px] mt-[58px] sm:mt-[30px] w-[100%]"
              type="email"
              name="email"
              placeholder="Email"
              shape="RoundedBorder34"
              size="md"
              variant="FillRed20033"
            ></Input>
            <Input
              className="placeholder:bg-red_200_33 font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%] sm:w-[350px]"
              wrapClassName="md:mt-[39px] mt-[58px] sm:mt-[30px] w-[100%]"
              type="password"
              name="email One"
              placeholder="Password"
              shape="RoundedBorder34"
              size="md"
              variant="FillRed20033"
            ></Input>
            <Input
              className="placeholder:bg-red_200_33 font-normal not-italic p-[0] sm:p-[15px] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_800 text-gray_800 w-[100%] sm:w-[350px]"
              wrapClassName="md:mt-[39px] mt-[58px] sm:mt-[30px] w-[100%]"
              type="password"
              name="language One"
              placeholder="Repeat Password "
              shape="RoundedBorder34"
              size="lg"
              variant="FillRed20033"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-normal min-w-[47%] sm:mr-[px] sm:mt-[30px] md:mt-[39px] mt-[58px] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[max-content]"
              onClick={handleNavigate47}
              shape="RoundedBorder24"
              size="md"
              variant="FillGray800"
            >
              Sign In{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFifteenPage;
