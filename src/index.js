function showTimezone(event) {
  if (event.target.value === "paris") {
    alert(`It is currently ${parisTimezone} in Europe/Paris`);
  }
  if (event.target.value === "sydney") {
    alert(`It is currently ${sydneyTimezone} in Australia/Sydney`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is currently ${tokyoTimezone} in Asia/Tokyo`);
  }
}
let citySelect = document.querySelector("#time-zone");
citySelect.addEventListener("change", showTimezone);

let parisTimezone = moment()
  .tz("Europe/Paris")
  .format("dddd MMMM D, YYYY hh:mm A");

let sydneyTimezone = moment()
  .tz("Australia/Sydney")
  .format("dddd MMMM D, YYYY hh:mm A");

let tokyoTimezone = moment()
  .tz("Asia/Tokyo")
  .format("dddd MMMM D, YYYY hh:mm A");
