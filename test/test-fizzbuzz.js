/* global describe, beforeEach, afterEach, it */
'use strict';
var expect = require('chai').expect
  , fizzbuzz = require('../lib/fizzbuzz')
  , sinon = require('sinon');

describe('FizzBuzz', function () {
  describe('computedValue', function () {
    it('should return number when not divisible by 3 or 5', function () {
      expect(fizzbuzz.computedValue(1)).to.eql(1);
    });

    it('should return Fizz for multiples of 3', function () {
      expect(fizzbuzz.computedValue(3)).to.eql('Fizz');
      expect(fizzbuzz.computedValue(6)).to.eql('Fizz');
    });

    it('should return Buzz for multiples of 5', function () {
      expect(fizzbuzz.computedValue(5)).to.eql('Buzz');
      expect(fizzbuzz.computedValue(10)).to.eql('Buzz');
    });

    it('should return FizzBuzz when multiple of 3 and 5', function () {
      expect(fizzbuzz.computedValue(15)).to.eql('FizzBuzz');
      expect(fizzbuzz.computedValue(30)).to.eql('FizzBuzz');
    });
  });

  describe('print', function () {
    describe('calling computedValue', function () {
      beforeEach(function () {
        sinon.spy(fizzbuzz, 'computedValue');
      });

      afterEach(function () {
        fizzbuzz.computedValue.restore();
      });

      it('should call computedValue expected number of times times', function () {
        fizzbuzz.print(5);
        expect(fizzbuzz.computedValue.callCount).to.eql(5);

        fizzbuzz.print(10);
        // 10 + 5 = 15
        expect(fizzbuzz.computedValue.callCount).to.eql(15);
      });
    });

    describe('calling console.log', function () {
      beforeEach(function () {
        // console is on global namespace, so we can spy on it that way
        sinon.spy(global.console, 'log');
      });

      afterEach(function () {
        global.console.log.restore();
      });

      it('should call console.log with expected arguments', function () {
        fizzbuzz.print(30);
        expect(global.console.log.args.length).to.eql(30);
        expect(global.console.log.args[0][0]).to.eql(1);
        expect(global.console.log.args[2][0]).to.eql('Fizz');
        expect(global.console.log.args[4][0]).to.eql('Buzz');
        expect(global.console.log.args[14][0]).to.eql('FizzBuzz');
        expect(global.console.log.args[29][0]).to.eql('FizzBuzz');
      });
    });
  });
});
