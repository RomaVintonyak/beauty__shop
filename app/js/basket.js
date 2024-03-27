jQuery(document).ready(function () {
   "use script";
   /*tovar count item*/
   var tovarPrice = $("._tovarPrice").text();
   var tovarCount = $("._tovarCount").val().trim();
   var tovarSumm = tovarPrice * tovarCount;
   $("._tovarSumm").html(tovarSumm);
   /*count minus*/
   $(".count__minus").on("click", function (event) {
      event.preventDefault();
      var counterMinus = $(this).closest(".tovar__count").find("._tovarCount");
      counterMinus.val(+counterMinus.val() - 1);
      var tovarPriceM = $(this).closest(".tovar__count")
         .closest(".tovar__block--content").find("._tovarPrice").text();
      var tovarCountM = $(this).closest(".tovar__count").find("._tovarCount").val().trim();
      var tovarSumm = tovarPriceM * tovarCountM;
      var tovarSummM = $(this).closest(".tovar__count")
         .closest(".tovar__block--content").find("._tovarSumm");
         tovarSummM.html(tovarSumm);
   });
   /*count plus*/
   $(".count__plus").on("click", function (event) {
      event.preventDefault();
      var counertPlus = $(this).closest(".tovar__count").find("._tovarCount");
      counertPlus.val(+counertPlus.val() + 1);
      var tovarPriceM = $(this).closest(".tovar__count")
         .closest(".tovar__block--content").find("._tovarPrice").text();
      var tovarCountM = $(this).closest(".tovar__count").find("._tovarCount").val().trim();
      var tovarSumm = tovarPriceM * tovarCountM;
      var tovarSummM = $(this).closest(".tovar__count")
      .closest(".tovar__block--content").find("._tovarSumm");
      tovarSummM.html(tovarSumm);
   });
});