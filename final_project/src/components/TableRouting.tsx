import React from "react";
import { useParams } from "react-router-dom";
import TableIncomeExpense from "./TableIncomeExpense";
import TableIncomeExpenseGroup from "./TableIncomeExpenseGroup";
import { FinanceType } from "../Types";

const TableRouting = () => {
  const params = useParams();

  return (
    <div>
      {/* {params.tableType == "expense" ? <div>Exepnse<div/> : <div>Not expense<div/> }  */}
      {params.tableType === "expense" && (
        <TableIncomeExpense financeType={FinanceType.EXPENSE} />
      )}
      {params.tableType === "income" && (
        <TableIncomeExpense financeType={FinanceType.INCOME} />
      )}
      {params.tableType === "expense-group" && (
        <TableIncomeExpenseGroup financeType={FinanceType.EXPENSE} />
      )}
      {params.tableType === "income-group" && (
        <TableIncomeExpenseGroup financeType={FinanceType.INCOME} />
      )}
    </div>
  );
};

export default TableRouting;
