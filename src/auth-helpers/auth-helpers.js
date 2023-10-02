import axios from "axios";

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};

const deleteToken = () => {
  localStorage.removeItem("token");
};

const initAxiosInterceptors = () => {
  axios.interceptors.request.use(() => {
    const token = getToken();

    if (token) {
      config.defaults.headers.common["auth-token"] = `Bearer ${token}`;
    }

    return config;
  });

  axios.interceptors.response.use(
    () => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        deleteToken();
      }
      return Promise.reject(error);
    }
  );
};

module.exports = {
  setToken,
  getToken,
  deleteToken,
  initAxiosInterceptors,
};
