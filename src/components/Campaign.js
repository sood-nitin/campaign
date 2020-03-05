import React from "react";
import CampaignDataContainer from "../containers/CampaignData";
import DateRangeContainer from "../containers/DateRangeSelector";
import SearchCampaignContainer from "../containers/SearchCampaign";

export default class Campaign extends React.Component {
  componentDidMount() {
    const { addCampaigns, setUsers } = this.props;
    window.AddCampaigns = arr => {
      addCampaigns((arr = []));
    };
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => setUsers(response));
  }
  render() {
    return (
      <div>
        <div className="position-center flex-dir-row">
          <DateRangeContainer />
          <SearchCampaignContainer />
        </div>
        <div className="position-center">
          <CampaignDataContainer />
        </div>
      </div>
    );
  }
}
