import styles from "./TableIncomeExpense.module.css";

import Table, { TableRow } from "./Table";

const TableIncomeExpense = () => {
  const columnNames: string[] = ["prva kolona", "druga kolona"];
  const tableRows: TableRow[] = [
    {
      components: [
        <p>neki paragraf</p>,
        <div>unutrasnji neki div</div>,
        <button>dugme</button>,
      ],
    },
    {
      components: [
        <p>neki paragraf2</p>,
        <div>unutrasnji neki div2</div>,
        <button>dugme2</button>,
      ],
    },
    {
      components: [
        <p>neki paragraf3</p>,
        <div>unutrasnji neki div3</div>,
        <button>dugme3</button>,
      ],
    },
  ];

  return (
    <div className={styles["income-expense-table"]}>
      <Table columnNames={columnNames} tableRows={tableRows} />
    </div>
  );
};

export default TableIncomeExpense;
