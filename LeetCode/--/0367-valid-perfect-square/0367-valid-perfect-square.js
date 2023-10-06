/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    // 1. dp 배열을 만들고, 거기서 이진탐색? -> 메모리 많이 먹음 (dp배열을 만들때, num과 일치하는지 비교하면 굳이 다 넣을 필요 없었다)
    // 2. 제곱근을 기준으로 곱했을때, num이 나오는게 있는지 탐색하기


    let left = 1;
    let right = 2**16;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        const square = mid*mid;

        if(square === num){
            return true;
        }

        if(square < num){
            // 더 큰 범위 탐색(오른쪽)
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return false;

};