module.exports = function regCheck(reg, regLoc){

    if(reg === '' && regLoc === ''){
    //   return 'please enter valid registration number and location'
    }
  return reg.endsWith(regLoc);	
}
