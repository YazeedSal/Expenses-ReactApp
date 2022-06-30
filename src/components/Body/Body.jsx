import React from "react";
import { useState } from "react";

const Body = (props) => {
  const { expenses, getExpensesFromDb } = props;
  let sum = 0;
  expenses.forEach((element) => {
    sum += parseInt(element.cost);
  });

  return (
    <div>
      <h1>total: {sum}</h1>
      {expenses.map((expense, i) => (
        <div key={i}>
          Task name is {expense.title} and it's cost is {expense.cost}
        </div>
      ))}
    </div>
  );
};

export default Body;
