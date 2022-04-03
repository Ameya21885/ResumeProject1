import axios from "axios";

export const UserDetailsAPI = (userId) => {
  let url = `https://jsonplaceholder.typicode.com/todos/${userId}`;

  return axios.get(url, {
    method: "GET",
    Headers: { "Content-Types": "application/json" },
  });
};
