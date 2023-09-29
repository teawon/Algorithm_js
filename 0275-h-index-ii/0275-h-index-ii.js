/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    // h인덱스란, i번 이상 인용된 논문의 개수가 i개 이상이어야한다.

    // 오름차순으로 정렬되어있기때문에, i인덱스값을 조회했을때 나머지 길이가 length - 1보다 큰 지점을 이진탐색으로 조회?

    const len = citations.length;
    let left = 0;
    let right = len-1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        const useCount = len-mid; 

        if(citations[mid] <= useCount){
            // 크거나 같으면, 더 오른쪽 범위를 찾아 더 큰 인덱스를 탐색
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }

    // 100 하나만 들어왔으면? - 특정 배열값이 항상 n번인용되었다고 확인할 수 없으니 if문으로 검사
    return citations[left-1] >= len-left ? citations[left-1]: len-left;

};