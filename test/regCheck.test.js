let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should return true if registration endsWith GP', function(){
        assert.equal(true, regCheck('123 123GP', 'GP'));
    });
    it('should return false if registration dont endsWith GP', function(){
        assert.equal(false, regCheck('CY 123 123', 'CY'));
    });
});