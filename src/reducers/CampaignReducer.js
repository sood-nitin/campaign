import moment from "moment";
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
      startDate: "9/19/2017",
      endDate: "3/9/2018",
      Budget: 88377,
      userId: 3
    },
    {
      id: 2,
      name: "Jaxspan",
      startDate: "11/21/2017",
      endDate: "2/21/2018",
      Budget: 608715,
      userId: 6
    },
    {
      id: 3,
      name: "Miboo",
      startDate: "11/1/2017",
      endDate: "6/20/2017",
      Budget: 239507,
      userId: 7
    },
    {
      id: 4,
      name: "Trilith",
      startDate: "8/25/2017",
      endDate: "11/30/2017",
      Budget: 179838,
      userId: 1
    },
    {
      id: 5,
      name: "Layo",
      startDate: "11/28/2017",
      endDate: "3/10/2018",
      Budget: 837850,
      userId: 9
    },
    {
      id: 6,
      name: "Photojam",
      startDate: "7/25/2017",
      endDate: "6/23/2017",
      Budget: 858131,
      userId: 3
    },
    {
      id: 7,
      name: "Blogtag",
      startDate: "6/27/2017",
      endDate: "1/15/2018",
      Budget: 109078,
      userId: 2
    },
    {
      id: 8,
      name: "Rhyzio",
      startDate: "10/13/2017",
      endDate: "1/25/2018",
      Budget: 272552,
      userId: 4
    },
    {
      id: 9,
      name: "Zoomcast",
      startDate: "9/6/2017",
      endDate: "11/10/2017",
      Budget: 301919,
      userId: 8
    },
    {
      id: 10,
      name: "Realbridge",
      startDate: "3/5/2018",
      endDate: "10/2/2017 ",
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
      records = state.records;
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
      return { ...state, ...{ records }, ...{ users: action.data } };
    case SEARCH_CAMPAIGN_RECORDS:
      // if (action.data.length) {
      records = state.records.filter(record => record.username === action.data);
      // }
      return { ...state, ...{ records }, ...{ searchText: action.data } };
    case SET_START_DATE:
      const selectedDate = moment(action.data).format("MM/DD/YYYY");
      records = state.records.filter(record => selectedDate < record.endDate);
      return {
        ...state,
        ...{ records },
        ...{ startDate: selectedDate }
      };
    case SET_END_DATE:
      return {
        ...state,
        ...{ endDate: moment(action.data).format("MM/DD/YYYY") }
      };
    default:
      return initialState;
  }
}

export default rootReducer;
