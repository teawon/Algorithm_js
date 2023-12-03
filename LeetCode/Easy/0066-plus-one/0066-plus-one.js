/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**
https://leetcode.com/problems/plus-one/
   - 숫자 변환 -> 연산 -> 문자열 처리 => 오버플로우 발생
    
 */
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i] === 9) {
            if(i === 0){
                digits[0] = 0;
                digits.unshift(1);
                break;
            }
             digits[i] = 0;
             continue;
        }
         digits[i] = digits[i]+1;
         break;
    }


    return digits;
};