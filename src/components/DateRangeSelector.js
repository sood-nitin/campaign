import React from "react";

export default class DateRangeSelector extends React.Component {
  focus(type, event) {
    const { props } = this.props;
    if (type === "start" && event === "focus") {
      props.focusStartDate("date");
    } else if (type === "start" && event === "blur") {
      props.focusStartDate("text");
    } else if (type === "end" && event === "focus") {
      props.focusEndDate("date");
    } else if (type === "end" && event === "blur") {
      props.focusEndDate("text");
    }
  }
  start(e) {
    const { props } = this.props;
    props.setStartDate(e.target.value);
  }
  end(e) {
    const { props } = this.props;
    props.setEndDate(e.target.value);
  }

  render() {
    const { startType, endType } = this.props.props;
    return (
      <div>
        <input
          type={startType}
          placeholder="Start Date"
          onFocus={() => this.focus("start", "focus")}
          onBlur={() => this.focus("start", "blur")}
          onChange={e => this.start(e)}
          name="start"
        />
        <input
          type={endType}
          placeholder="End Date"
          onFocus={() => this.focus("end", "focus")}
          onBlur={() => this.focus("end", "blur")}
          onChange={e => this.end(e)}
          name="end"
        />
      </div>
    );
  }
}
