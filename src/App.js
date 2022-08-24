import React, { useState } from "react";

import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "01",
    title: "Car Insurance",
    amount: 500,
    date: new Date(2022, 8, 23),
  },

  {
    id: "02",
    title: "Bike Insurance",
    amount: 300,
    date: new Date(2022, 8, 23),
  },

  {
    id: "03",
    title: "House Insurance",
    amount: 2500,
    date: new Date(2022, 8, 20),
  },

  {
    id: "04",
    title: "Company Insurance",
    amount: 5000,
    date: new Date(2022, 8, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
