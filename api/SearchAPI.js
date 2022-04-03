import axios from "axios";

export const SearchAPI = (userId) => {
  let url = `https://jsonplaceholder.typicode.com/posts/${userId}`;

  return axios.get(url, {
    method: "GET",
    Headers: { "Content-Types": "application/json" },
  });
};
