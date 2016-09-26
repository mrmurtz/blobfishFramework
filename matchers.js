var expect = function(actual_or_expected) {
  return actual_or_expected;
};

var when = function(actual) {
  try {
    actual;
  } catch (exception) {
    if (exception instanceof Error) {
      return this == exception;
    }
  }
};

var toEqual = function(expected) {
  return this == expected;
};

var toBe = function(expected) {
  return this === expected;
};

var not = function(callback) {
  return this != callback.call(this);
};
 // expect(error_message/typeoferror).when(user.validate(5555&^*))
