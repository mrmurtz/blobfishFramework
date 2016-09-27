function App(){
  this.notes = [];
}

App.prototype = {

  createNote: function(string){
    this.notes.push(string);
  },

};
