
module.exports = getDate; // we're not adding the parenthesis because we do NOT want to call the function per se
// we'll call it in app.js
// module.exports is a JS object, which has properties and methods associated with it

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  let day = today. toLocaleDateString("en-US", options);

  return day;
}
