interface variantStyles {
  [key: string]: string;
}

interface themeStyles {
  [key: string]: variantStyles;
}

export type { variantStyles, themeStyles };
