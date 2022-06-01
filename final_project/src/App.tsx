import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import TableIncomExpense from "./components/TableIncomeExpense";
function App() {
  return (
    <div className={styles["App"]}>
      <TableIncomExpense />
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
