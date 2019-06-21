'use strict';
describe('leftPad', function () {
  describe('when string to pad is same length as length to pad', function () {
    it('returns the original string', function () {
      expect('donothing'.leftPad(9, 0)).toEqual('donothing');
    });
  });

  describe('when string to pad’s length is greater than length to pad', function () {
    it('returns the original string', function () {
      expect('already long enough string'.leftPad(9, 0)).toEqual('already long enough string');
    });
  });

  describe('when a string to pad’s length is less than the length to pad', function () {
    describe('when string to pad is 0', function () {
      it('left pads the string with 0', function () {
        expect('test'.leftPad(9, 0)).toEqual('00000test');
      });
    });

    describe('when string to pad is not provided', function () {
      it('left pads the string with an empty string', function () {
        expect('test'.leftPad(9)).toEqual('     test');
      });
    });

    describe('when value to pad is more than one character in length', function () {
      it('left pads the string with a repeated value until it reaches the desired length', function () {
        expect('test'.leftPad(30, 'multiple_chars_')).toEqual('multiple_chars_multiple_chtest');
      });
    });
  });
});