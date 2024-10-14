import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillRed20033: "bg-red_200_33",
  FillRed20049: "bg-red_200_49",
};
const shapes = {
  RoundedBorder34: "rounded-radius34855",
  RoundedBorder49: "rounded-radius49855",
};
const sizes = {
  sm: "sm:pb-[18px] md:pb-[24px] pb-[35px] sm:pt-[10px] md:pt-[13px] pt-[20px] md:px-[13px] sm:px-[15px] px-[20px]",
  md: "md:px-[13px] sm:px-[15px] px-[20px] sm:py-[11px] md:py-[14px] py-[21px]",
  lg: "pb-[12px] sm:pb-[6px] md:pb-[8px] sm:pt-[11px] md:pt-[15px] pt-[22px] px-[12px] sm:px-[6px] md:px-[8px]",
  xl: "sm:pb-[10px] md:pb-[13px] pb-[19px] sm:pt-[13px] md:pt-[17px] pt-[25px] md:px-[13px] sm:px-[15px] px-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder34", "RoundedBorder49"]),
  variant: PropTypes.oneOf(["FillRed20033", "FillRed20049"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
