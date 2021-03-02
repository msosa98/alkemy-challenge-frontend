import Axios from "axios";

export const saveOperation = async (token, operation) => {

  let config = {
    headers: { Authorization: token },
  };

  const { data } = await Axios.post('http://localhost:4000/api/operations/', operation, config);
  return data;
} 