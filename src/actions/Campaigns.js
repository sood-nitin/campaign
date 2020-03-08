import c from "../constants";

export const searchRecords = text => ({
  type: c.SEARCH_CAMPAIGN_RECORDS,
  data: text
});

export const addCampaigns = newRecords => ({
  type: c.ADD_CAMPAIGNS,
  data: newRecords
});

export const setStartDate = date => ({
  type: c.SET_START_DATE,
  data: date
});

export const setEndDate = date => ({
  type: c.SET_END_DATE,
  data: date
});
