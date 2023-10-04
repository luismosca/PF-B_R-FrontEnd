import axios from "axios";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const deleteToken = () => {
  localStorage.removeItem("token");
};

export const initAxiosInterceptors = () => {
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