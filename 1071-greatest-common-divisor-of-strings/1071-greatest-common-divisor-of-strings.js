/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 반복문 돌면서, 확인하기?
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
};