import axios from "axios";

export const requestSignIn = ({ payload }) => {
  return axios({
    url: "/api/auth",
    method: "post",
    data: { ...payload },
  });
};

export const requestSignUp = (userCredentials) => {
  return axios({
    url: "/api/users",
    method: "post",
    data: { ...userCredentials },
  });
};
