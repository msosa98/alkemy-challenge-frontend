import Axios from "axios";

export const removeOperation = async (token, operationID) => {

  let config = {
    headers: { Authorization: token },
  };

  await Axios.delete(`http://localhost:4000/api/operations/${operationID}`, config);
} 