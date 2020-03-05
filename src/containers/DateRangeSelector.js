import { connect } from "react-redux";
import DateRangeSelector from "../components/DateRangeSelector";
import {
  focusStartDate,
  focusEndDate,
  setStartDate,
  setEndDate
} from "../actions";

const mapStateToProps = state => {
  const { rootReducer } = state;
  const { startType, endType, startDate, endDate } = rootReducer;
  return { startType, endType, startDate, endDate };
};

const mapDispatchToProps = dispatch => {
  return {
    focusStartDate: text => dispatch(focusStartDate(text)),
    focusEndDate: text => dispatch(focusEndDate(text)),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
  };
};

const DateRangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRangeSelector);

export default DateRangeContainer;
