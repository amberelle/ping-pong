//business logic
var pingandpong = function(score) {
for (var index = 1; index <= score; index +=1) {
  if (index % 3 === 0 && index % 5 === 0) {
      $("#list").append("<li>" + "ping" + "</li>");
  } else if (index % 5 === 0){
      $("#list").append("<li>" + "ping" + "</li>");
  } else if (index % 3 === 0){
      $("#list").append("<li>" + "ping" + "</li>");
  } else {
      $("#list").prompt("please enter a number");
  }
};












//user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var score = parseInt($("#number_input").val());
    var result = pingandpong(score);
    $("#result").text(result);
  });
});
