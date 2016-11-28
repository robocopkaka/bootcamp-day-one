'use strict'
var chai = require('chai')
var expect = chai.expect

describe("Phone class: Create a phone, make a call", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var samsung = new Phone('Samsung');
      expect(typeof samsung).to.equal(typeof {});
      expect(samsung instanceof Phone).to.equal(true);
    });

    it("The phone should be called 'General' if no name is passed as a parameter", function() {
      var phone = new Phone();
      expect(phone.name).to.equal('General');
      expect(phone.model).to.equal('GM');
    });

    it("The phone name and model should be a property of the phone", function() {
      var htc  = new Phone('HTC', 'Some HTC');
      expect(htc.name).to.equal('HTC');
      expect(htc.model).to.equal('Some HTC');
    });



    it("should be able to make a call", function(){
    	var samsung = new Phone("Samsung")
    	expect(samsung.call).to.equal("Making a call")
    })

    it("The phone call function should return the instance of the Phone class", function() {
      var samsung  = new Phone('Samsung', 'Galaxy S7');
      var calling = samsung.call();
      expect(calling instanceof Phone).to.equal(true);
      expect(typeof calling.call).to.equal(typeof (function (){}));
    });

  });