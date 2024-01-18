"use client";
import React from "react";
import styles from "./Page.module.css";
import { Button } from "@/components";

function Page() {
  const handleClick = (value: string) => {
    console.log("Clicked " + value);
  };

  return (
    <div className={styles.viewContainer}>
      <Button
        theme="light"
        variant="secondary"
        size="default"
        onClick={() => handleClick("hello")}
      >
        Hello
      </Button>
    </div>
  );
}

export default Page;
