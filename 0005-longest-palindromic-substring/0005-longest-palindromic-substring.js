/**
 * @param {string} s
 * @return {string}
 */
 // 1. 각 요소를 차례차례 순회하며 자기자신으로부터 왼쪽, 오른쪽에 대한 회문을 찾기 -> 오래걸림, 짝수일때 탐색 불가 (실패)
 // 2. 1개일때, 2개일때, 3개일때.. 각각 회문 개수 카운팅 (풀이 봄)
 // 3. aaabbbaaa 라는 회문을 보면 bbb도 회문이고, abbba도 회문이고, aabbbaa도 회문이다. 즉 회문은 내부요소도 회문이고 이를 분리할수있다
     // -> 특정 인덱스 A에서 B만큼 떨어진 거리에 같은 값이 있고, 둘 사이에 회문이 있다면 A에서 B까지는 회문이다
     // data[A] === data[A+B] && 회문[A-1][A+B-1] => 회문[A][B] 
     // 큰 맥락에서는 해당 규칙이 맞지만 1개일때와 2개일때 예외처리를 고려해야한다. 둘 사이에 값이없으니까
     // 문자 추출을 위해 전체를 저장하지말고 처음과 끝 인덱스를 저장하자
var longestPalindrome = function(s) {

    const size = s.length
    let result = s[0];
    let startIndex = 0
    let maxLength = 0
    const dp = Array(size).fill().map(()=>Array(size).fill(false))

    for (let i = 0; i < size; i++) {
        dp[i][i] = true;
    }

    for (let i = 0; i < size; i++) {
        if(s[i] === s[i+1]){
            dp[i][i+1] = true
            startIndex = i;
            maxLength = 1;
        }
    }

    for(let i=2; i<size; i++){
        
        for(let j=0; j<size; j++){
            
            if(s[j+i] !== undefined && s[j] === s[j+i] && dp[j+1][j+i-1]){
                dp[j][i+j] = true;
                startIndex = j;
                maxLength = i;
            }
        }
    }  

    return s.substring(startIndex, startIndex+maxLength+1);

};