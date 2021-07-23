let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should return the total R7.45 for call = R2.75 * 2 + sms = R0.65 * 3', function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R' + 7.45);
    });
    it('should return R2.75 for each call made', function(){
        assert.equal(totalPhoneBill('call'),  'R' + 2.75);
    });
    it('should return R0.65 for each sms', function(){
        assert.equal(totalPhoneBill('sms'),  'R' + 0.65);
    });
});