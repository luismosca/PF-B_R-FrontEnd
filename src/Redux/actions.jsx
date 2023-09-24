import axios from 'axios';

export const GET_REPORTS = 'GET_REPORTS';
export const CREATE_REPORT = 'CREATE_REPORT';
export const REPORTS_ID = 'REPORTS_ID';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTERED_REPORTS = 'FILTERED_REPORTS';
export const GET_REPORTS_BYID = 'REPORTS_BYID';
export const GET_REPORTS_BYNAME = 'REPORTS_BYNAME';

export const getAllReports = () => {
  const endpoint = 'https://br-service.onrender.com/reports';
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      const reports = data.reports;
      console.log(reports);
      return dispatch({
        type: GET_REPORTS,
        payload: reports,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const getReportDetail = (id) => {
  const endpoint = `https://br-service.onrender.com/reports/${id}`;
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
  const endpoint = 'https://br-service.onrender.com/reports';
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
  const { gender, age, location } = filters;
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://br-service.onrender.com/reports/?location=${location}&gender=${gender}&age=${age}`
      );
      dispatch({
        type: FILTERED_REPORTS,
        payload: response.data.reports,
      });
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
          `https://br-service.onrender.com/reports/${value}`
        );
        dispatch({
          type: GET_REPORTS_BYID,
          payload: [reportId.data],
        });
        console.log(reportId.data);
      } else {
        const response = await axios.get(
          `https://br-service.onrender.com/reports/?name=${value}`
        );
        dispatch({
          type: GET_REPORTS_BYNAME,
          payload: response.data.reports,
        });
      }
    } catch (error) {
      alert(`Not reports found with value: ${value}`, error);
    }
  };
};
