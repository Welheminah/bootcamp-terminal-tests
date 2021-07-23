let assert = require("assert");
let findItemsOver = require("../findItemsOver");

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 7},
    {name : 'bananas', qty : 7},
    {name : 'apples', qty : 3},
];

var results2 = [];


describe('The findItemsOver function', function(){

    it('should return pears and banana which are higher than the threshold', function(){
        assert.deepEqual(findItemsOver(itemList, 25), results);
    });
    it('should return nothing if there are no items that are higher than the threshold', function(){
        assert.deepEqual(findItemsOver(itemList2, 25), results2);
    });
});