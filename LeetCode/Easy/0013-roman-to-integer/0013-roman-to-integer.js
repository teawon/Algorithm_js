/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ROMAN = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
    }
    
    const numArr = s.split("").map((value) => ROMAN[value])
      
    let sum = 0;
    
    for(let i=0; i<numArr.length; i++){
      if(i!== numArr.length - 1&& numArr[i] < numArr[i+1]){
           sum -= numArr[i];
           continue;
      }
        
     sum+= numArr[i];
    }
    
    return sum
};