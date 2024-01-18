"use client";
import React from "react";
import styles from "./Page.module.css";
import { Button } from "@/components";
import TextLoader from "@/components/ui/Loaders/TextLoader";

function Page() {
  return (
    <div className={styles.viewContainer}>
      <TextLoader theme="light" variant="primary" message="Fetching products" />
    </div>
  );
}

export default Page;
