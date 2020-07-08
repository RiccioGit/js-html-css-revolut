console.log("hello world");

$(document).ready(function() {

  $(".flex-links .dropdown").mouseenter(function() {
    $(this).children(".drop-list").show();
  });

  $(".flex-links .dropdown").mouseleave(function() {
    $(this).children(".drop-list").hide();
  });

});
