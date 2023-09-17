import {
  GET_ALL_REPORTS,
  GET_REPORT_BY_ID,
  PUBLISH_REPORT,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  REGISTER_USER,
  LOGIN_POST,
} from "./actions-types";

const initialState = {
  allReports: [],
  users: [],
  user:null,
  isAuthenticated: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_REPORTS:
      return {
        ...state,
        allReports: payload,
      };
    case GET_REPORT_BY_ID:
      return {
        ...state, reportById: payload,
      }
    case PUBLISH_REPORT:
      return {
        ...state,
        allReports: [...state.allReports, payload],
      }
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_USER_BY_ID:
      const updatedUsers = state.users.map((user) => {
        if (user.id === payload.id) {

          return { ...user, ...payload };
        } else {
          return user;
        }
      });

      return {
        ...state,
        users: updatedUsers,
      };
    case REGISTER_USER:
      const existingUser = state.users.find((user) => user.email === payload.email);

      if (existingUser) {
        return state;
      }

      return {
        ...state,
        users: [...state.users, payload], 
      };
    case LOGIN_POST:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default reducer;







