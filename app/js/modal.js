jQuery(document).ready(function(){
   "use script";
   /*switch tabs button*/
   var modalTabs = $(".switch__tabs");
   console.log(modalTabs);
   modalTabs.on("click", function(event){
      event.preventDefault();
      modalTabs.removeClass("switch__tabs--active");
      $(this).toggleClass("switch__tabs--active");
   });
});