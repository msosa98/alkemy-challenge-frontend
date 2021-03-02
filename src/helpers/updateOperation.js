import Axios from "axios";

export const updateOperation = async (token, operation) => {

  let config = {
    headers: { Authorization: token },
  };

  const { data } = await Axios.put(`http://localhost:4000/api/operations/${operation.id}`, operation, config);
  return data;
}