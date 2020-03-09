import { connect } from "react-redux";
import { DateRangeSelector } from "../components/DateRangeFilter.jsx";
import { setStartDate, setEndDate } from "../actions/Campaigns";

const mapStateToProps = ({
  campaignReducer: { startType, endType, startDate, endDate }
}) => ({
  startType,
  endType,
  startDate,
  endDate
});

const mapDispatchToProps = dispatch => {
  return {
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeSelector);
