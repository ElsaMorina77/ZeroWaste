import React from "react";

import { Stack, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate45() {
    navigate("/");
  }
  function handleNavigate71() {
    navigate("/desktopfifteen");
  }
  function handleNavigate72() {
    navigate("/desktopsixteen");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] sm:p-[15px] md:p-[313px] p-[455px] w-[100%]">
        <Stack className="h-[452px] max-w-[402px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Img
            src="images/img_biglogo11.png"
            className="common-pointer absolute sm:h-[300px] h-[452px] sm:max-h-[300px] max-w-[100%] sm:max-w-[300px] sm:mt-[100px] w-[100%] sm:w-[300px]"
            onClick={handleNavigate45}
            alt="biglogoEleven"
          />
        </Stack>
        <div className="flex flex-col items-center justify-start max-w-[422px] ml-[auto] mr-[auto] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:pb-[29px] md:pb-[37px] pb-[55px] sm:pl-[15px] sm:pr-[15px] rounded-radius50 w-[100%]">
          <Button
            className="common-pointer cursor-pointer font-normal not-italic sm:text-[21px] md:text-[27px] text-[40px] text-center text-white_A700 w-[100%] sm:w-[300px]"
            onClick={handleNavigate72}
            shape="RoundedBorder49"
            size="3xl"
            variant="FillRedA701"
          >
            Log In{" "}
          </Button>
          <Button
            className="common-pointer cursor-pointer font-normal min-w-[52%] sm:mt-[32px] md:mt-[41px] mt-[61px] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[max-content]"
            onClick={handleNavigate71}
            shape="RoundedBorder24"
            size="md"
            variant="FillGray800"
          >
            First time here?{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
