import React from "react";
import { buttonSizes, buttonStyles } from "./cssIndex";

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
  return (
    <button
      className={`button ${buttonVariantClass} ${buttonSizeClass} ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
