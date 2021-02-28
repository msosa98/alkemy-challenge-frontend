import { types } from "../types";

export const signin = ({ user, token }) => ({
  type: types.signin,
  payload: { user, token },
});

export const logout = () => ({
  type: types.logout,
});
