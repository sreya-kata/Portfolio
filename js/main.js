$(document).ready(function () {
  let $btns = $(".project-area .container .button-group button");

  $btns.click(function (e) {
    $(".project-area .container .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $("project-area button-group #btn1").trigger("click");

  //owl carousel
  $(".site-main .fun-facts .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
    },
  });

  //sticky navIAGTion
  let nav_offset_top = $(".heading").height() + 50;

  function navbarFixed() {
    if ($(".heading").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".heading .main-menu").addClass("navbar_fixed");
        } else {
          $(".heading .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
