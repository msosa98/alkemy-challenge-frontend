import Axios from "axios";

export const getOperations = async (token, user) => {

  let config = {
    headers: { Authorization: token },
  };

  const { data } = await Axios.get(`http://localhost:4000/api/operations/user/${user.id}`, config);
  return data;
}