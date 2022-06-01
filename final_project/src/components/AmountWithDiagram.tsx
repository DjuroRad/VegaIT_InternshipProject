import React from "react";
import styles from "./AmountWithDiagram.module.css";
const AmountWithDiagram = () => {
  return (
    <div className={styles["amount-with-diagram-container"]}>
      Total amount:{" "}
      <span className={styles["span-amount"]}>
        <b>1000$</b>
      </span>
    </div>
  );
};

export default AmountWithDiagram;
