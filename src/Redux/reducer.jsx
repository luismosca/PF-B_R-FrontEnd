import {
  GET_REPORTS,
  CREATE_REPORT,
  ORDER_BY_NAME,
  REPORTS_ID,
  FILTERED_REPORTS,
  GET_REPORTS_BYID,
  GET_REPORTS_BYNAME,
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
      }
    
    case GET_REPORTS_BYNAME:
      return {
        allReports: actions.payload,
      }

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
      }
    

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
