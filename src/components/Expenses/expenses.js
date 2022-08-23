import Cards from "../UI/Cards";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const expenses = [
  { title: "Car Insurance", amount: 500, date: new Date(2022, 8, 23) },

  { title: "Bike Insurance", amount: 300, date: new Date(2022, 8, 23) },

  { title: "House Insurance", amount: 2500, date: new Date(2022, 8, 20) },

  { title: "Company Insurance", amount: 5000, date: new Date(2022, 8, 10) },
];

function Expenses(props) {
  return (
    <Cards className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Cards>
  );
}

export default Expenses;
