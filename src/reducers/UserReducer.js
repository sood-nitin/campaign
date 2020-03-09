import { SET_USERS } from "../constants";

const initialUserState = {
  users: [],
  isLoading: true
};

export const userReducer = (state = initialUserState, action) => {
  let { type, data } = action;
  switch (type) {
    case SET_USERS:
      let users = {};
      for (let idx = 0; idx < data.length; idx++) {
        users[data[idx].id] = data[idx];
      }
      return { ...state, users, isLoading: false };
    default:
      return state;
  }
};
