var folderPanelHeight = 300;

$("#infoToggler").click(function() {
  $(".arrow").toggle();
  $("#news").toggle();
  console.log($("#panel").height());
  if (Math.round($("#panel").height()) === folderPanelHeight) {
    $("#panel").height(1250);
  }
  else {
    $("#panel").height(folderPanelHeight);
  }
});
