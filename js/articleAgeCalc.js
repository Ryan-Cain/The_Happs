// const utcDateString = "2023-08-22T16:00:15Z";
const ds1 = "2023-08-23T14:00:00Z";
const ds2 = "2023-08-23T12:00:00Z";
const ds3 = "2023-08-23T19:03:58Z";

// takes UTC time of article publishing and subtracts the local
// time zone offset to UTC from it to get age of article in minutes
// then converts it into either mins, hours, or days
function findAgeOfArticle(dateString) {
  const currTime = new Date();
  // console.log("curr Time " + currTime);
  const utcDate = new Date(dateString);
  // console.log("utc date " + utcDate);
  // Get the local time zone offset in minutes
  const localTimeZoneOffset = new Date().getTimezoneOffset();
  // Calculate the local time by adding the offset
  const localTime = new Date(
    utcDate.getTime() + localTimeZoneOffset * 60 * 1000
  );

  let diff = (currTime - localTime) / 60 / 1000;
  // console.log("diff " + diff);

  if (diff < 60) {
    if (diff > 1) {
      return diff + " mins";
    } else {
      return diff + "1 min";
    }
  } else if (diff >= 60 && diff < 1440) {
    return Math.trunc(diff / 60) + " hrs";
  } else {
    return Math.trunc(diff / (60 * 24)) + "days";
  }
}

console.log(findAgeOfArticle(ds3));
