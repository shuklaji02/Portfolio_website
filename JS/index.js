$(document).on("click", ".navLink .navItem", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// Removes Splash screen after 3 sec
setTimeout(function () {
  $(".preload").remove();
  document.body.classList.toggle("main");
}, 3000);

$(window).ready(function () {
  setInterval(function () {
    $(".navbar-inverse").addClass("navbar-fixed-top");
  }, 3001);
});
