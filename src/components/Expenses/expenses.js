import { useState } from "react";
import Cards from "../UI/Cards";

import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangerHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Cards className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangerHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
    </Cards>
  );
}

export default Expenses;
