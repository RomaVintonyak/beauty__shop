jQuery(document).ready(function () {
  "use script";
  /*burger button*/
  var burger = $(".burger__btn");
  burger.on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("burger__btn--active");
  })
});