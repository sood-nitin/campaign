import moment from "moment";
export const kFormatter = num =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

export const filterRecords = (
  filteredRecords,
  { startDate, endDate, searchText }
) =>
  filteredRecords.filter(record => {
    const nameMatched = record.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    if (!nameMatched) {
      return false;
    }

    let startDateFormatted = moment(record.startDate).format("YYYY-MM-DD");
    let endDateFormatted = moment(record.endDate).format("YYYY-MM-DD");

    if (startDate && endDate) {
      return startDate < endDateFormatted && endDate > startDateFormatted;
    } else if (startDate) {
      return startDate < endDateFormatted;
    } else if (endDate) {
      return endDate > startDateFormatted;
    }
    return true;
  });
