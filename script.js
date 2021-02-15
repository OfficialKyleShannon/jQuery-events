$(document).ready(function(){
 $(".header").hover(function(){
 $(this).css("color", "black");
 $(this).css("background-color", "white");
 }, function(){
 $(this).css("color", "aquamarine");
 $(this).css("background-color", "black");
 });
});

$(document).ready(function(){
 $(".more-jquery").hide();
});


$(document).ready(function() {
 $(".click-here").click(function() {
     $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
 });
});

$(document).ready(function(){
 $(".js-click").dblclick(function(){
  $(".js-click").hide();
 });
});

$(document).ready(function(){
 $(".c-click").dblclick(function(){
  $(".c-click").hide();
 });
});

$(document).ready(function(){
 $(".java-click").dblclick(function(){
  $(".java-click").hide();
 });
});

$(document).ready(function(){
 $(".ruby-click").dblclick(function(){
  $(".ruby-click").hide();
 });
});

$(document).ready(function(){
 $(".python-click").dblclick(function(){
  $(".python-click").hide();
 });
});

$(document).ready(function(){
 $("input").keydown(function(){
  $(this).toggleClass("input");
 });
});
