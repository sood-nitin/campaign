import React, { useEffect } from "react";
import CampaignsTable from "../containers/CampaignTable";
import DateRangeFilter from "../containers/DateRangeFilter";
import SearchCampaignFilter from "../containers/SearchCampaignFilter";

export const Campaign = props => {
  useEffect(() => {
    const { addCampaigns, getUsers } = props;
    window.AddCampaigns = records => {
      addCampaigns(records);
    };
    getUsers();
  }, [props]);
  return (
    <div>
      <div className="position-center flex-dir-row">
        <DateRangeFilter />
        <SearchCampaignFilter />
      </div>
      <div className="position-center">
        <CampaignsTable />
      </div>
    </div>
  );
};
