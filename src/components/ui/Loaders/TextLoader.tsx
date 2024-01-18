import React from "react";
import { LoaderStyles } from "./cssIndex";

interface loaderProps {
  theme: string;
  variant: string;
  message: string;
}

function TextLoader({ theme, variant, message }: loaderProps) {
  const letterArray = "loading".toUpperCase().split("");
  return (
    <div className={LoaderStyles[theme][variant]}>
      <div>
        {letterArray?.map((letter) => {
          if (letter === "O")
            return <span className={LoaderStyles[theme]["stretch"]}></span>;
          return (
            <span className={LoaderStyles[theme]["letter"]}>{letter}</span>
          );
        })}
      </div>
      <p className={LoaderStyles[theme]["message"]}>{message}</p>
    </div>
  );
}

export default TextLoader;
