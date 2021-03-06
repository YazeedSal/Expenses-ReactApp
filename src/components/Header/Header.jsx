import React from "react";
import { useState } from "react";

const Header = (props) => {
  const { expenses, setExpenses, addExpensesToDb } = props;

  const [inputValue, setInputValue] = useState({ title: "", cost: "" });

  const handleInput = (input) => (event) => {
    // we use the double arrow method to use the same handler for multiple inputs (so here this is used instead of two handles for each input)
    const newValue = { ...inputValue };
    newValue[input] = event.target.value; // the word "input" here refers to the param that was given to the function(in this case as in title or cost)
    setInputValue(newValue);
    console.log(newValue);
  };
  const addItems = async function (item) {
    await addExpensesToDb(item);
  };
  const handelSubmit = function () {
    const newExpenses = [...expenses, inputValue];
    addItems(inputValue)
    setExpenses(newExpenses);
    setInputValue({ title: "", cost: "" });
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue.title}
        placeholder="new value for the body"
        onChange={handleInput("title")}
      />
      <input
        type="number"
        value={inputValue.cost}
        placeholder="new value for the body"
        onChange={handleInput("cost")}
      />
      <button onClick={handelSubmit}>Submit</button>{" "}
    </div>
  );
};

export default Header;
