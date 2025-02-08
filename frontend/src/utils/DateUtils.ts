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

export const getFormattedDate = (timeStamp: string) => {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};
