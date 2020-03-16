import React from "react";

export const SearchCampaign = props => {
  const { searchText, searchCampaignRecords } = props;
  return (
    <div>
      <input
        className="m-8"
        type="text"
        placeholder="Search by Name"
        onChange={e => searchCampaignRecords(e.target.value)}
        value={searchText}
      />
    </div>
  );
};
