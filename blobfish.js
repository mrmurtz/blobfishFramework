function it(string, callback){
  console.log(string);
  callback();
}

function describe(string, callback){
  console.log(string);
  callback();
}

function expect(actual) {
  return new Test(actual);
}

function Test(actual) {
  this.actual = actual;
}

Test.prototype = {

  toEqual: function(expected) {
    console.log(this.actual == expected);
  }

};
