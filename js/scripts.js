var add = function(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
};



$(document).ready(function() {
  $("form.track-suggestor").submit(function(event)) {
    event.preventDefault();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var result = add(num1, num2, num3, num4, num5);
    $("#output").text(result);
});
