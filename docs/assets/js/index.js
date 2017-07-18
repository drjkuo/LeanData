$(document).ready(function(){
  $("#infoToggler").click(function() {
    $(".arrow").toggle();
    $("#toBeHide").toggle();
    $("#header").toggleClass("bottomRadius");
    $("#panel").toggleClass("panelHeight");
  });
});
