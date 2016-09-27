blobListen('#document').ready(function(){

  var app = new App();

  blobListen('create').click(function(){
    var note = document.getElementById("new-note").value;
    app.createNote(note);
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
