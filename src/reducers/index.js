import { combineReducers } from "redux";
import { campaignReducer } from "./CampaignReducer";
import { userReducer } from "./UserReducer";
export default combineReducers({ campaignReducer, userReducer });
