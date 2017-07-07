$(document).ready(function() {
  $("form#track-suggestor").submit(function(event){
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


// $(document).ready(function() {
//   $("form#track-suggestor").submit(function(event) {
//     var question1 = $("option.num1").val();
//     var question2 = $("option.num2").val();
//     var question3 = $("option.num3").val();
//     var question4 = $("option.num4").val();
//     var question5 = $("option.num5").val();
//
// if (question1 === "#largeCompany" && question2 === "#frontendUser" && question3 === "#mac" && question4 === "#5years" && question5 === "#masters") {
//   console.log(question1, question2, question3, question4, question5);
//   $(".druple").show();
//   $(".html").hide();
//   $(".css").hide();
//   $(".c").hide();
//   $(".java").hide();
//   $(".javascript").hide();
//   $(".android").hide();
//   $(".php").hide();
//
//   $("#result").show();//the string is now told to show its collected answers in the result area which has a unique ID
//   event.preventDefault();//this tells the function to reset itself
//
// };
//
//   });
// });























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
