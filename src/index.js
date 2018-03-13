module.exports = function getZerosCount(number) {
  // your implementation
  var zeroes;
  
  while( number >= 1 ){
    zeroes += Math.floor(number / 5);
    number = number/5;
  }
  
  return(zeroes);

}
