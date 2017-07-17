var folderPanelHeight = 300;

$("#infoToggler").click(function() {
  $(".arrow").toggle();
  $("#news").toggle();
  $("#panel").height($("#panel").height() === folderPanelHeight ? 1250 : folderPanelHeight);
});
