module.exports = function countAllFromTown(reg, town){
    var list = reg.split(',');
    var counter = 0;
    var arrTown = [];
    for(var i=0;i<list.length;i++){
      var registration = list[i].trim();
      if(registration.startsWith(town)){
          arrTown.push(registration);    
      }
      
    }
    console.log(arrTown.length)
    return arrTown.length;
  }