// var add = function(num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// };
//
//
//
// $(document).ready(function() {
//   $("form.track-suggestor").submit(function(event)) {
//     event.preventDefault();
//     var question1 = parseInt($("#question1").val());
//     var question2 = parseInt($("#question2").val());
//     var question3 = parseInt($("#question3").val());
//     var question4 = parseInt($("#question4").val());
//     var question5 = parseInt($("#question5").val());
//     var result = add(num1, num2, num3, num4, num5);
//     $("#output").text(result);
// });


$(document).ready(function() {//this will tell the computor that we want it to do some work
  $("form#track-suggestor").submit(function(event){//when the submit button is pressed
    var question1 = $("option.num1").val();
    var question2 = $("option.num2").val();
    var question3 = $("option.num3").val();
    var question4 = $("option.num4").val();
    var question5 = $("option.num5").val();

    $(".num1").text(question1);
    $(".num2").text(question2);
    $(".num3").text(question3);
    $(".num4").text(question4);
    $(".num5").text(question5);

    $("#result").show();
    event.preventDefault();
      })
})
