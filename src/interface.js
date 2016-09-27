blobListen('#document').ready(function(){

  var app = new App();
  makeOL();

  blobListen('create').click(function(){
    var note = document.getElementById("new-note").value;
    app.createNote(note);
    console.log(app.abbr_notes);
    document.getElementById('BlobList').appendChild(addLi());
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

  function makeOL() {
    var list = document.createElement('ol');
    list.setAttribute("id", "BlobList");
    document.getElementById('uiList').appendChild(list);
  }

  function addLi() {
    list = document.getElementbyId("BlobList");
    var item = document.createElement('li');
    return item.appendChild(document.createTextNode(app.mapNotes().slice(-1)[0]));
  }


  // function updateOL() {
  //
  //   for (var i = 0; i < app.listNotes().length; i++) {
  //     var item = document.createElement('li');
  //     item.appendChild(document.createTextNode(app.listNotes()[i]));
  //     list.appendChild(item);
  //   }
  //   console.log(list);
  //   return list;
  // }



});
