const greetingMessage = () => {
  //Creating a date objec to store the current/today's date.
  const date = new Date();

  //Fetch the hours from the date object and assign it to a variable.
  const hours = date.getHours();

  //Checking for the conditions based on the timelines.
  if (hours < 12) {
    timeNow = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeNow = "Afternoon";
  } else if (hours >= 17 && hours < 20) {
    timeNow = "Evening";
  } else {
    timeNow = "Night";
  }

  // console.log("Good " + timeNow);
  return timeNow;
};

exports.greetingMessage = greetingMessage;
