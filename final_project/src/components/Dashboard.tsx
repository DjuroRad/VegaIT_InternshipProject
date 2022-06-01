import styles from "./Dashboard.module.css";
import AmountWithDiagram from "./AmountWithDiagram";
import FinanceDashboardBox from "./FinanceDashboardBox";
import { useState } from "react";
import Modal from "./Modal";
import AddIncomeExpense from "./AddIncomeExpense";

const Dashboard = () => {
  const [popUpOpened, setPopUpOpened] = useState(false);
  function closePopUp() {
    setPopUpOpened(false);
  }
  function openPopUp() {
    setPopUpOpened(true);
  }

  return (
    <div className={styles["dashboard-container"]}>
      <h4 className={styles["dashboard-container-header"]}>Expense tracker</h4>
      <AmountWithDiagram />
      <div className={styles["income-expenses-div"]}>
        <FinanceDashboardBox type={"income"} />
        <FinanceDashboardBox type={"expenses"} />
      </div>

      {popUpOpened && (
        <Modal closePopUp={closePopUp} children={<AddIncomeExpense />} />
      )}
      <button onClick={openPopUp} className={styles["app-button"]}>
        +
      </button>
    </div>
  );
};

export default Dashboard;
