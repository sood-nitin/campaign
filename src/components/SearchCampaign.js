import React from "react";

export default class SearchCampaign extends React.Component {
  search(e) {
    const { searchCampaignRecords } = this.props;
    searchCampaignRecords(e.target.value);
  }
  render() {
    const { searchText } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search by Name"
          onChange={e => this.search(e)}
          value={searchText}
        />
      </div>
    );
  }
}
