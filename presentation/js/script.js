$().ready(function(){
  $('.slick-carousel').slick({
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 1,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    infinite: false
  });
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slick-carousel').slick('slickGoTo', slideno - 1);
});