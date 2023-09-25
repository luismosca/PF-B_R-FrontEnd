import {
  GET_REPORTS,
  CREATE_REPORT,
  ORDER_BY_NAME,
  REPORTS_ID,
  FILTERED_REPORTS,
  GET_REPORTS_BYID,
  GET_REPORTS_BYNAME,
  POST_USER_LOGIN,
  POST_USER_REGISTER,
  POST_FB_USER_REGISTER,
  POST_GOOGLE_USER_REGISTER,
} from "./actions";

const initialState = {
  allReports: [],
  reportsCopy: [],
  reportDetail: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_REPORTS:
      return {
        ...state,
        allReports: actions.payload,
        reportsCopy: actions.payload,
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
        allReports: actions.payload,
      };

    case POST_USER_LOGIN:
      return {
        ...state,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
