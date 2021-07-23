module.exports = function countAllPaarl(reg){
    console.log(reg);
     var allPaarl = reg.split(", ");
     var counter = 0;

     for(var i=0;i<allPaarl.length;i++){
     var  registration = allPaarl[i];
       if (registration.startsWith('CJ')){
           counter++;  
        
       }
       
     }
      console.log(counter);
        return counter;
    
   }