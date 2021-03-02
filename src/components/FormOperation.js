import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../helpers/getBalance";
import { saveOperation } from "../helpers/saveOperation";
import { showAlert } from "../helpers/showAlert";
import { createOperation, loadBalance } from "../redux/actions/operationActions";

export const FormOperation = () => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();
  const [concept, setConcept] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState("1");
  const [category, setCategory] = useState("1");
  const [created, setCreated] = useState(false);
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

  const handleChangeType = (e) => {
    setType(parseInt(e.target.value));
  };

  const handleChangeCategory = (e) => {
    setCategory(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!concept, !amount, !date, !type, !category) {
      setError(true);
      setCreated(false);
      setErrorMessage("Missing fields");
    } else {
      try {
        const operation = {
          concept,
          amount,
          date,
          typeID: type,
          categoryID: category,
          userID: user.id,
        };
        const res = await saveOperation(token, operation);
        const balance = await getBalance(token, user);
        setError(false);
        setCreated(true);
        dispatch(createOperation(res));
        dispatch(loadBalance(balance));
      } catch (e) {
        setErrorMessage(e.message)
      }
    }
  };

  return (
    <>
      <form className="border p-4 shadow" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4 border-bottom py-4">Create Operation</h3>
        <input
          className="form-control mb-4"
          type="text"
          placeholder="Concept"
          onChange={handleChangeConcept}
        />
        <input
          className="form-control mb-4"
          type="number"
          placeholder="Amount"
          onChange={handleChangeAmount}
        />
        <input
          className="form-control mb-4"
          type="date"
          onChange={handleDateChange}
        />
        <select className="custom-select mb-4" onChangeCapture={handleChangeType} defaultValue="1">
          <option value="1">Entry</option>
          <option value="2">Egress</option>
        </select>
        <select
          className="custom-select mb-4"
          onChangeCapture={handleChangeCategory}
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
        <button className="btn btn-primary btn-block">Save</button>
      </form>
      { created && showAlert("success", "Operation created successfully") }
      { error && showAlert("danger", errorMessage) }
    </>
  )
};
