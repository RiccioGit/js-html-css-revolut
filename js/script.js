$(document).ready(function() {

  $(".dropdown").mouseenter(function() {
    $(this).children(".drop-list").show();
  });

  $(".dropdown").mouseleave(function() {
    $(this).children(".drop-list").hide();
  });

});
