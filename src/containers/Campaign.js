import { connect } from "react-redux";
import { Campaign } from "../components/Campaign.jsx";
import { addCampaigns } from "../actions/Campaigns";
import { getUsers } from "../actions/Users";

const mapDispatchToProps = dispatch => {
  return {
    addCampaigns: (records = []) => dispatch(addCampaigns(records)),
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(null, mapDispatchToProps)(Campaign);
