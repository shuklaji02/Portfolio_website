$(document).on("click", ".navLink .navItem", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
setTimeout(function () {
  $(".preload").remove();
}, 3000);

$(window).ready(function () {
  setInterval(function () {
    $(".navbar-inverse").addClass("navbar-fixed-top");
  }, 3001);
});
