import { types } from "../types";

export const loadOperations = (operations) => ({
  type: types.loadOperations,
  payload: operations,
});

export const loadBalance = (balance) => ({
  type: types.loadBalance,
  payload: balance,
});

export const createOperation = (operation) => ({
  type: types.createOperation,
  payload: operation,
});

export const deleteOperation = (operationID) => ({
  type: types.deleteOperation,
  payload: operationID,
});

export const editOperation = (operation) => ({
  type: types.editOperation,
  payload: operation,
});


export const setOperation = (operation) => ({
  type: types.setOperation,
  payload: operation
});