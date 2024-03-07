jQuery(document).ready(function () {
  "use script";
  /*burger button*/
  var burger = $(".burger__btn");
  burger.on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("burger__btn--active");
  });
  /*intro slider*/
  var introSlider = $("#introSlider");
  introSlider.slick({
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    dotsClass: "intro__slider--dots",
    draggable: false,
    touchMove: false,
    focusOnSelect: false,
    swipe: false,
    arrows: true,
    prevArrow: '<button type="button" class="intro__slider--prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="intro__slider--next"><i class="fas fa-chevron-right"></i></button>',
  });
  /*main product slider*/
  var productSlider = $("#productSlider");
  productSlider.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    touchMove: false,
    focusOnSelect: false,
    swipe: false,
    arrows: true,
    prevArrow: '<button type="button" class="product__slider--prev"><span></span></button>',
    nextArrow: '<button type="button" class="product__slider--next"><span></span></button>',
  });
});