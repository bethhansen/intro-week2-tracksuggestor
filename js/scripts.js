var add = function(question1, question2) {
  return question1 + question2
};

$(document).ready(function() {
  $("form#track-suggestor").submit(function(event) {
    var question1 = parseInt($("option.num1").val());
    var question2 = parseInt($("option.num2").val());
    var question3 = parseInt($("option.num3").val());
    var question4 = parseInt($("option.num4").val());
    var question5 = parseInt($("option.num5").val());

    var result = add(question1, question2, question3, question4, question5);

if (result === 1 || result <= 5) {
  $(".suggestion2").show();
  $(".druple").hide();
  $(".html").hide();
  $(".css").show();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").hide();
  $(".android").hide();
  $(".php").hide();
}
else if (result === 6 || result <= 10) {
  $(".suggestion2").show();
  $(".druple").hide();
  $(".html").hide();
  $(".css").hide();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").show();
  $(".android").hide();
  $(".php").hide();
}
else {
  $(".suggestion2").hide();
  $(".druple").hide();
  $(".html").hide();
  $(".css").hide();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").hide();
  $(".android").hide();
  $(".php").hide();
}
  $("#result").show();//the string is now told to show its collected answers in the result area which has a unique ID
  event.preventDefault();//this tells the function to reset itself
  });
});
