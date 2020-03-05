import React from "react";
import DateRangeSelector from "./DateRangeSelector";
import Search from "./SearchCampaign";
import CampaignData from "./CampaignData";

export default class Campaign extends React.Component {
  componentDidMount() {
    const { addCampaigns, setUsers } = this.props;
    window.AddCampaigns = arr => {
      addCampaigns(arr);
    };
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => setUsers(response));
  }
  render() {
    return (
      <div>
        <DateRangeSelector props={this.props} />
        <Search props={this.props} />
        <CampaignData props={this.props} />
      </div>
    );
  }
}
