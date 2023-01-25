// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var blocks = $(".time-block");
//this refers to .savebtn
  $(".saveBtn").on("click", function () {
   // console.log($(this));
//this targets siblings of savebtn
    var userData = $(this).siblings(".description").val();
    console.log(userData)
    //TO DO:figure out what to do after targetting parent
    var id = $(this).parent().attr("id")
    localStorage.setItem(id, userData);
    

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    $("#notify").addClass("show");
    var time = dayjs().format("hh:mm:ss");
    var date = dayjs().format("M-DD-YYYY");

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    setTimeout(function () {
      $("#notify").removeClass("show");
    }, 5000);
  });
  $(".time-block").each(function(){
    //console.log($(this).attr("id"))
var key = $(this).attr("id");
$(this).children(".description").val(localStorage.getItem(key))
  })
  
});
  // TODO: Add code to display the current date in the header of the page.
var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
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
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour =
    objToday.getHours() > 12
      ? objToday.getHours() - 12
      : objToday.getHours() < 10
      ? "0" + objToday.getHours()
      : objToday.getHours(),
  curMinute =
    objToday.getMinutes() < 10
      ? "0" + objToday.getMinutes()
      : objToday.getMinutes(),
  curSeconds =
    objToday.getSeconds() < 10
      ? "0" + objToday.getSeconds()
      : objToday.getSeconds(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today =
  curHour +
  ":" +
  curMinute +
  "." +
  curSeconds +
  curMeridiem +
  " " +
  dayOfWeek +
  " " +
  dayOfMonth +
  " of " +
  curMonth +
  ", " +
  curYear;

document.getElementsByTagName("h3")[0].textContent = today;