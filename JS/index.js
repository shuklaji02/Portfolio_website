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

// Scroll to top
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  $("html,body").animate({ scrollTop: 0 });
});

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $("#btnScrollToTop").removeClass("hide");
    } else {
      $("#btnScrollToTop").addClass("hide");
    }
  });
});
