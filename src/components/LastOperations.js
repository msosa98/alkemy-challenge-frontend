import React from "react";
import { useSelector } from "react-redux";
import { OperationItem } from "./OperationItem";

export const LastOperations = () => {
  const { operations } = useSelector((state) => state.operations);

  return (
    <>
      {operations.length === 1 && <OperationItem {...operations[0]} />}
      {operations.length > 1 && (
        <>
          <OperationItem {...operations[operations.length - 1]} />
          <OperationItem {...operations[operations.length - 2]} />
        </>
      )}
      {operations.length === 0 && <h4 className="text-center mt-5">You have no operations</h4>}
    </>
  );
};
