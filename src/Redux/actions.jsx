import axios from "axios";
import {
    GET_ALL_REPORTS,
    GET_REPORT_BY_ID,
    PUBLISH_REPORT,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    REGISTER_USER,
    LOGIN_POST
} from "./actions-types";

export const getAllReports = () => {
    const url = 'http://localhost:3001/reports/';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(url)
            return dispatch({
                type :GET_ALL_REPORTS,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }    
};

export const getReportById = (id) => {
    const url = `http://localhost:3001/reports/${id}`;
    return async (dispatch) => {
      try {
        const { data } = await axios.get(url);
        return dispatch({
          type: GET_REPORT_BY_ID,
          payload: data
        });
      } catch (error) {
        console.log(error.message);
      }
    }
};

export const publishReport = (reportData) => {
    const url = 'http://localhost:3001/reports/';
    return async (dispatch) => {
      try {
        const { data } = await axios.post(url, reportData);
        return dispatch({
          type: PUBLISH_REPORT,
          payload: data
        });
      } catch (error) {
        console.log(error.message);
      }
    }
};

export const getAllUsers = () => {
    const url = 'http://localhost:3001/users/';
    return async (dispatch) => {
      try {
        const { data } = await axios.get(url);
        return dispatch({
          type: GET_ALL_USERS,
          payload: data
        });
      } catch (error) {
        console.log(error.message);
      }
    }
};

export const getUserById = (id) => {
    const url = `http://localhost:3001/users/${id}`;
    return async (dispatch) => {
      try {
        const { data } = await axios.get(url);
        return dispatch({
          type: GET_USER_BY_ID,
          payload: data
        });
      } catch (error) {
        console.log(error.message);
      }
    }
};
export const registerUser = (userData) => {
    const url = 'http://localhost:3001/session/register';
    return async (dispatch) => {
      try {
        const { data } = await axios.post(url, userData);
        return dispatch({
          type: REGISTER_USER,
          payload: data
        });
      } catch (error) {
        console.log(error.message);
      }
    }
};  
export const login = async (userData) => {
    const url = "http://localhost:3001/session/login"
    return async (dispatch) => {
        try {
            const {data} = await axios.post(url, userData)
            dispatch ({
                type: LOGIN_POST,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
};
