import React from "react";
import { useState } from "react";

const Header = (props) => {
  const { expenses, setExpenses } = props;

  const [inputValue, setInputvalue] = useState({ title: "", cost: "" });

  const handleInput = (input) => (event) => {
    // we use the douple arrow method to usr the same handler for multiple inputs (so here this is used instead of two handels for each input)
    const newValue = { ...inputValue };
    newValue[input] = event.target.value; // the word "input" here refers to the param that was given to the function(in this case as in title or cost)
    setInputvalue(newValue);
    console.log(newValue);
  };

  const handelSubmit = function () {
    const newExpenses = [...expenses, inputValue];
    setExpenses(newExpenses);
    setInputvalue({ title: "", cost: "" });
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
      <button onClick={handelSubmit}>Sumbit</button>{" "}
    </div>
  );
};

export default Header;
