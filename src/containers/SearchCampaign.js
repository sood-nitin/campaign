import { connect } from "react-redux";
import SearchCampaign from "../components/SearchCampaign";
import { searchRecords } from "../actions";

const mapStateToProps = state => {
  const { rootReducer } = state;
  const { searchText } = rootReducer;
  return {
    searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCampaignRecords: text => dispatch(searchRecords(text))
  };
};

const SearchCampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCampaign);

export default SearchCampaignContainer;
