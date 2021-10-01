var date = moment().format("MMM Do YYYY");

$("#currentDay").append(date);



function currentTime() {
    var current = moment().hours()
    var time = $('.time-block');
}

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: red");


    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: green");
    
    }
  }
}

$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#9").children("input").val(localStorage.getItem("9"));
$("#10").children("input").val(localStorage.getItem("10"));
$("#11").children("input").val(localStorage.getItem("11"));
$("#12").children("input").val(localStorage.getItem("12"));
$("#13").children("input").val(localStorage.getItem("13"));
$("#14").children("input").val(localStorage.getItem("14"));
$("#15").children("input").val(localStorage.getItem("15"));
$("#16").children("input").val(localStorage.getItem("16"));
$("#17").children("input").val(localStorage.getItem("17"));