import { types } from "../types";

const initialState = {
  auth: false,
  user: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.signin:
      return {
        ...state,
        auth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.logout:
      return { initialState };
    default:
      return state;
  }
};
