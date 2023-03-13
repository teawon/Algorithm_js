function solution(A,B){
    let answer = 0;
    let length = A.length;
    
    A.sort(function(a,b) {
        return a-b;
    });
    B.sort(function(a,b) {
        return b-a;
    });
    
    
    for(let i=0; i<length; i++){
        
    // console.log("\n",A[0],B[0]);
        
       answer = answer + A[0]*B[0];
          A = A.splice(1);
          B = B.splice(1);
    }
    
    return answer;
}

// 1. 최대값 * 최소값을 반복해서 값을 계산하기
// 2. 정렬 후 인덱스토 최대값 / 최소값에 접근 후 인덱스 삭제

/**
*  - 배열에서 최대값 / 최소값을 뽑는 함수는? (Math.max(...arr)) // Math.min(...arr))
*  - 배열의 특정 값을 제거하려면 어떻게 해야하는가? (shift / splice)
*/