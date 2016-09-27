function blobListen(element){
  return new BlobEvent(element);
}


function BlobEvent(element){
  this.element = element;
}

BlobEvent.prototype = {
  ready: function(callback){
    this.element.readyState != 'loading' ? callback() : this.element.addEventListener('DOMready', callback);
  },

  click: function(callback){
    return this.element.callback();
  }
};
