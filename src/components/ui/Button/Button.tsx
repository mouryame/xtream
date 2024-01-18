import React from "react";
import { buttonSizes, buttonStyles } from "./btnCssIndex";

interface buttonProps {
  theme: string;
  variant: string;
  size: string;
  customClass?: string | undefined;
  children: any;
  onClick: any;
}

function Button({
  theme,
  variant,
  size,
  customClass,
  children,
  onClick,
}: buttonProps) {
  const buttonVariantClass = buttonStyles[theme][variant];
  const buttonSizeClass = buttonSizes[size];
  const buttonClass = customClass
    ? `button ${buttonVariantClass} ${buttonSizeClass} ${customClass}`
    : `button ${buttonVariantClass} ${buttonSizeClass}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
