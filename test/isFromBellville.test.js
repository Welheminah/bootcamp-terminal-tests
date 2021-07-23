let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return True if the registation startsWith CY', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return False if the registration dont startsWith CY', function(){
        assert.equal(false, isFromBellville('CJ 123'));
    });
    it('should return True if the registation startsWith CY', function(){
        assert.equal(true, isFromBellville('CY 688 458'));
    });
});