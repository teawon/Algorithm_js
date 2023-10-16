/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

const answer = [];

// 특정 문자가 회문이면, 그 문자를 제외한 나머지배열에 대해 연산 수행
// aaab -> a가 회문 , aab에 대해 연산
// aab -> a가 회문, ab에 대해 연산
// ab -> 회문아님. -> a, a, ab 

function isPalindrome(str) {
    
    // 처음에는 회문을 검사할때 인덱스를 가지고 배열의 값이 같은지 확인으나
    // 거꾸로 문자열을 뒤집었을때 같은지 확인하는 연산으로 간단하게 회문검사가 가능하다.
    return str === str.split('').reverse().join('');
}


function calculate(start , current){
    
    if(start === s.length){
        answer.push([...current]);
        // 이때 ...연산자를 사용하지 않으면 참조를 저장하개되므로 내용물이 바뀐다.
        // 인자로 넘길때 복사를하거나, 여기서 복사해야하는데 메모리적으로 이게 더 용이
    }
    // aaab가 있음. a, aa, aaab 각각에 대해 회문 검사

    for(let gap=1; start+gap <= s.length; gap++){
        const str = s.slice(start, start+gap);
        if(isPalindrome(str)){
             current.push(str);
             calculate(start+gap, current);
             current.pop();
        }
    }
}

calculate(0, []);
return answer; 
};
