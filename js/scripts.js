var add = function(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

$(document).ready(function() {
  $("form#suggestor").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();
    var result = add(question1, question2, question3, question4, question5);

event.preventDefault();
  if (question1 === "a" && question2 === "a" && question3 === "a" && question4 === "a" && question5 === "a") {
    $(".suggestion2").show();
    $(".intro").show();
    $(".html").show();
    $(".css").show();
    $(".c").hide();
    $(".java").hide();
    $(".javascript").hide();
    $(".android").hide();
    $(".design").hide();
    $(".ruby").hide();
    $(".rails").hide();
    $(".react").hide();
    $(".net").hide();
  }
  else if (question1 === "b" && question2 === "b" && question3 === "b" && question4 === "b" && question5 === "b") {
    $(".suggestion2").show();
    $(".intro").hide();
    $(".html").hide();
    $(".css").hide();
    $(".c").show();
    $(".java").show();
    $(".javascript").show();
    $(".android").hide();
    $(".design").hide();
    $(".ruby").hide();
    $(".rails").hide();
    $(".react").hide();
    $(".net").hide();
  }
  else {
    $(".suggestion2").show();
    $(".intro").hide();
    $(".html").hide();
    $(".css").hide();
    $(".c").hide();
    $(".java").hide();
    $(".javascript").hide();
    $(".android").hide();
    $(".design").show();
    $(".ruby").show();
    $(".rails").show();
    $(".react").hide();
    $(".net").hide();
  }
  alert ("howdy");
  });
});
