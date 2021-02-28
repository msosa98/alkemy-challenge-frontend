import Axios from "axios";

export const login = async (email, password) => {
  const { data } = await Axios.post("http://localhost:4000/api/auth/signin", {email, password});
  return data;
}