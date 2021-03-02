import React from "react";
import { useSelector } from "react-redux";
import { OperationItem } from "./OperationItem";

export const OperationList = () => {

  const { operations } = useSelector((state) => state.operations);

  return (
    <>
      {
        (operations.length > 0) 
        ? 
        operations.map((operation) => (
          <div key={operation.id} className="col-12 col-md-4">
            <OperationItem {...operation} />
          </div>
        ))
        : (
          <>
            <img className="m-auto" src={window.location.origin + "/img/empty.svg"} alt="img" />
          </>
        )
      }
    </>
  )
};
