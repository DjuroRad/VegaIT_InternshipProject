import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className={styles["App"]}>
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
