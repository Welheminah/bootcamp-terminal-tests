let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should return 3 if there are 3 registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123', 'CJ'), 3);
    });
    it('should return 2 if there are 2 registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345'), 2);
    });
    it('should return 5 if there are 5 registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 5);
    });
});