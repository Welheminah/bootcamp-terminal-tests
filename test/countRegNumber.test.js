let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should return 3 if there are three registrations ', function(){
        assert.equal(3, countRegNumber('CY 123 123, CA 123 188, CJ 768 908'));
    });
    it('should return 1 if there are one registrations', function(){
        assert.equal(1, countRegNumber('123 123 GP'));
    });
    it('should return 3 & 2 respectively if there are 3 & 2 registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328','CA 42665, CA 12 RT GP'), 3, 2);
    });
});