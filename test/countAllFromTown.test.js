let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('should return 3 if there are 3 registrations from Stellebosch, starting with CL', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });
    it('should return 1 if there is 1 registration from Paarl, starting with CJ', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'), 1);
    });
    it('should return 2 if there are 2 registrations from Cape Town, starting with CA', function(){
        assert.equal(countAllFromTown('CA 942 501, CJ 64957, CA 67430', 'CA'), 2);
    });
});