import {
  FOCUS_START_DATE,
  FOCUS_END_DATE,
  SEARCH_CAMPAIGN_RECORDS,
  ADD_CAMPAIGNS,
  SET_USERS,
  SET_START_DATE,
  SET_END_DATE
} from "../actions";

const initialState = {
  startType: "text",
  endType: "text",
  searchText: "",
  records: [
    {
      id: 1,
      name: "Divavu",
      startDate: "2019-09-19",
      endDate: "2020-03-09",
      Budget: 88377,
      userId: 3
    },
    {
      id: 2,
      name: "Jaxspan",
      startDate: "2017-11-21",
      endDate: "2018-02-21",
      Budget: 608715,
      userId: 6
    },
    {
      id: 3,
      name: "Miboo",
      startDate: "2017-11-01",
      endDate: "2017-06-20",
      Budget: 239507,
      userId: 7
    },
    {
      id: 4,
      name: "Trilith",
      startDate: "2017-8-25",
      endDate: "2017-11-30",
      Budget: 179838,
      userId: 1
    },
    {
      id: 5,
      name: "Layo",
      startDate: "2017-11-28",
      endDate: "2018-03-10",
      Budget: 837850,
      userId: 9
    },
    {
      id: 6,
      name: "Photojam",
      startDate: "2017-07-25",
      endDate: "2017-06-23",
      Budget: 858131,
      userId: 3
    },
    {
      id: 7,
      name: "Blogtag",
      startDate: "2017-06-27",
      endDate: "2018-01-15",
      Budget: 109078,
      userId: 2
    },
    {
      id: 8,
      name: "Rhyzio",
      startDate: "2017-10-13",
      endDate: "2018-01-25",
      Budget: 272552,
      userId: 4
    },
    {
      id: 9,
      name: "Zoomcast",
      startDate: "2017-09-06",
      endDate: "2017-11-10",
      Budget: 301919,
      userId: 8
    },
    {
      id: 10,
      name: "Realbridge",
      startDate: "2018-03-05",
      endDate: "2017-10-02",
      Budget: 505602,
      userId: 5
    }
  ],
  users: [],
  startDate: "",
  endDate: ""
};

function rootReducer(state, action) {
  let records;
  switch (action.type) {
    case FOCUS_START_DATE:
      return { ...state, ...{ startType: action.data } };
    case FOCUS_END_DATE:
      return { ...state, ...{ endType: action.data } };
    case ADD_CAMPAIGNS:
      records = [...state.records, ...action.data];
      return { ...state, ...records };
    case SET_USERS:
      records = [...state.records];
      const users = action.data;
      records = records.map(record => {
        let index = users.findIndex(user => user.id === record.userId);
        if (index !== -1) {
          record.username = users[index].username;
        } else {
          record.username = "Unknown User";
        }
        return record;
      });
      return { ...state, records, ...{ users: action.data } };
    case SEARCH_CAMPAIGN_RECORDS:
      return { ...state, ...{ searchText: action.data } };
    case SET_START_DATE:
      return {
        ...state,
        ...{ startDate: action.data }
      };
    case SET_END_DATE:
      return {
        ...state,
        ...{ endDate: action.data }
      };
    default:
      return initialState;
  }
}

export default rootReducer;
