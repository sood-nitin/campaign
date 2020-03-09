import { connect } from "react-redux";
import { CampaignTable } from "../components/CampaignTable.jsx";
import withLoader from "../components/WithLoader";

const mapStateToProps = ({
  campaignReducer: { startDate, endDate, searchText, records },
  userReducer: { users, isLoading }
}) => ({
  startDate,
  endDate,
  searchText,
  records,
  users,
  isLoading
});

export default connect(mapStateToProps)(withLoader(CampaignTable));
