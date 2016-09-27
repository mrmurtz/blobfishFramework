describe("App", function(){
  var app;

  it("has notes", function(){
    app = new App();
    expect(app.notes).toEqual([]);
  });

  it("createNotes will add a new note", function(){
    app = new App();
    app.createNote("Remember to code");
    expect(app.notes.length).toEqual(1);
  });
 
});
