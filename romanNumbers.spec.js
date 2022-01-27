const should = require('chai').should();
const expect = require('chai').expect;
const toRoman = require('./romanNumbers');

describe('coverting to roman numbers', () => {
  it('checking the input is greater than 0', () => {
    toRoman.toRomanNumbers(0).should.equal(false);
  }),
  it('checking the input is less than 0', () => {
    toRoman.toRomanNumbers(-1).should.equal(false);
  })
})
