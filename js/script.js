//? Spinner Loading PArt
$(document).ready(function () {
  $("body").css("overflow", "auto");
  $(".spinner").addClass("d-none");
});

//? Navbar Part
const offset = $("#details").offset().top;

function scrollNavBar() {
  const scrollValue = $('.open-btn').offset().top;
  if (scrollValue >= offset - $(".open-btn").outerHeight()) {
    $(".open-btn").css("background-color", "#e78285");
  } else {
    $(".open-btn").css("background-color", "transparent");
  }
}

scrollNavBar();

$(window).scroll(function () {
  scrollNavBar();
});

let navSectionWidth = $(".nav-section").outerWidth();
$(".navBar").css("left", `${-navSectionWidth}px`);

$(".open-btn").click(function () {
  $(".navBar").animate({ left: "0px" }, 300);
  $(".open-btn").fadeOut(300);
});

$("#closeNavbarBtn").click(function () {
  $(".navBar").animate({ left: `${-navSectionWidth}px` }, 300);
  $(".open-btn").fadeIn(300);
});

window.addEventListener("resize", function () {
  navSectionWidth = $(".nav-section").outerWidth();
  console.log(navSectionWidth);
  if ($(".navBar").css("left") < "0px") {
    $(".navBar").css("left", `${-navSectionWidth}px`);
  }
});

//? Scroll Part
$(".nav-section a").click(function (e) {
  const sectionOffset = $($(e.target).attr("href")).offset().top;
  $("html, body").animate(
    { scrollTop: sectionOffset },
    { duration: 1000, queue: false }
  );
});

//? Details Section Part
const details = $("#details .item p");
for (let i = 1; i < details.length; i++) {
  $(details[i]).slideUp();
}

$("#details .item h3").click(function (e) {
  $(e.target).siblings().slideToggle(300);
  $("#details .item p").not($(e.target).siblings()).slideUp(300);
});

//? CountDown Part
let tmier = setInterval(() => {
  const finalDate = new Date(2023, 9, 25).getTime();
  const currentDate = new Date().getTime();
  const waiting = finalDate - currentDate;
  const days = Math.floor(waiting / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (waiting % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((waiting % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((waiting % (1000 * 60)) / 1000);
  $("#days").text(days);
  $("#hours").text(hours);
  $("#minutes").text(minutes);
  $("#seconds").text(seconds);

  if (waiting <= 0) {
    clearInterval();
    $(".time-out").removeClass("d-none").addClass("d-block");
    $(".countDown .item").addClass("d-none");
  }
}, 1000);

//? Form Part
let remainingCharacters;
$("textarea").keyup(function () {
  remainingCharacters = 100 - $(this).val().length;
  $("#remainingCharacters").text(remainingCharacters);
  if (remainingCharacters <= 0) {
    $(".counterMessage").addClass("d-none").removeClass("d-block");
    $(".alertMessage").addClass("d-block").removeClass("d-none");
  } else {
    $(".counterMessage").addClass("d-block").removeClass("d-none");
    $(".alertMessage").addClass("d-none").removeClass("d-block");
  }
});
