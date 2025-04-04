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





export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);
  const formattedDateTime =  date.toLocaleString("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata" // Convert to IST
  });
  return formattedDateTime;
}

// Example Usage
// console.log(formatDateTime("2025-03-21T09:56:26.417Z")); 
// Output: "21/03/2025, 15:26 PM" (IST)

