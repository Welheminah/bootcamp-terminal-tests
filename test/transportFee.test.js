let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){

    it('should return R20 if you work morning shift', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return R10 if you are working afternoon shift', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return free if you are working night shift', function(){
        assert.equal(transportFee('nightshift'), 'free');
    });
});