export function alphaDate(d) {
  const dateObj = new Date(d);

  const day = dateObj.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
}
