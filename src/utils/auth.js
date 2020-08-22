import axios from "axios";

export const requestSignIn = (userCredentials) => {
  return axios({
    url: "/api/auth",
    method: "post",
    data: { ...userCredentials },
  });
};

export const requestSignUp = (userCredentials) => {
  return axios({
    url: "/api/users",
    method: "post",
    data: { ...userCredentials },
  });
};
