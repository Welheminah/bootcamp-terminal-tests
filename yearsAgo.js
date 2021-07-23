module.exports = function yearsAgo(old){
    //console.log(old);
    var now = new Date() ;
    var year = now.getFullYear() - old;
      return year;
  }