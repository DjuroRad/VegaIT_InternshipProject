import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import TableIncomeExpenseGroup from "./components/TableIncomeExpenseGroup";
import TableIncomeExpense from "./components/TableIncomeExpense";

function App() {
  return (
    <div className={styles["App"]}>
      <TableIncomeExpenseGroup />
      <TableIncomeExpense />
      <Dashboard />
    </div>
  );

  //   <Popup
  //   modal
  //   trigger={<button className={styles["dashboard-button"]}>+</button>}
  // >
  //   {<DialogBox />}
  // </Popup>
}

export default App;
