import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
      <Total expenses={expenses} />
    </div>
  );
}

export default App;