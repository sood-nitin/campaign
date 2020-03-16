import {
  SEARCH_CAMPAIGN_RECORDS,
  ADD_CAMPAIGNS,
  SET_START_DATE,
  SET_END_DATE
} from "./../constants";

const initialState = {
  searchText: "",
  records: [
    {
      id: 1,
      name: "Divavu",
      startDate: "09/19/2019",
      endDate: "03/19/2020",
      Budget: 88377,
      userId: 3
    },
    {
      id: 2,
      name: "Jaxspan",
      startDate: "11/21/2017",
      endDate: "02/21/2018",
      Budget: 608715,
      userId: 6
    },
    {
      id: 3,
      name: "Miboo",
      startDate: "11/01/2017",
      endDate: "06/20/2017",
      Budget: 239507,
      userId: 7
    },
    {
      id: 4,
      name: "Trilith",
      startDate: "08/25/2017",
      endDate: "11/30/2017",
      Budget: 179838,
      userId: 11
    },
    {
      id: 5,
      name: "Layo",
      startDate: "11/28/2017",
      endDate: "03/10/2018",
      Budget: 837850,
      userId: 9
    },
    {
      id: 6,
      name: "Photojam",
      startDate: "07/25/2017",
      endDate: "06/23/2017",
      Budget: 858131,
      userId: 3
    },
    {
      id: 7,
      name: "Blogtag",
      startDate: "6/27/2017",
      endDate: "01/15/2018",
      Budget: 109078,
      userId: 2
    },
    {
      id: 8,
      name: "Rhyzio",
      startDate: "10/13/2017",
      endDate: "01/25/2018",
      Budget: 272552,
      userId: 4
    },
    {
      id: 9,
      name: "Zoomcast",
      startDate: "09/06/2017",
      endDate: "11/10/2017",
      Budget: 301919,
      userId: 8
    },
    {
      id: 10,
      name: "Realbridge",
      startDate: "03/05/2018",
      endDate: "10/02/2017 ",
      Budget: 505602,
      userId: 5
    }
  ],
  startDate: "",
  endDate: ""
};

export const campaignReducer = (state = initialState, action) => {
  let records;
  let { type, data } = action;
  switch (type) {
    case ADD_CAMPAIGNS:
      records = [...state.records, ...data];
      return { ...state, records };
    case SEARCH_CAMPAIGN_RECORDS:
      return { ...state, searchText: data };
    case SET_START_DATE:
      return {
        ...state,
        startDate: data
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: data
      };
    default:
      return state;
  }
};
