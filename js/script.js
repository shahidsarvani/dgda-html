$().ready(function () {
  var defaultAnimations = [
    "fade-in",
    "slide-left",
    "slide-right",
    "slide-up",
    "slide-down",
  ];

  $(".slick-carousel").slick({
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 1,
    fade: true,
    speed: 500,
    cssEase: "linear",
    infinite: false,
  });

  $(".slick-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var currentElement = $(slick.$slides[currentSlide]);
      var nextElement = $(slick.$slides[nextSlide]);
      currentElement.removeClass(defaultAnimations.join(" "));
      var animationClass =
        $(nextElement).data("animation") ||
        defaultAnimations[nextSlide % defaultAnimations.length];
      nextElement.addClass(animationClass);
    }
  );

  $(".slick-carousel").on("afterChange", function (event, slick, currentSlide) {
    var currentElement = $(slick.$slides[currentSlide]);
    currentElement.removeClass(defaultAnimations.join(" "));
  });

  $("a[data-slide]").click(function (e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".slick-carousel").slick("slickGoTo", slideno - 1);
  });
});
