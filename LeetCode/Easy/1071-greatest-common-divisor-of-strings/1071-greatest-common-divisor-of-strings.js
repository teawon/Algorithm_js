/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

/*
    최대 공통 접두사 길이는 결국 두 문자열 길이의 최대 공약수이다.
    두 수의 최대 공약수 - 유클리드 호제법 사용하기
*/
var gcdOfStrings = function(str1, str2) {

    function gcd(a , b){
        return b === 0 ? a : gcd(b, a % b);
    }

    if(str1 + str2 !== str2 + str1){
        return ""
    }

    // 두 문자열의 최대 공약수 계산
    const lenGCD = gcd(str1.length, str2.length);
   
    return str1.slice(0, lenGCD);
};

/*
시도했던 것 1) . 반복문을 통해 길이를 계산하는 방법 -> 비효율적
      let answer = "";

    for(let i=0; i<str1.length; i++){
        const divWord = str1.slice(0,i+1); 
        
        if(str1.length % divWord.length !== 0) continue;
        if(str2.length % divWord.length !== 0) continue;

        const str1Len = str1.length / divWord.length;
        const str2Len = str2.length / divWord.length;
        
        if(str1 !== divWord.repeat(str1Len)) continue;
        if(str2 !== divWord.repeat(str2Len)) continue;

        answer = divWord;

    }
    return answer;
*/