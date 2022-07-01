import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const getExpensesFromDb = async function () {
    const dbExpenses = await axios.get("http://localhost:8080/item/getItems");
    setExpenses(dbExpenses.data);
  };
  const addExpensesToDb = async function (expense) {
    const response = await axios.post("http://localhost:8080/item/addItem", expense);
    await getExpensesFromDb();
  };
  useEffect(() => {
    getExpensesFromDb();
  }); 
  return (
    <div className="App">
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        addExpensesToDb={addExpensesToDb}
      ></Header>
      <Body
        expenses={expenses}
        setExpenses={setExpenses}
        getExpensesFromDb={getExpensesFromDb}
      ></Body>
    </div>
  );
}

export default App;
