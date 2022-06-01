import React from "react";
import styles from "./FinanceDashboardBox.module.css";
import FinanceEntry from "./FinanceEntry";
import HeaderWithNavigationButton from "./HeaderWithNavigationButton";

interface FinanceDashboardBoxInterface {
  type: "income" | "expenses";
  // const onClick(): ;
}

const FinanceDashboardBox = ({ type }: FinanceDashboardBoxInterface) => {
  const primaryColorClass =
    type === "income" ? "income-color-primary" : "expense-color-primary";
  const secondaryColorsClass =
    type === "income" ? "income-color-secondary" : "expense-color-secondary";
  return (
    <div
      className={`${styles["finance-dashboard-box-container"]} ${primaryColorClass}`}
    >
      <HeaderWithNavigationButton
        type={type}
        background_color={primaryColorClass}
      />
      <FinanceEntry
        amount={100}
        description={"neki opis odje"}
        group_name={"ime grupe"}
        background_color={secondaryColorsClass}
      />
      <FinanceEntry
        amount={100}
        description={"neki opis odje"}
        group_name={"ime grupe"}
        background_color={secondaryColorsClass}
      />
      <FinanceEntry
        amount={100}
        description={"neki opis odje"}
        group_name={"ime grupe"}
        background_color={secondaryColorsClass}
      />
      <FinanceEntry
        amount={100}
        description={"neki opis odje"}
        group_name={"ime grupe"}
        background_color={secondaryColorsClass}
      />
      <FinanceEntry
        amount={100}
        description={"neki opis odje"}
        group_name={"ime grupe"}
        background_color={secondaryColorsClass}
      />
    </div>
  );
};

export default FinanceDashboardBox;
