import { connect } from "react-redux";
import { DateRangeSelector } from "../components/DateRangeFilter.jsx";
import { setStartDate, setEndDate } from "../actions/Campaigns";

const mapStateToProps = state => {
  const { rootReducer } = state;
  const { startType, endType, startDate, endDate } = rootReducer;
  return { startType, endType, startDate, endDate };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeSelector);
