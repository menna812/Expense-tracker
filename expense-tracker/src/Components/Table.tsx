import { useState } from "react";
import { Expenses } from "../App";

interface Props {
  expenseDetails: Expenses[];
  handleClick(index: number): void;
}

const Table = ({ expenseDetails, handleClick }: Props) => {
  const [filter, setFilter] = useState("All Categories");
  const filteringOptions = [
    "All Categories",
    "Groceries",
    "Utilites",
    "Entertainment",
  ];
  const shownElements =
    filter === "All Categories"
      ? expenseDetails
      : expenseDetails.filter(
          (detail) => detail.category.toLowerCase() === filter.toLowerCase()
        );
  return (
    <>
      <div className="mt-3">
        <select
          className="form-select"
          //   setting the value of filter according the value of the option chosen
          onChange={(event) => setFilter(event.target.value)}
        >
          {filteringOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      {/* table-bordered is necessary to have borders between each row and column */}
      <table className="table mt-3 table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* anything within map function should have a key  */}
          {/* React uses the key to efficiently update only the changed items instead of re-rendering the whole list. */}
          {shownElements.map((detail, index) => {
            return (
              <tr key={detail.description}>
                <td>{detail.description}</td>
                <td>
                  {"$"}
                  {detail.amount}
                </td>
                <td>{detail.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleClick(detail.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            {shownElements.length !== 0 && (
              <>
                <td>Total</td>
                <td>
                  $
                  {shownElements.reduce(
                    (acc, current) => acc + current.amount,
                    0
                  )}
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
