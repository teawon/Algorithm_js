/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


 // 특정 단어를 지웠을때 남아있는 문자열은 표현가능해야한다.
 // 각 자릿수를 순회하며 일치하는게 있는지 찾는다.
 // l -> le -> lee -> leet ....
 // 만약 현재 단어의 끝부분이 특정 단어와 일치할때, 그 앞부분에 해당하는 문자열이 조합가능하다면 현재까지 위치는 조합이 가능하다는 의미
var wordBreak = function(s, wordDict) {

    const sLen = s.length;
    const wordLen = wordDict.length;
    const dp = Array(sLen+1).fill(false);

    // 초기값 할당
    dp[0] = true;


    for(let i=0; i<sLen; i++){
        let curWord = s.substring(0,i+1);
        // console.log(curWord)
        for(let j=0; j<wordLen; j++){
            //끝이 맞는지 확인
            let isMatch = curWord.substring(i+1-wordDict[j].length) === wordDict[j];
    
            if(isMatch && dp[i+1-wordDict[j].length]){
                dp[i+1] = true;
                break;
            }
        }
         
    }
    // console.log(dp)
    return dp[sLen]
};