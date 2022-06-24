import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const getExpensesfromDb = async function () {
    const dbExpenses = await axios.get("");
    setExpenses(dbExpenses);
  };
  const addExpensesToDb = async function (expense) {
    const response = await axios.post("", expense);
    await getExpensesfromDb();
  };
  useEffect(() => {
    getExpensesfromDb();
  });
  return (
    <div className="App">
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        addExpensesToDb={addExpensesToDb}
      ></Header>
      <Body expenses={expenses} setExpenses={setExpenses}></Body>
    </div>
  );
}

export default App;
