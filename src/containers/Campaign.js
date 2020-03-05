import { connect } from "react-redux";
import Campaign from "../components/Campaign";
import { addCampaigns, setUsers } from "../actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addCampaigns: arr => dispatch(addCampaigns(arr)),
    setUsers: arr => dispatch(setUsers(arr))
  };
};

const CampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);

export default CampaignContainer;
