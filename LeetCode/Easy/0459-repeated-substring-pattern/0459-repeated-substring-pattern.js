/**
 * @param {string} s
 * @return {boolean}
 */


 /**
    - 부분 문자열을 계산하고, 정규표현식을 통해 포함된 개수를 찾는 것 보다,
      부분 문자열로 전체 문자열을 만들었을 때 일치하는지 찾는 방법이 더효과적이다

      (문자를 찾는 것은 비효율적)
  */
var repeatedSubstringPattern = function(s) {
    if(s.length === 1) return false;

    for(let i=0; i<s.length/2; i++){
        const subStr = s.slice(0,i+1);
        if(s.length % subStr.length !== 0) continue;

        const count = s.length / subStr.length;
        
        if(subStr.repeat(count) === s) return true;
    
    }
    return false;
};