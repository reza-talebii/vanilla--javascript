const date = new Date();
const timeContainer = document.querySelector("#time");
const dateContainer = document.querySelector("#date");

const hourAndMinute = () => {
  const hours = date.getHours();
  const minute = date.getMinutes();
  const pm_am = hours >= 12 ? "AM" : "PM";
  timeContainer.innerHTML = `
  ${hours}:${minute} <span id="am-pm">${pm_am}</span>`;
};

const getDate = () => {
  const dayOfWeek = getWeek(date.getDay());
  const day = date.getDate();
  const month = getMonth(date.getMonth());

  dateContainer.innerHTML = `${dayOfWeek}, ${day} ${month}`;
};

const getWeek = (index) => {
  let week = "";
  switch (index) {
    case 0:
      week = "Monday";
      break;
    case 1:
      week = "Tuesday";
      break;
    case 2:
      week = "Wednesday";
      break;
    case 3:
      week = "Thursday";
      break;
    case 4:
      week = "Friday";
      break;
    case 5:
      week = "Saturday";
      break;
    case 6:
      week = "Sunday";
      break;

    default:
      week = "error";
      break;
  }
  return week;
};

const getMonth = (index) => {
  let month = "";
  switch (index) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

    default:
      month = "error";
      break;
  }
  return month;
};

export { getDate, hourAndMinute };
