export const FOCUS_START_DATE = "FOCUS_START_DATE";
export const FOCUS_END_DATE = "FOCUS_END_DATE";
export const SEARCH_CAMPAIGN_RECORDS = "SEARCH_CAMPAIGN_RECORDS";
export const ADD_CAMPAIGNS = "ADD_CAMPAIGNS";
export const SET_USERS = "SET_USERS";
export const SET_START_DATE = "SET_START_DATE";
export const SET_END_DATE = "SET_END_DATE";

export const focusStartDate = text => {
  return dispatch =>
    dispatch({
      type: FOCUS_START_DATE,
      data: text
    });
};
export const focusEndDate = text => {
  return dispatch => {
    dispatch({
      type: FOCUS_END_DATE,
      data: text
    });
  };
};

export const searchRecords = text => {
  return dispatch =>
    dispatch({
      type: SEARCH_CAMPAIGN_RECORDS,
      data: text
    });
};

export const addCampaigns = newRecords => {
  return dispatch =>
    dispatch({
      type: ADD_CAMPAIGNS,
      data: newRecords
    });
};

export const setUsers = newUsers => {
  return dispatch =>
    dispatch({
      type: SET_USERS,
      data: newUsers
    });
};

export const setStartDate = date => {
  return dispatch =>
    dispatch({
      type: SET_START_DATE,
      data: date
    });
};

export const setEndDate = date => {
  return dispatch =>
    dispatch({
      type: SET_END_DATE,
      data: date
    });
};
