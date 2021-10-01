# Daily_Planner

Homework 5
This is a simple daily planner that will help keep your work day organized. It will save events you have scheduled for the day, and keep track of what hour of the workday that you are on. Depending on which part of the day you are at the schedule will be color coded so you don't fall off track. Anything you have past will be shown in Gray. The hour you are currently on will be in red, and what you have remaining will be in green.

The Website can be found at: https://nskidmore7.github.io/Daily_Planner/

Technologies used:
HTML
CSS
JavaScript
Moment
Jquery
Bootstrap
Google Fonts


```JavaScript
function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: green");
    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");
    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: red");
    }
  }
}
```

This is the function that was used to color code the schedule. It takes the time of the day, and compares it to the time of the schedule, and depending on the relationship of the two it will make the row the corresponding color. 