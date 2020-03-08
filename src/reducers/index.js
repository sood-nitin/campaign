import { combineReducers } from "redux";
import { rootReducer } from "./CampaignReducer";
import { userReducer } from "./UserReducer";
export default combineReducers({ rootReducer, userReducer });
