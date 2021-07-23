module.exports = function mostProfitableDepartment(productList){
    //console.log(productList);
    var salesDataMap = {};
    var productList1 = [];
    //mapping the data and its as departments and sales total
      for(var i=0;i<productList.length; i++){
         //var theSales = productList[i];
        if(salesDataMap[productList[i].department] == undefined){
              salesDataMap[productList[i].department] = productList[i].sales;
          }
        else{
                salesDataMap[productList[i].department] += productList[i].sales;
            }
    }
      // Loop the map to find the bigger department value
    //console.log(salesDataMap);
     var currentMaxSalesDepartment = 0;
    var theDepart = "";
    for (var salesDataDepartment in salesDataMap) {
        var currentTotal = salesDataMap[salesDataDepartment];
      if(currentTotal > currentMaxSalesDepartment){
        currentMaxSalesDepartment = currentTotal;
             theDepart = salesDataDepartment;
         }
    }
     //console.log(theDepart);
    return theDepart;
  }// end of function
  function mostProfitableDay(productList){
            var salesDataMap = {};
    var productList1 = [];
    //mapping the data and its as day and sales total
      for(var i=0;i<productList.length; i++){
         var theSales = productList[i];
        if(salesDataMap[productList[i].day] === undefined){
              salesDataMap[productList[i].day] = productList[i].sales;
          }
        else{
                salesDataMap[productList[i].day] += productList[i].sales;
            }
    }
    //console.log(salesDataMap);
      // Loop the map to find the bigger day value
    var currentMaxSalesDay = 0;
    var theProfitableDay = "";
    for (var salesDataDay in salesDataMap) {
    var currentTotal = salesDataMap[salesDataDay];
    if (currentTotal  > currentMaxSalesDay){
          theProfitableDay = salesDataDay;
          currentMaxSalesDay = currentTotal;
             
        }
    }
    //display the the key which have a big value
    console.log(theProfitableDay);
    return theProfitableDay;
  }
  