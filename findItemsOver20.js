module.exports = function findItemsOver20(fruitList){
    console.log(fruitList)
    var overTwenty = [];
    for(i in fruitList){
    if(fruitList[i].qty > 20){
           overTwenty.push(fruitList[i]);	
       }
    }
    return overTwenty;
  }