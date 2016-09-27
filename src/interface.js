blobListen('#document').ready(function(){
  alert("updated");

  var app = new App();

  blobListen('create').click(function(){
    updateHomeDisplay();
  });

  //  Helper functions follow
  function updateHomeDisplay() {
    uiHome();
  }

  function uiHome(){
    blobListen('uiCreateNote').show();
    blobListen('uiList').show();
  }

});
