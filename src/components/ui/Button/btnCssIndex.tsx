import { themeStyles, variantStyles } from "@/types";
import styles from "./Button.module.css";

const buttonStyles: themeStyles = {
  light: {
    primary: styles.primaryLight,
    secondary: styles.secondaryLight,
  },

  dark: {
    primary: styles.primaryDark,
    secondary: styles.secondaryDark,
  },
};

const buttonSizes: variantStyles = {
  small: styles.small,
  default: styles.default,
  large: styles.large,
};
export { buttonStyles, buttonSizes };
