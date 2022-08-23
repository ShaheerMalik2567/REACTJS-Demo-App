import Expenses from "./components/Expenses/expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2> Its Me Shaheer!</h2>
      <Expenses items={Expenses}></Expenses>
    </div>
  );
}

export default App;
