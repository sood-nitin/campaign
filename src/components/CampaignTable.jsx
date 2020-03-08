import React from "react";
import moment from "moment";
import { kFormatter } from "../utils/campaign";
export const CampaignData = props => {
  const { startDate, endDate, searchText, records, users } = props;

  const filterRecords = filteredRecords =>
    filteredRecords.filter(record => {
      const nameMatched = record.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      if (!nameMatched) {
        return false;
      }

      if (startDate && endDate) {
        return startDate < record.endDate && endDate > record.startDate;
      } else if (startDate) {
        return startDate < record.endDate;
      } else if (endDate) {
        return endDate > record.startDate;
      }
      return true;
    });
  const filteredRecords = filterRecords([...records]);
  const getUserName = id => {
    for (let idx = 0; idx < users.length; idx++) {
      if (users[idx].id === id) {
        return users[idx].name;
      }
    }
    return "Unknown User";
  };
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
          {filteredRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{getUserName(record.userId)}</td>
              <td>{moment(record.startDate).format("MM/DD/YYYY")}</td>
              <td>{moment(record.endDate).format("MM/DD/YYYY")}</td>
              <td>
                {record.endDate > moment(new Date()).format("YYYY-MM-DD") ? (
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
