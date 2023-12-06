/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 // 1. 숫자변환 방법 - 숫자가 너무 크다면 깨진다.
 // 2. 직접 연산하는 방법?
var addBinary = function(a, b) {
       const len = Math.max(a.length , b.length);
       const aArr = a.padStart(len,'0')
       const bArr = b.padStart(len,'0')

       let carry = 0;

       const answer = Array(len).fill(0);

       for(let i=len-1; i>=0; i--){
           const sum = Number(aArr[i])+Number(bArr[i]) + carry;
           carry = 0;
           if(sum > 1) {
               carry++; //자릿수 올림
               answer[i] = sum-2;
               continue;
           }
           answer[i] = sum;
       }
       
       if(carry !== 0) answer.unshift(carry);

       return answer.join("");
}
