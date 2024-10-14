import React from "react";

import { Img, Text, List, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopElevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/");
  }
  function handleNavigate61() {
    navigate("/desktopten");
  }
  function handleNavigate62() {
    navigate("/desktoptwelve");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inder items-center justify-start mx-[auto] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[416px] sm:mb-[46px] md:mb-[60px] mb-[88px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_biglogo11.png"
            className="common-pointer max-w-[100%] sm:max-w-[150px] md:ml-[108px] sm:ml-[115px] ml-[157px] sm:mr-[px] sm:w-[150px] w-[31%]"
            onClick={handleNavigate1}
            alt="biglogoFifteen"
          />
          <div className="flex flex-col items-center justify-start md:ml-[39px] ml-[58px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              What is left?
            </Text>
            <List
              className="sm:gap-[38px] md:gap-[49px] gap-[72px] grid min-h-[auto] sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]"
              orientation="vertical"
            >
              <div className="bg-gray_200 flex flex-col items-center justify-start sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] shadow-bs sm:w-[100%] w-[97%]">
                <div className="flex flex-col items-center justify-start sm:mb-[19px] md:mb-[25px] mb-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Chicken
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Quantity{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[20%]"
                        name="language One"
                        placeholder="  ___"
                      ></Input>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Expiry Date{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[21%]"
                        name="language Three"
                        placeholder="  ___"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_200 flex flex-col justify-start sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] shadow-bs sm:w-[100%] w-[97%]">
                <div className="flex flex-col items-center justify-start sm:mb-[18px] md:mb-[23px] mb-[34px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {" "}
                    Pasta
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[150%] w-[auto]"
                        variant="body2"
                      >
                        Quantity{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[21%]"
                        name="language Two One"
                        placeholder="  ___"
                      ></Input>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Expiry Date{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[22%]"
                        name="language Four"
                        placeholder="  ___"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_200 flex flex-col items-center justify-start sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] shadow-bs sm:w-[100%] w-[97%]">
                <div className="flex flex-col justify-start sm:mb-[19px] md:mb-[25px] mb-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="sm:ml-[15px] md:ml-[52px] ml-[77px] not-italic text-black_900 sm:text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Rice
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Quantity{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[21%]"
                        name="language One Two"
                        placeholder="  ___"
                      ></Input>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Expiry Date{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[21%]"
                        name="language Three Two"
                        placeholder="  ___"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_200 flex flex-col items-center justify-start sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] shadow-bs sm:w-[100%] w-[97%]">
                <div className="flex flex-col justify-start sm:mb-[18px] md:mb-[23px] mb-[34px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Text
                    className="sm:ml-[15px] md:ml-[40px] ml-[59px] not-italic text-black_900 sm:text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Meat
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Quantity{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[21%]"
                        name="language One Three"
                        placeholder="  ___"
                      ></Input>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-black_900 sm:text-center sm:w-[100%] w-[auto]"
                        variant="body2"
                      >
                        Expiry Date{" "}
                      </Text>
                      <Input
                        className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 sm:text-center w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[21%]"
                        name="language Three Three"
                        placeholder="  ___"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[38px] md:mt-[49px] mt-[72px] w-[100%]">
            <Button
              className="common-pointer cursor-pointer font-normal min-w-[40%] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
              onClick={handleNavigate61}
              shape="RoundedBorder24"
              size="md"
              variant="FillGray500"
            >
              Back{" "}
            </Button>
            <Button
              className="common-pointer cursor-pointer font-normal min-w-[40%] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
              onClick={handleNavigate62}
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

export default DesktopElevenPage;
