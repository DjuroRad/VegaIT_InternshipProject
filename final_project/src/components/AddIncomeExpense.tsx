import React, { useEffect, useState } from "react";
import styles from "./AddIncomeExpense.module.css";

const income_groups: string[] = [
  "income_groups 1",
  "income_groups 2",
  "income_groups 3",
];

const expense_groups: string[] = [
  "exprense_groups 1",
  "exprense_groups 2",
  "exprense_groups 3",
];

enum FinancialType {
  INCOME = "income",
  EXPENSE = "expense",
}

const AddIncomeExpense = () => {
  const [formObject, setFormObject] = useState({
    // selectedGroup: income_groups,
    // selected: ,
  });

  const [selectedGroups, setSelectedGroups] = useState(income_groups);
  const [selectedGroup, setSelectedGroup] = useState(selectedGroups[0]);
  const [selectedFinanceType, setSelectedFinanceType] = useState("income");

  useEffect(() => {
    selectedFinanceType === "income"
      ? setSelectedGroups(income_groups)
      : setSelectedGroups(expense_groups);
  }, [selectedFinanceType]);

  function handleChangeFinanceType(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedFinanceType(event.target.value);
  }

  function handleChangeFinanceGroup(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedGroup(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Financial statement added");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles["form-add-income-expense"]} income-color-primary`}
    >
      <select
        className={styles["select-finance-type"]}
        id="finance"
        name="finance"
        value={selectedFinanceType}
        onChange={handleChangeFinanceType}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        className={styles["select-finance-group-type"]}
        value={selectedGroup}
        onChange={handleChangeFinanceGroup}
        id="finance-group"
        name="finance-group"
      >
        {selectedGroups.map((group) => {
          return <option value={group}>{group}</option>;
        })}
      </select>

      <input
        type="text"
        placeholder="Amount($)"
        className={styles["form-input-text"]}
      />
      <input
        type="text"
        placeholder="Description"
        className={styles["form-input-text"]}
      />
      <button type="submit" className={styles["form-submit-button"]}>
        Add
      </button>
    </form>
  );
};

export default AddIncomeExpense;
