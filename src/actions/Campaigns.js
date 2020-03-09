import {
  SEARCH_CAMPAIGN_RECORDS,
  ADD_CAMPAIGNS,
  SET_START_DATE,
  SET_END_DATE
} from "./../constants";

export const searchRecords = text => ({
  type: SEARCH_CAMPAIGN_RECORDS,
  data: text
});

export const addCampaigns = newRecords => ({
  type: ADD_CAMPAIGNS,
  data: newRecords
});

export const setStartDate = date => ({
  type: SET_START_DATE,
  data: date
});

export const setEndDate = date => ({
  type: SET_END_DATE,
  data: date
});
