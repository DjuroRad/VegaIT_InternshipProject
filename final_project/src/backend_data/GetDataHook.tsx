import axios from "axios";
import { useEffect, useState } from "react";
import {
  ServerRequestType,
  Expense,
  Income,
  FinanceTypeClass,
  FinanceGroupClass,
} from "../Types";

const GetDataHook = () => {
  const [expenses, setExpenses] = useState();
  const [incomes, setIncomes] = useState();
  const [expenseGroups, setExpenseGroups] = useState();
  const [incomeGroups, setIncomeGroups] = useState();

  const URL = "http://localhost:3000/";

  useEffect(() => {
    getServerData(ServerRequestType.EXPENSE);
    getServerData(ServerRequestType.INCOME);
    getServerData(ServerRequestType.EXPENSE_GROUP);
    getServerData(ServerRequestType.INCOME_GROUP);
  }, []);

  async function getServerData(serverRequestType: ServerRequestType) {
    let url = URL + ServerRequestType;

    try {
      const serverResponse = await axios.get(url);
      console.log(serverResponse.data);

      switch (serverRequestType) {
        case ServerRequestType.INCOME:
          setIncomes(serverResponse.data);
          break;
        case ServerRequestType.EXPENSE:
          setExpenses(serverResponse.data);
          break;
        case ServerRequestType.INCOME_GROUP:
          setIncomeGroups(serverResponse.data);
          break;
        case ServerRequestType.EXPENSE_GROUP:
          setExpenseGroups(serverResponse.data);
          break;
      }
    } catch (error) {
      console.log(
        "Error while calling axios.get(url)\nError message: " + error
      );
    }
  }

  async function postFinance(
    finance: FinanceTypeClass,
    serverRequestType: ServerRequestType
  ) {
    let url = URL + serverRequestType;

    try {
      const serverResponse = await axios.put(url, finance.toJSON());
      console.log(serverResponse.data);
      getServerData(serverRequestType); //invalidate this data
    } catch (error) {
      console.log(
        "Error while calling axios.put(url)\nError message: " + error
      );
    }
  }

  async function postFinanceGroup(
    financeGroup: FinanceGroupClass,
    serverRequestType: ServerRequestType
  ) {
    let url = URL + "/expense";

    try {
      const serverResponse = await axios.put(url, financeGroup.toJSON());
      console.log(serverResponse.data);
      getServerData(serverRequestType); //invalidate this data
    } catch (error) {
      console.log(
        "Error while calling axios.put(url)\nError message: " + error
      );
    }
  }

  async function postExpense(expense: Expense) {
    postFinance(expense, ServerRequestType.EXPENSE);
  }
  async function postIncome(income: Income) {
    postFinance(income, ServerRequestType.INCOME);
  }
  async function postExpenseGroup(expenseGroup: FinanceGroupClass) {
    postFinanceGroup(expenseGroup, ServerRequestType.EXPENSE);
  }
  async function postIncomeGroup(incomeGroup: FinanceGroupClass) {
    postFinanceGroup(incomeGroup, ServerRequestType.INCOME);
  }
};

export default GetDataHook;
