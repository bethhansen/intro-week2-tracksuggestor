var add = function(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5
};

$(document).ready(function() {
  $("form#track-suggestor").submit(function(event) {
    var question1 = parseInt($("option.num1").val());
    var question2 = parseInt($("option.num2").val());
    var question3 = parseInt($("option.num3").val());
    var question4 = parseInt($("option.num4").val());
    var question5 = parseInt($("option.num5").val());

    var result = add(question1, question2, question3, question4, question5);

if (result === 1 || result <= 10) {
  $(".suggestion2").show();
  $(".intro").show();
  $(".html").show();
  $(".css").show();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").hide();
  $(".android").hide();
  $(".design").show();
  $(".ruby").hide();
  $(".rails").hide();
  $(".react").hide();
  $(".net").hide(;)
}
else if (result === 11 || result <= 20) {
  $(".suggestion2").show();
  $(".intro").hide();
  $(".html").hide();
  $(".css").show();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").show();
  $(".android").hide();
  $(".design").show();
  $(".ruby").hide();
  $(".rails").hide();
  $(".react").hide();
  $(".net").hide(;)
}
else if (result === 21 || result <= 30) {
  $(".suggestion2").show();
  $(".intro").show();
  $(".html").hide();
  $(".css").show();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").show();
  $(".android").hide();
  $(".ruby").hide();
  $(".rails").hide();
  $(".design").show();
  $(".react").hide();
  $(".net").hide(;)
}
else if (result === 31 || result <= 40) {
  $(".suggestion2").show();
  $(".intro").hide();
  $(".html").hide();
  $(".css").hide();
  $(".c").hide();
  $(".java").hide();
  $(".javascript").show();
  $(".android").hide();
  $(".design").hite();
  $(".ruby").show();
  $(".rails").show();
  $(".react").hide();
  $(".net").hide(;)
}
else if (result === 41 || result <= 50) {
  $(".suggestion2").show();
  $(".intro").hide();
  $(".html").hide();
  $(".css").hite();
  $(".c").hide();
  $(".java").show();
  $(".javascript").show();
  $(".android").show();
  $(".design").hide();
  $(".ruby").hide();
  $(".rails").hide();
  $(".react").hide();
  $(".net").hide(;)
}
else {
  $(".suggestion2").show();
  $(".intro").hide();
  $(".html").hide();
  $(".css").hide();
  $(".c").show();
  $(".java").hide();
  $(".javascript").show();
  $(".android").hide();
  $(".design").hide();
  $(".ruby").hide();
  $(".rails").hide();
  $(".react").hide();
  $(".net").show();
}
  $("#result").show();//the string is now told to show its collected answers in the result area which has a unique ID
  event.preventDefault();//this tells the function to reset itself
  });
});
