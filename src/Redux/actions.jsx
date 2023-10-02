import axios from "axios";
import Swal from "sweetalert2";

export const SET_INDEX = "SET_INDEX";
export const GET_REPORTS = "GET_REPORTS";
export const CREATE_REPORT = "CREATE_REPORT";
export const REPORTS_ID = "REPORTS_ID";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTERED_REPORTS = "FILTERED_REPORTS";
export const GET_REPORTS_BYID = "REPORTS_BYID";
export const GET_REPORTS_BYNAME = "REPORTS_BYNAME";
export const POST_USER_LOGIN = "POST_USER_LOGIN";
export const POST_USER_REGISTER = "POST_USER_REGISTER";
export const POST_FB_USER_REGISTER = "POST_FB_USER_REGISTER";
export const POST_GOOGLE_USER_REGISTER = "POST_GOOGLE_USER_REGISTER";

export const setIndex = (num) => {
  return async (dispatch) => {
    return dispatch({
      type: SET_INDEX,
      payload: num,
    })
  }
}

export const getAllReports = (page) => {
  const endpoint = `http://localhost:3001/reports/?page=${page}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      const reports = data.reports
      const total = data.total
      console.log(reports, total);
      return dispatch({
        type: GET_REPORTS,
        payload: {reports, total}
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const getReportDetail = (id) => {
  const endpoint = `http://localhost:3001/reports/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      console.log(data);
      return dispatch({
        type: REPORTS_ID,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const createReport = (report) => {
  console.log(report);
  const endpoint = 'http://localhost:3001/reports';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, report);
      console.log('El reporte fue creado exitosamente');
      return dispatch({
        type: CREATE_REPORT,
        payload: await data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const getFilteredReport = (filters) => {
  const { gender, age, location, page } = filters
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/reports/?page=${page}&location=${location}&gender=${gender}&age=${age}`)
      const reports = response.data.reports
      const total = response.data.total;
      dispatch({
        type: FILTERED_REPORTS,
        payload: {reports, total },
      })
    } catch (error) {
      console.log(`Not reports found`);
    }
  };
};

export const onSearch = (value) => {
  const guion = '-';
  return async function (dispatch) {
    try {
      if (value.includes(guion)) {
        const reportId = await axios.get(
          `http://localhost:3001/reports/${value}`
        );
        dispatch({
          type: GET_REPORTS_BYID,
          payload: [reportId.data],
        });
        console.log(reportId.data);
      } else {
        const response = await axios.get(
          `http://localhost:3001/reports/?name=${value}`
        );
        dispatch({
          type: GET_REPORTS_BYNAME,
          payload: response.data.reports,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `El reporte con valor: ${value}, no se encontró o no existe :(`,
        footer: `<label>Verifica la información</label/>`
      })
      // alert(`Not reports found with value: ${value}` , error);
    }
  };
};

export const postLoginUser = (login) => {
  const endpoint = "http://localhost:3001/session/login";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, login);
      console.log(data);
      return dispatch({
        type: POST_USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export const postRegisterUser = (register) => {
  const endpoint = "http://localhost:3001/session/register";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, register);
      console.log(data);
      return dispatch({
        type: POST_USER_REGISTER,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export const postRegisterFacebookUser = () => {
  const endpoint = "http://localhost:3001/auth/facebook";
  return async (dispatch) => {
    try {
      const { data } = window.open(endpoint, "_self");
      return dispatch({
        type: POST_FB_USER_REGISTER,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export const postRegisterGoogleUser = () => {
  const endpoint = "http://localhost:3001/auth/google";
  return async (dispatch) => {
    try {
      const { data } = window.open(endpoint, "_self");
      return dispatch({
        type: POST_GOOGLE_USER_REGISTER,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}