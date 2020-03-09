import { connect } from "react-redux";
import { SearchCampaign } from "../components/SearchCampaignFilter.jsx";
import { searchRecords } from "../actions/Campaigns";

const mapStateToProps = ({ campaignReducer: { searchText } }) => ({
  searchText
});

const mapDispatchToProps = dispatch => {
  return {
    searchCampaignRecords: text => dispatch(searchRecords(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCampaign);
