/**
 * @param {string} s
 * @return {number}
 */

 // 이전 문제와 유사하다. 1,2,3.... dp[i][j] -> i와 j는 회문을 각각 계산하기

var longestPalindromeSubseq = function(s) {

    const len = s.length;

    const dp = Array(len).fill(0).map(()=> Array(len).fill(0));
    let maxLength = 1;

    for(let i=0; i<len; i++){
        dp[i][i] = 1; // 1자리 회문 확인
    }

    for(let i=0; i<len-1; i++){
        if(s[i]===s[i+1]){
            dp[i][i+1] = 2; // 2자리 회문 확인
            maxLength = 2;
        }
        else{
            dp[i][i+1] = 1;
        }
    }

    for(let i=2; i<=len; i++){ //확인할 간격 - i
        for(let j=0; j<len -i; j++){
            if(s[j] === s[j+i]){ // bbbab 는 0번째와 4번째요소가 같고 중간 값 "bba"의 최대길이 2를 더해 2+2 = 4
                dp[j][j+i] = dp[j+1][j+i-1]+2
                maxLength = Math.max(maxLength, dp[j][i+j]);
            }else{
                 dp[j][j+i] = Math.max(dp[j][j+i-1] , dp[j+1][j+i])
                 
                 // aab abb -> 값이 다르다면 앞자리, 혹은 뒷자리중 큰 값을 넣어야한다. 이 부분 실수했었음
            } 
        }
    }

    return maxLength;
};