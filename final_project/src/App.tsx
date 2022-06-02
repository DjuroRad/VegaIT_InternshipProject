import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import TableIncomeExpenseGroup from "./components/TableIncomeExpenseGroup";
import TableIncomeExpense from "./components/TableIncomeExpense";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableRouting from "./components/TableRouting";
function App() {
  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table/:tableType" element={<TableRouting />} />
          {/* <Route path="/table/:group" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
