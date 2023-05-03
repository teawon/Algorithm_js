/*
 실수한점 : 정답이 배열요소중 하나라고 생각
 -> cititation[index]값을 위주로 탐색을 진행
 -> 반대로 index를 기준으로 생각해야했다.
 
*/
function solution(citations) {
    citations.sort((a, b) => b - a); 
    // 내림차순정렬 (6 5 3 1 0)
 
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) { // h번 이상 인용된 논문의 개수가 i + 1개 미만 
            return i; 
        }
    }

    return citations.length; 
}