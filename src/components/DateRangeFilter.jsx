import React, { useState } from "react";
import moment from "moment";
export const DateRangeSelector = props => {
  const [startType, setStartType] = useState("text");
  const [endType, setEndType] = useState("text");

  const { startDate, endDate, setStartDate, setEndDate } = props;
  return (
    <div>
      <input
        type={startType}
        placeholder="Start Date"
        onFocus={() => setStartType("date")}
        onBlur={() => setStartType("text")}
        onChange={e => setStartDate(e.target.value)}
        max={moment(endDate).format("YYYY-MM-DD")}
        name="start"
        value={startDate}
      />
      <input
        type={endType}
        placeholder="End Date"
        min={moment(startDate).format("YYYY-MM-DD")}
        onFocus={() => setEndType("date")}
        onBlur={() => setEndType("text")}
        onChange={e => setEndDate(e.target.value)}
        name="end"
        value={endDate}
      />
    </div>
  );
};
