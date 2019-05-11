var assert = require('assert');
var fizzbuzz = require('..');

describe('FizzBuzz', function() {
  it('returns fizzbuzz when divisible by 15', function() {
    assert.equal(fizzbuzz(45), 'FizzBuzz');
  });

  it('returns fizz when divisible by 3 but not 5', function() {
    assert.equal(fizzbuzz(6), 'Fizz');
  });

  it('returns buzz when divisble by 5 but not 3', function() {
    assert.equal(fizzbuzz(10), 'Buzz');
  });

  it('returns input otherwise', function() {
    assert.equal(fizzbuzz(7), '7');
  });
});
