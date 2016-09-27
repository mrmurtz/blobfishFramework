function App(){
  this.notes = [];
}

App.prototype = {

  createNote: function(string){
    this.notes.push(string);
  },

  showFull: function(index) {
    return this.notes[index];
  }

};
