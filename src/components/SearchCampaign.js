import React from "react";

export default class SearchCampaign extends React.Component {
  search(e) {
    const { props } = this.props;
    props.searchCampaignRecords(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search by Name"
          onChange={e => this.search(e)}
        />
      </div>
    );
  }
}
