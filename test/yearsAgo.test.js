let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should return 25 if 1996 was subtracted from 1976', function(){
        assert.equal(25, yearsAgo(1996));
    });
    it('should return 175 if 1846 was subtracted from 1976', function(){
        assert.equal(175, yearsAgo(1846));
    });
    it('should return 44 if 2020 was subtracted from 1976', function(){
        assert.equal(1, yearsAgo(2020));
    });
});