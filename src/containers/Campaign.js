import { connect } from "react-redux";
import Campaign from "../components/Campaign";
import {
  focusStartDate,
  focusEndDate,
  searchRecords,
  addCampaigns,
  setUsers,
  setStartDate,
  setEndDate
} from "../actions";
const mapStateToProps = state => {
  const { rootReducer } = state;
  return rootReducer;
};
const mapDispatchToProps = dispatch => {
  return {
    focusStartDate: text => dispatch(focusStartDate(text)),
    focusEndDate: text => dispatch(focusEndDate(text)),
    searchCampaignRecords: text => dispatch(searchRecords(text)),
    addCampaigns: arr => dispatch(addCampaigns(arr)),
    setUsers: arr => dispatch(setUsers(arr)),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
  };
};

const CampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);

export default CampaignContainer;
