import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopTenPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/");
  }
  function handleNavigate63() {
    navigate("/desktopeleven");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-end justify-start mx-[auto] sm:p-[15px] md:p-[64px] p-[93px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[445px] sm:mb-[210px] md:mb-[272px] mb-[396px] ml-[auto] sm:mr-[191px] md:mr-[247px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_biglogo11.png"
            className="common-pointer max-w-[100%] sm:max-w-[150px] sm:w-[150px] w-[29%]"
            onClick={handleNavigate9}
            alt="biglogoFifteen"
          />
          <Text
            className="sm:mt-[35px] md:mt-[46px] mt-[67px] not-italic text-black_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            What is missing?
          </Text>
          <div className="flex flex-col justify-start sm:mt-[33px] md:mt-[42px] mt-[62px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-inder items-start sm:mx-[0] sm:px-[0] sm:text-center sm:w-[100%] w-[63%]">
              <Text
                className="not-italic text-red_A701 sm:w-[100%] w-[auto]"
                variant="body1"
              >
                Chicken
              </Text>
              <Input
                className="font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                wrapClassName="md:ml-[17px] ml-[25px] sm:mx-[0] sm:w-[100%] w-[55%]"
                name="Quantity"
                placeholder="Quantity__"
              ></Input>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-inder items-start sm:mt-[49px] md:mt-[63px] mt-[92px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
              <Text
                className="not-italic sm:text-center text-red_A701 sm:w-[100%] w-[auto]"
                variant="body1"
              >
                Rice
              </Text>
              <Input
                className="font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                wrapClassName="md:ml-[45px] ml-[66px] sm:mx-[0] sm:w-[100%] w-[55%]"
                name="Quantity One"
                placeholder="Quantity__"
              ></Input>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-inder items-start sm:mt-[49px] md:mt-[63px] mt-[92px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
              <Text
                className="mt-[4px] not-italic sm:text-center text-red_A701 sm:w-[100%] w-[auto]"
                variant="body1"
              >
                Pasta
              </Text>
              <Input
                className="font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                wrapClassName="md:ml-[34px] ml-[50px] sm:mx-[0] sm:w-[100%] w-[54%]"
                name="Quantity Two"
                placeholder="Quantity__"
              ></Input>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-inder items-start sm:mt-[49px] md:mt-[63px] mt-[92px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
              <Text
                className="not-italic sm:text-center text-red_A701 sm:w-[100%] w-[auto]"
                variant="body1"
              >
                Salad
              </Text>
              <Input
                className="font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                wrapClassName="md:ml-[34px] ml-[50px] sm:mx-[0] sm:w-[100%] w-[54%]"
                name="Quantity Three"
                placeholder="Quantity__"
              ></Input>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap font-inder items-end sm:mt-[51px] md:mt-[66px] mt-[97px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
              <Text
                className="sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic sm:text-center text-red_A701 sm:w-[100%] w-[auto]"
                variant="body1"
              >
                Soup
              </Text>
              <Input
                className="font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                wrapClassName="mb-[4px] md:ml-[39px] ml-[58px] sm:mx-[0] sm:w-[100%] w-[54%]"
                name="Quantity Four"
                placeholder="Quantity__"
              ></Input>
            </div>
            <Button
              className="common-pointer cursor-pointer font-inter font-normal min-w-[42%] sm:ml-[121px] md:ml-[157px] ml-[229px] md:mt-[117px] mt-[171px] sm:mt-[91px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
              onClick={handleNavigate63}
              shape="RoundedBorder24"
              size="md"
              variant="FillGray500"
            >
              Continue{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTenPage;
