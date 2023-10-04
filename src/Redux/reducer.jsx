import {
  GET_REPORTS,
  CREATE_REPORT,
  REPORTS_ID,
  FILTERED_REPORTS,
  GET_REPORTS_BYID,
  GET_REPORTS_BYNAME,
  SET_INDEX,
  POST_FB_USER_REGISTER,
  POST_GOOGLE_USER_REGISTER,
  POST_USER_LOGIN,
  POST_USER_REGISTER,
  LOG_OUT,
} from "./actions";

const initialState = {
  allReports: [],
  reportsCopy: [],
  reportDetail: [],
  totalReports: 0,
  user: {},
  index: 1,
};
console.log(initialState.allReports);

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_REPORTS:
      return {
        ...state,
        allReports: actions.payload.reports,
        reportsCopy: actions.payload.reports,
        totalReports: actions.payload.total,
      };

    case SET_INDEX:
      return {
        ...state,
        index: actions.payload,
      };

    case GET_REPORTS_BYID:
      return {
        allReports: actions.payload,
      };

    case GET_REPORTS_BYNAME:
      return {
        allReports: actions.payload,
      };

    case REPORTS_ID:
      return {
        ...state,
        reportDetail: actions.payload,
      };

    case CREATE_REPORT:
      return {
        ...state,
      };
    case FILTERED_REPORTS:
      return {
        ...state,
        allReports: actions.payload.reports,
        totalReports: actions.payload.total,
      };
    case POST_USER_LOGIN:
      return {
        ...state,
        user: actions.payload
      };

    case POST_USER_REGISTER:
      return {
        ...state,
      };

    case POST_FB_USER_REGISTER:
      return {
        ...state,
      };

    case POST_GOOGLE_USER_REGISTER:
      return {
        ...state,
      };
     
    case LOG_OUT:
      return {
        ...state,
        user: {}
      }  

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
