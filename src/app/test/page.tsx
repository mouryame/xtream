"use client";
import React, { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { Button, TextLoader } from "@/components";

function Page() {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };
  return (
    <div className={styles.viewContainer}>
      <Button
        theme="light"
        variant="primary"
        size="default"
        onClick={toggleLoading}
      >
        Toggle Loading
      </Button>
      {loading && (
        <TextLoader
          theme="light"
          variant="primary"
          message="Fetching products"
        />
      )}
    </div>
  );
}

export default Page;
