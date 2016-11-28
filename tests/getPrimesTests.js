use 'strict'
var chai = require 'chai'
var expect = chai.expect
var myApp = require('../apps/getPrimes.js')

describe("should return primes up to a number", function(){
	it("should return [2,3,5,7] for getPrimes(10)", function(){
		expect(getPrimes(10)).to.eql([2,3,5,7])
	})

	it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for getPrimes(50)", function(){
		expect(getPrimes(50)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47])
	})

	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89, 97] for getPrimes(100)", function(){
		expect([getPrimes(100)]).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89, 97])
	} )
})

describe("should return an error message if a non - number is entered", function(){
	it("should return a message if b is entered", function(){
		expect(getPrimes("b")).to.equal("Please enter a number");
	})
})