import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOperations } from "../helpers/getOperations";
import { showAlert } from "../helpers/showAlert";
import { updateOperation } from "../helpers/updateOperation";
import { loadOperations } from "../redux/actions/operationActions";

export const FormEdit = () => {
  const { token, user } = useSelector((state) => state.auth);
  const { operation } = useSelector((state) => state.operations);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();
  const [concept, setConcept] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const [updated, setUpdated] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleChangeConcept = (e) => {
    setConcept(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!concept || !amount || !category || !date) {
      setError(true);
      setErrorMessage("Missing Fields");
    } else {
      try {
        const opt = { ...operation, amount, concept, date, category };
        await updateOperation(token, opt);
        const operationsDB = await getOperations(token, user);
        setError(false);
        setUpdated(true);
        dispatch(loadOperations(operationsDB));
      } catch (e) {
        setErrorMessage(e.message);
      }
    }
  };

  return (
    <>
      <form className="border p-4" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4 border-bottom py-4">Edit Operation</h3>
        <input
          className="form-control mb-4"
          type="text"
          placeholder="Concept"
          onChange={handleChangeConcept}
          defaultValue={operation.concept}
        />
        <input
          className="form-control mb-4"
          type="number"
          placeholder="Amount"
          onChange={handleChangeAmount}
          defaultValue={operation.amount}
        />
        <input
          className="form-control mb-4"
          type="date"
          onChange={handleDateChange}
          defaultValue={operation.date}
        />
        <select
          className="custom-select mb-4"
          onChangeCapture={handleChangeCategory}
          defaultValue={operation.category}
        >
          <option value="1">Transport</option>
          <option value="2">Health</option>
          <option value="3">Clothing</option>
          <option value="4">Insurance</option>
          <option value="5">Entertaiment</option>
          <option value="6">Technology</option>
          <option value="7">Pets</option>
          <option value="8">Home</option>
          <option value="9">Hygiene</option>
          <option value="10">Salary</option>
          <option value="11">Other</option>
        </select>
        <button className="btn btn-primary btn-block">Edit</button>
      </form>
      {updated && showAlert("success", "Operation updated successfully")}
      {error && showAlert("danger", errorMessage)}
    </>
  );
};
