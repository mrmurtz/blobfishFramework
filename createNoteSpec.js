describe("App", function(){
  var app;

  it("has no notes", function(){
    app = new App();
    expect(app.notes.length).toEqual(0);
  });

  it("createNotes will add a new note", function(){
    app = new App();
    app.createNote("Remember to code");
    expect(app.notes.length).toEqual(1);
  });


});
