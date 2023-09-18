import {
  GET_REPORTS,
  CREATE_REPORT,
  ORDER_BY_NAME,
  REPORTS_ID,
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

    case REPORTS_ID:
      return {
        ...state,
        reportDetail: actions.payload,
      };

    case ORDER_BY_NAME:
      return {
        ...state,
        dogs: actions.payload,
      };

    case CREATE_REPORT:
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
