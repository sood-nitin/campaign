import React from "react";

export default class DateRangeSelector extends React.Component {
  focus(type, event) {
    const { focusStartDate, focusEndDate } = this.props;
    if (type === "start" && event === "focus") {
      focusStartDate("date");
    } else if (type === "start" && event === "blur") {
      focusStartDate("text");
    } else if (type === "end" && event === "focus") {
      focusEndDate("date");
    } else if (type === "end" && event === "blur") {
      focusEndDate("text");
    }
  }
  start(e) {
    const { setStartDate } = this.props;
    setStartDate(e.target.value);
  }
  end(e) {
    const { setEndDate } = this.props;
    setEndDate(e.target.value);
  }

  render() {
    const { startType, endType, startDate, endDate } = this.props;
    return (
      <div>
        <input
          type={startType}
          placeholder="Start Date"
          onFocus={() => this.focus("start", "focus")}
          onBlur={() => this.focus("start", "blur")}
          onChange={e => this.start(e)}
          name="start"
          value={startDate}
        />
        <input
          type={endType}
          placeholder="End Date"
          onFocus={() => this.focus("end", "focus")}
          onBlur={() => this.focus("end", "blur")}
          onChange={e => this.end(e)}
          name="end"
          value={endDate}
        />
      </div>
    );
  }
}
