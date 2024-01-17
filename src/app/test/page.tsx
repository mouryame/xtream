import React from "react";
import styles from "./Page.module.css";
import { Button } from "@/components";

function Page() {
  return (
    <div className={styles.viewContainer}>
      <Button theme="light" variant="secondary" size="default">
        Hello
      </Button>
    </div>
  );
}

export default Page;
