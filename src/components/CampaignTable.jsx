import React from "react";
import moment from "moment";
import { kFormatter, filterRecords } from "../utils/campaign";
export const CampaignTable = props => {
  const { records, users } = props;

  const filteredRecords = filterRecords([...records], props);

  return (
    <div>
      <table className="campaign-data-tbl">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>
                {users[record.userId]
                  ? users[record.userId].name
                  : "Unknown User"}
              </td>
              <td>{moment(record.startDate).format("MM/DD/YYYY")}</td>
              <td>{moment(record.endDate).format("MM/DD/YYYY")}</td>
              <td>
                {moment(record.endDate).format("YYYY-MM-DD") >
                moment(new Date()).format("YYYY-MM-DD") ? (
                  <div className="flex">
                    <div className="status active"></div>Active
                  </div>
                ) : (
                  <div className="flex">
                    <div className="status inactive"></div>Inactive
                  </div>
                )}
              </td>
              <td>{kFormatter(record.Budget)} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
