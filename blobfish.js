function it(string, callback){
  console.log(string);
  callback();
}

function describe(string, callback){
  console.log(string);
  callback();
}

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Blob says FAIL: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Blob says PASS!");
    }
  }
};
