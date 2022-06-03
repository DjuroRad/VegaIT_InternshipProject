export enum FinanceType {
  INCOME = "income",
  EXPENSE = "expense",
}

export enum ServerRequestType {
  INCOME = "income",
  EXPENSE = "expense",
  INCOME_GROUP = "income_group",
  EXPENSE_GROUP = "expense_group",
}

interface FinanceGroupInterface {
  id: number;
  name: string;
  description: string;
}

export class FinanceGroupClass implements FinanceGroupInterface, JSONizable {
  id: number;
  name: string;
  description: string;

  constructor(name: string, id: number, description: string) {
    this.name = name;
    this.id = id;
    this.description = description;
  }

  toJSON(): string {
    throw new Error("Method not implemented.");
  }
  setJSON(jsonString: string): void {
    throw new Error("Method not implemented.");
  }
}

interface FinanceTypeInterface {
  id: number;
  description: string;
  amount: number;
  financeGroup: FinanceGroupClass;
}
interface JSONizable {
  //I am very creative with names
  toJSON(): string;
  setJSON(jsonString: string): void; //can be used as a constructor
}

export class FinanceTypeClass implements FinanceTypeInterface, JSONizable {
  id: number;
  description: string;
  amount: number;
  financeGroup: FinanceGroupClass;

  constructor(
    id: number,
    description: string,
    amount: number,
    financeGroup: FinanceGroupClass
  ) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.financeGroup = financeGroup;
  }

  toJSON(): string {
    throw new Error("Method not implemented.");
  }
  setJSON(jsonString: string): void {
    throw new Error("Method not implemented.");
  }
}

export type Income = FinanceTypeClass;
export type Expense = FinanceTypeClass;
export type IncomeGroup = FinanceGroupClass;
export type ExpenseGroup = FinanceGroupClass;
