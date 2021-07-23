let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should return Bellville if the registration startswith CY', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return Paarl if the registration startswith CJ', function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('should return Cape Town if the registration startswith CA', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('otherwise return Some other place for the registration for other places', function(){
        assert.equal(fromWhere('CL'), 'Some other place!');
    });
});