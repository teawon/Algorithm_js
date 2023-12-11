/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    function isVowel(str){
        return /[aeiou]/.test(str);

    }
    let curValue = 0;
    for(let i=0; i<k; i++){
        curValue += isVowel(s[i])
    }
    
    let max = curValue;

    for(let i=1; i<=s.length-k; i++){
        curValue = curValue - isVowel(s[i-1]) + isVowel(s[i+k-1]);
        max = Math.max(max,curValue);
    }

    return max;


};