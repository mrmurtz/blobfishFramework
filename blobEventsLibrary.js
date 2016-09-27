function blobListen(element){
  return new BlobEvent(element);
}


function BlobEvent(element){
  this.element = element;
}

BlobEvent.prototype = {
 ready: function(callback){
  document.readyState != 'loading' ? callback() : document.addEventListener('DOMready', callback);
 }
};


// This is what you'll need to run to actually use the commands
// blobListen(document).ready(function(){
//
// });
