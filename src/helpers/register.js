import Axios from "axios";

export const register = async (firstname, lastname, email, password) => {
  const { data } = await Axios.post("http://localhost:4000/api/auth/signup", {
    firstname,
    lastname,
    email,
    password,
  });
  return data;
};
