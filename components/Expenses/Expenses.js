import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
    console.log("Expenses.js: " + year);
  };

  const filteredExpenses = props.items.filter(({ date }) => {
    return date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          selectedYear={filteredYear}
        />
        {/* {filteredExpenses.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No expenses found
          </p>
        ) : (
          filteredExpenses.map(({ id, title, amount, date }) => {
            return (
              <ExpenseItem key={id} title={title} amount={amount} date={date} />
            );
          })
        )} */}

        {filteredExpenses.length === 0 && (
          <p style={{ color: "white", textAlign: "center" }}>
            No expenses found
          </p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(({ id, title, amount, date }) => {
            return (
              <ExpenseItem key={id} title={title} amount={amount} date={date} />
            );
          })}
      </Card>
    </div>
  );
};

export default Expenses;
