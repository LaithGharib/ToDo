function DateCheck() {
  let date = new Date();
  if (date > 11) {
    date = "Afternoon";
  } else {
    date = "Morning";
  }

  return date;
}

export default DateCheck;
