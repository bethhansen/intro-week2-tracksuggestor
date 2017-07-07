$(document).ready(function() {//this will tell the computor that we want it to do some work
  $("form#track-suggestor").submit(function(event){//when the submit button is pressed we want the computer to perform a acton
    var question1 = $("option.num1").val();//the answer that is selected from the options is given a value (string)
    var question2 = $("option.num2").val();//the answer that is selected from the options is given a value (string)
    var question3 = $("option.num3").val();//the answer that is selected from the options is given a value (string)
    var question4 = $("option.num4").val();//the answer that is selected from the options is given a value (string)
    var question5 = $("option.num5").val();//the answer that is selected from the options is given a value (string)

    $(".num1").text(question1);//the string which has a class is told to display to the user in text form
    $(".num2").text(question2);//the string which has a class is told to display to the user in text form
    $(".num3").text(question3);//the string which has a class is told to display to the user in text form
    $(".num4").text(question4);//the string which has a class is told to display to the user in text form
    $(".num5").text(question5);//the string which has a class is told to display to the user in text form

    $("#result").show();//the string is now told to show its collected answers in the result area which has a unique ID
    event.preventDefault();//this tells the function to reset itself
      })
})


$(document).ready(function() {
  $("form#track-suggestor").submit(function(event) {
    var question1 = $("option.num1").val();//the answer that is selected from the options is given a value (string)
    var question2 = $("option.num2").val();//the answer that is selected from the options is given a value (string)
    var question3 = $("option.num3").val();//the answer that is selected from the options is given a value (string)
    var question4 = $("option.num4").val();//the answer that is selected from the options is given a value (string)
    var question5 = $("option.num5").val();//the answer that is selected from the options is given a value (string)

if (question1 === "Large Company" && question2 === "Front-end user interface" && question3 === "Mac OS" && question4 === "5" && question5 === "Masters") {
  console.log(question1, question2, question3, question4, question5);
}

  })
})























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
