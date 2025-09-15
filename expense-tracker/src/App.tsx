import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { formData } from "./Components/Form";

export interface Expenses extends formData {
  id: number;
}

const App = () => {
  const [ExpensesDetails, setExpenseDetails] = useState<Expenses[]>([]);
  const addDetail = (data: formData) => {
    const newObject = { ...data, id: Date.now() };
    setExpenseDetails([...ExpensesDetails, newObject]);
  };
  const deleteExpense = (id: number) => {
    setExpenseDetails(ExpensesDetails.filter((detail) => detail.id !== id));
  };
  return (
    <div>
      <Form addDetail={addDetail} />
      <Table expenseDetails={ExpensesDetails} handleClick={deleteExpense} />
    </div>
  );
};

export default App;
