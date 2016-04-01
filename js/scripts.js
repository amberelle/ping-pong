//business logic
var pingandpong = function(score) {
  if (score % 3 === 0) {
      return "ping";
  } else if (score % 5 === 0){
      return "pong";
  } else ((score % 3 === 0) && (score % 5 === 0)){
      return "pingpong";
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
