import { themeStyles } from "@/types";
import styles from "./TextLoader.module.css";

const LoaderStyles: themeStyles = {
  light: {
    primary: styles.primaryLight,
    stretch: styles.stretchLight,
    letter: styles.letter,
    message: styles.message,
  },
  dark: {
    primary: styles.primaryDark,
    stretch: styles.stretchDark,
    letter: styles.letter,
    message: styles.message,
  },
};

export { LoaderStyles };
