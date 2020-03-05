import { connect } from "react-redux";
import CampaignData from "../components/CampaignData";

const mapStateToProps = state => {
  const { rootReducer } = state;
  const { startDate, endDate, searchText, records, users } = rootReducer;
  return {
    startDate,
    endDate,
    searchText,
    records,
    users
  };
};

const CampaignDataContainer = connect(mapStateToProps)(CampaignData);

export default CampaignDataContainer;
