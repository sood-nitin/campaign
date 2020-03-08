import c from "../constants";

const initialUserState = {
  users: [],
  isLoading: true
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case c.SET_USERS:
      return { ...state, users: action.data, isLoading: false };
    default:
      return state;
  }
};
