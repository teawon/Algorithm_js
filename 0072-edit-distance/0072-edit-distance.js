/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

 // 다시 풀기 (답지봄)

var minDistance = function(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    
    const dp = Array(len1+1).fill(0).map(()=> Array(len2+1).fill(0));

    // dp[i][j]란 첫번째 단어 i번째까지와, 두번째 단어 j까지를 고려했을때 변환에 필요한 연산 개수
    // 1. i또는 j가 0이라면 (빈 문자열) -> 상대편의 길이만큼 변환을 처리해야 같아진다.
 /*
|   |   | r | o | s |
|---|---|---|---|---|
|   | 0 | 1 | 2 | 3 |
| h | 1 | 1 | 2 | 3 |
| o | 2 | 2 | 1 | 2 |
| r | 3 | 2 | 2 | 2 |
| s | 4 | 3 | 3 | 2 |
| e | 5 | 4 | 4 | 3 |
*/

    for(let i=0; i<=len1; i++){
        dp[i][0] = i;
    }
    for(let i=0; i<=len2; i++){
        dp[0][i] = i;
    }

    for(let i=1; i<=len1; i++){
        for(let j=1; j<=len2; j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j] = 1+ Math.min(dp[i-1][j] , dp[i][j-1], dp[i-1][j-1]);  //삭제 , 추가, 교체
            }
        }
    }

    return dp[len1][len2];
};