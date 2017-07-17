var folderPanelHeight = 300;

$("#infoToggler").click(function() {
  // $(this).find('img').toggle();
  $(".arrow").toggle();
  $("#news").toggle();
  $("#panel").height($("#panel").height() === folderPanelHeight ? 1250 : folderPanelHeight);
  // $("#panel").animate({height:'300px'}, 500);
  // $("#panel").height( 300 );
  // $( "#panel" ).animate({
  //   height: ($( "#panel" ).height() === 1350) ? 300 : 1350
  // }, 200);


});
