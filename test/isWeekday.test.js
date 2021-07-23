let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('should return false if day startsWith S', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should return true with day dont startsWith S', function(){
        assert.equal(true, isWeekday('Tuesday'));
    });
    it('should return false if day startsWith S', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});