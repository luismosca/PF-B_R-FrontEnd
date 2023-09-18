import axios from "axios";

export const GET_REPORTS = "GET_REPORTS";
export const CREATE_REPORT = "CREATE_REPORT";
export const REPORTS_ID = "REPORTS_ID";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const getAllReports = () => {
  const endpoint = "http://localhost:3001/reports";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      console.log(data);
      return dispatch({
        type: GET_REPORTS,
        payload: data,
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

export const createDog = (report) => {
  console.log(report);
  const endpoint = "http://localhost:3001/reports";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, report);
      console.log("El reporte fue creado exitosamente");
      return dispatch({
        type: CREATE_REPORT,
        payload: await data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const getFilteredReport = (filters) => {
    const { gender, age, location } = filters
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/reports/?location=${location}&gender=${gender}&age=${age}`)
            dispatch({
                type: FILTERED_REPORTS,
                payload: response.data.reports,
            })
        } catch (error) {
            console.log(`Not reports found`);
        }
    }
}