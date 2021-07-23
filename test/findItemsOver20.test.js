let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

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
    {name : 'bananas', qty : 4},
    {name : 'apples', qty : 3},
];

var results2 = [
];


describe('The findItemsOver20 function', function(){

    it('should return pears and banana which are over 20', function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('should return nothing if there are no items over 20', function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
});