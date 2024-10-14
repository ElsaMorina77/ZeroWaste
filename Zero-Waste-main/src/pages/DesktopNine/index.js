import React from "react";

import { Img, Stack, Text } from "components";
import { useNavigate } from "react-router-dom";

const DesktopNinePage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/desktopseventeen");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] p-[111px] sm:p-[15px] md:p-[76px] w-[100%]">
        <Img
          src="images/img_biglogo11.png"
          className="common-pointer max-w-[128px] sm:max-w-[150px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[150px]"
          onClick={handleNavigate10}
          alt="biglogoFourteen"
        />
        <Stack className="h-[343px] max-w-[440px] sm:mb-[399px] md:mb-[516px] mb-[750px] ml-[auto] mr-[auto] sm:mt-[111px] md:mt-[144px] mt-[210px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Text
            className="absolute leading-[normal] not-italic text-black_900 text-center w-[100%]"
            as="h1"
            variant="h1"
          >
            Thank You
            <br /> for your order :)
          </Text>
          <Text
            className="absolute bottom-[25%] font-normal inset-x-[0] mx-[auto] not-italic text-red_A701 w-[max-content]"
            variant="body2"
          >
            The ZeroWaste Team
          </Text>
        </Stack>
      </div>
    </>
  );
};

export default DesktopNinePage;
