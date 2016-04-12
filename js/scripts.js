


//business logic
var pingandpong = function(score) {
  var numbers = [];

  for (var index = 1; index <= score; index +=1) {

    if (index % 3 === 0 && index % 5 === 0) {
      numbers[index] = "pingpong"
    } else if (index % 5 === 0){
      numbers[index] = "pong"
    } else if (index % 3 === 0){
      numbers[index] = "ping"
    } else {
      numbers[index] = index
    }
    $("#list").append("<li>" + numbers[index] + "</li>");
  };
};


//user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("#list").text("");
    var score = parseInt($("#number_input").val());
    pingandpong(score);
  });
});
