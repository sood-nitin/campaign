import React from "react";
import moment from "moment";
export default class CampaignData extends React.Component {
  kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  render() {
    const { startDate, endDate, searchText, records, users } = this.props;
    let filteredRecords = [...records];
    filteredRecords = filteredRecords.filter(record => {
      const result1 = record.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      let result2;
      if (startDate && endDate) {
        result2 = startDate < record.endDate && endDate > record.startDate;
      } else if (startDate) {
        result2 = startDate < record.endDate;
      } else if (endDate) {
        result2 = endDate > record.startDate;
      } else {
        result2 = true;
      }
      let result = result1 && result2;
      return result;
    });
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
            {users.length > 0 ? (
              filteredRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.username}</td>
                  <td>{moment(record.startDate).format("MM/DD/YYYY")}</td>
                  <td>{moment(record.endDate).format("MM/DD/YYYY")}</td>
                  <td>
                    {record.endDate >
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
                  <td>{this.kFormatter(record.Budget)} USD</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>"Loading..."</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
