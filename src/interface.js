blobListen('#document').ready(function(){

  var app = new App();
  makeOL();

  blobListen('create').click(function(){
    var note = document.getElementById("new-note").value;
    app.createNote(note);
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
    var item = document.createElement('li');
    var headline = app.mapNotes().slice(-1)[0];
    var index = app.mapNotes().lastIndexOf(headline);
    item.setAttribute("id", "headline-" + index);
    item.appendChild(document.createTextNode(headline));
    document.getElementById('full-view').appendChild(addArticle(index));
    item.addEventListener('click', function(){
      blobListen('container').hide();
      blobListen('article-'+index).show();
    }, false);
    return item;
  }

  function addArticle(index) {
    var article = document.createElement('p');
    article.setAttribute("style", "display:none");
    article.setAttribute("id", "article-" + index);
    var fullNote = app.notes[index];
    article.appendChild(document.createTextNode(fullNote));
    var close = document.createElement("input");
    close.setAttribute("id", "close");
    close.setAttribute("type", "submit");
    close.setAttribute("value", "close");
    article.appendChild(close);
    close.addEventListener('click', function(){
      blobListen('container').show();
      blobListen('article-'+index).hide();
    }, false);
    return article;
  }

});
