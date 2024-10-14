import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-normal sm:text-[35px] md:text-[41px] text-[45px]",
  h3: "font-normal sm:text-[21px] md:text-[27px] text-[40px]",
  h4: "font-normal sm:text-[31px] md:text-[33px] text-[35px]",
  h5: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h6: "font-normal sm:text-[26px] md:text-[28px] text-[30px]",
  body1: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  body2: "sm:text-[20px] md:text-[22px] text-[24px]",
  body3: "font-medium text-[14px]",
  body4: "font-medium text-[13.1px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
