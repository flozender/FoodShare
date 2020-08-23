import axios from "axios";
// axios.defaults.baseURL = "http://localhost:5000";

export const getFood = (token) => {
  return axios({
    url: "/api/food",
    method: "get",
    headers: {
      Authorization: token,
    },
  });
};

export const createFood = (data) => {
  return axios({
    url: "http://localhost:5000/api/food/",
    method: "post",
    data: { ...data },
    headers: {
      Authorization: data.token,
    },
  });
};
