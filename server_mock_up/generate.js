module.exports = function () {
  const faker = require("faker");
  const _ = require("lodash");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const expense_group_value = [
    {
      id: 0,
      name: "withdrawal",
      description: "Example: " + faker.finance.transactionDescription(),
    },
    {
      id: 1,
      name: "payment",
      description: "Example: " + faker.finance.transactionDescription(),
    },
    {
      id: 2,
      name: "invoice",
      description: "Example: " + faker.finance.transactionDescription(),
    },
    {
      id: 3,
      name: "deposit",
      description: "Example: " + faker.finance.transactionDescription(),
    },
  ];

  const income_group_value = [
    {
      id: 0,
      name: "withdrawal",
      description: "Example: " + faker.finance.transactionDescription(),
    },
    {
      id: 1,
      name: "payment",
      description: "Example: " + faker.finance.transactionDescription(),
    },
    {
      id: 2,
      name: "invoice",
      description: "Example: " + faker.finance.transactionDescription(),
    },
    {
      id: 3,
      name: "deposit",
      description: "Example: " + faker.finance.transactionDescription(),
    },
  ];

  return {
    expense_group: expense_group_value,

    income_group: income_group_value,

    expense: _.times(100, function (n) {
      return {
        id: n,
        description: faker.finance.transactionDescription(),
        amount: faker.finance.amount(0, 1000, 2),
        expense_group:
          expense_group_value[getRandomInt(expense_group_value.length)],
      };
    }),

    income: _.times(100, function (n) {
      return {
        id: n,
        description: faker.finance.transactionDescription(),
        amount: faker.finance.amount(500, 1000, 2),
        income_group:
          income_group_value[getRandomInt(income_group_value.length)],
      };
    }),
  };
};
