import c from "../constants";

export const getUsers = () => async dispatch => {
  const newUsers = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then(response => response.json());
  return dispatch({
    type: c.SET_USERS,
    data: newUsers
  });
};

export const setUsers = newUsers => ({
  type: c.SET_USERS,
  data: newUsers
});
