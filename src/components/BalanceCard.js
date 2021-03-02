import React from "react";
import { useSelector } from "react-redux";

export const BalanceCard = () => {
  const { balance } = useSelector((state) => state.operations);

  return (
    <div className="card text-center mb-4 p-3 shadow">
      <h3 className="card-title">Current balance</h3>
      {balance < 0 ? (
        <h2 className="display-4 text-danger">-${Math.abs(balance)}</h2>
      ) : (
        <h2 className="display-4">${balance}</h2>
      )}
    </div>
  );
};
