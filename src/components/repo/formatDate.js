const formatDate = (date) => {
  const rawDate = new Date(date);
  const day = rawDate.getDate();
  var monthNumber = rawDate.getMonth();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[monthNumber];
  const formattedDate = `${month} ${day}`;
  return formattedDate;
};

export default formatDate;