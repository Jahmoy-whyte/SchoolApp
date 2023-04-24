const date = new Date();
export const Getmonths = () => {
  const currentMonth = date.getMonth(); // 👈️ months are 0-based
  const month = [
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
  return month[currentMonth];
};

export const Getweeks = () => {
  const currentWeek = date.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[currentWeek];
};

export const Getyear = () => {
  return date.getFullYear();
};

export const GetDaysInMonth = () => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
