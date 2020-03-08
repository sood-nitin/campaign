import { connect } from "react-redux";
import { CampaignData } from "../components/CampaignTable.jsx";
import withLoader from "../components/WithLoader";
const mapStateToProps = state => {
  const { rootReducer, userReducer } = state;
  const { startDate, endDate, searchText, records } = rootReducer;
  const { users, isLoading } = userReducer;
  return {
    startDate,
    endDate,
    searchText,
    records,
    users,
    isLoading
  };
};

export default connect(mapStateToProps)(withLoader(CampaignData));
