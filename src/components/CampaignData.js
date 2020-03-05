import React from "react";

export default class CampaignData extends React.Component {
  render() {
    const { props } = this.props;
    const { records, users } = props;
    console.log(users);
    return (
      <div>
        <table>
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
              records.map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.username}</td>
                  <td>{record.startDate}</td>
                  <td>{record.endDate}</td>
                  <td></td>
                  <td>{record.Budget}</td>
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
