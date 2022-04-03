import axios from "axios";

export const UserDetailsAPI = (userIdDetails) => {
  let url = `https://jsonplaceholder.typicode.com/users/${userIdDetails}`;

  return axios.get(url, {
    method: "GET",
    Headers: { "Content-Types": "application/json" },
  });
};
