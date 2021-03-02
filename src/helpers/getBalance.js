import Axios from "axios";

export const getBalance = async (token, user) => {

  let config = {
    headers: { Authorization: token },
  };

  const { data } = await Axios.get(`http://localhost:4000/api/operations/balance/${user.id}`, config);
  return data.balance;
}