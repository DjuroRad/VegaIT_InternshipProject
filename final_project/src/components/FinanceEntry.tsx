import React from "react";
import styles from "./FinanceEntry.module.css";
interface FinanceEntryInterface {
  amount: number;
  description: string;
  group_name: string;
  background_color: string;
}
const FinanceEntry = ({
  amount,
  description,
  group_name,
  background_color,
}: FinanceEntryInterface) => {
  return (
    <div className={`${styles["finance-entry-container"]} ${background_color}`}>
      <p className="finance-entry-amount">{amount}$</p>
      <p className="finance-entry-description">Description: {description}</p>
      <p className="finance-entry-group-name">
        Group: <i>{group_name}</i>
      </p>
    </div>
  );
};

export default FinanceEntry;
