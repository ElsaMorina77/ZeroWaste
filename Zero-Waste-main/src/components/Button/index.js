import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder22: "rounded-radius22",
  RoundedBorder49: "rounded-radius49855",
  RoundedBorder24: "rounded-radius2477",
  RoundedBorder29: "rounded-radius295",
  RoundedBorder33: "rounded-radius335",
  CircleBorder14: "rounded-radius14",
};
const variants = {
  FillRed20049: "bg-red_200_49 text-black_900",
  FillRedA701: "bg-red_A701 text-white_A700",
  FillGray800: "bg-gray_800 text-white_A700",
  FillGray800_1: "bg-gray_800 text-white_A700",
  FillGray500: "bg-gray_500 text-white_A700",
  OutlineGray501: "border-2 border-gray_501 border-solid text-black_900",
};
const sizes = {
  sm: "p-[3px]",
  md: "px-[11px] sm:px-[5px] md:px-[7px] py-[12px] sm:py-[6px] md:py-[8px]",
  lg: "p-[14px] sm:p-[7px] md:p-[9px]",
  xl: "pb-[10px] sm:pb-[5px] md:pb-[6px] md:pt-[11px] pt-[16px] sm:pt-[8px] px-[10px] sm:px-[5px] md:px-[6px]",
  "2xl": "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
  "3xl": "sm:p-[15px] md:p-[19px] p-[29px]",
  "4xl": "sm:pb-[3px] md:pb-[4px] pb-[6px]",
  "5xl": "sm:pb-[4px] md:pb-[6px] pb-[9px]",
  "6xl": "pb-[1px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder22",
    "RoundedBorder49",
    "RoundedBorder24",
    "RoundedBorder29",
    "RoundedBorder33",
    "CircleBorder14",
  ]),
  variant: PropTypes.oneOf([
    "FillRed20049",
    "FillRedA701",
    "FillGray800",
    "FillGray800_1",
    "FillGray500",
    "OutlineGray501",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };