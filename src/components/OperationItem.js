import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBalance } from "../helpers/getBalance";
import { removeOperation } from "../helpers/removeOperation";
import { deleteOperation, loadBalance, setOperation } from "../redux/actions/operationActions";

export const OperationItem = ({ id, amount, concept, date, typeID, categoryID, userID }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const handleDelete = async () => {
    await removeOperation(token, id);
    const balance = await getBalance(token, user);
    dispatch(deleteOperation(id));
    dispatch(loadBalance(balance));
  };

  const handleEdit = () => {
    const opt = { id, amount, concept, date, typeID, categoryID, userID };
    dispatch(setOperation(opt));
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        {typeID === 2 ? (
          <h5 className="text-danger">-${amount}</h5>
        ) : (
          <h5 className="text-success">+${amount}</h5>
        )}
        <p className="card-text">{date.split('T')[0]}</p>
        <p className="card-text">{concept}</p>
        <Link to={"/edit"} className="btn btn-primary mr-4" onClick={handleEdit}>
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};
