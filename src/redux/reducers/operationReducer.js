import { types } from "../types";

const initialState = {
  operations: [],
  balance: null,
  operation: null
}

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadOperations:
      return { ...state,  operations: [...action.payload]};
    case types.loadBalance:
      return { ...state, balance: action.payload }
    case types.createOperation:
      return { ...state, operations: [...state.operations, action.payload] }
    case types.deleteOperation:
      return { ...state, operations: state.operations.filter(operation => operation.id !== action.payload) }
    case types.setOperation:
      return { ...state, operation: action.payload }
    default:
      return state;
  }
}