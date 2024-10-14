import React from "react";

import { Stack, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopTwelvePage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/desktopfourteen");
  }
  function handleNavigate60() {
    navigate("/desktopthirteen");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter justify-start mx-[auto] sm:p-[15px] md:p-[224px] p-[326px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[375px] sm:mb-[149px] md:mb-[192px] mb-[280px] md:ml-[71px] ml-[auto] sm:ml-[px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack
            className="bg-cover bg-gray_300 bg-no-repeat sm:h-[300px] h-[347px] ml-[119px] sm:ml-[63px] md:ml-[81px] sm:mr-[28px] md:mr-[37px] mr-[54px] md:pl-[10px] pl-[15px] sm:pl-[7px] md:pt-[10px] pt-[15px] sm:pt-[7px] relative rounded-radius53 shadow-bs sm:w-[200px] w-[54%]"
            style={{ backgroundImage: "url('images/img_scanscreen.png')" }}
          >
            <div className="absolute bg-white_A700_33 sm:h-[46px] md:h-[59px] h-[85px] rounded-bl-[36px] rounded-br-[35px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[76%]"></div>
            <Img
              src="images/img_group5.svg"
              className="absolute bottom-[4%] h-[302px] inset-x-[0] max-w-[100%] sm:max-w-[100px] mx-[auto] rounded-radius35 sm:w-[100px] w-[88%]"
              alt="GroupFive"
            />
          </Stack>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[48px] ml-[70px] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] sm:px-[0] sm:text-left sm:w-[100%] w-[59%]">
            <Img
              src="images/img_milkbottlemoc.png"
              className="max-w-[100%] rounded-radius9 sm:text-center w-[32%]"
              alt="MilkBottleMoc"
            />
            <div className="flex flex-col justify-start md:ml-[15px] ml-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
              <Text
                className="font-inter font-normal ml-[1px] not-italic text-gray_500 w-[auto]"
                variant="body2"
              >
                Product:
              </Text>
              <Text
                className="font-inter font-semibold mt-[3px] text-black_900 w-[auto]"
                variant="body2"
              >
                Cow Milk
              </Text>
              <Text
                className="font-inter font-normal ml-[1px] sm:mt-[28px] md:mt-[36px] mt-[53px] not-italic text-gray_500 w-[auto]"
                variant="body2"
              >
                Expiry day:
              </Text>
              <Text
                className="font-inder font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-red_A701 w-[auto]"
                variant="body2"
              >
                11/07/2022
              </Text>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[44px] md:mt-[57px] mt-[84px] w-[100%]">
            <Button
              className="common-pointer cursor-pointer font-normal min-w-[46%] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
              onClick={handleNavigate60}
              shape="RoundedBorder33"
              size="lg"
              variant="FillRed20049"
            >
              Donate
            </Button>
            <Button
              className="common-pointer cursor-pointer font-normal min-w-[46%] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
              onClick={handleNavigate8}
              shape="RoundedBorder33"
              size="lg"
              variant="FillRed20049"
            >
              Compost
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwelvePage;
