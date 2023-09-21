/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {

    const len = intervals.length;
    // 자신의 end값보다 크지만 그중 가장 작은 start 인덱스를 찾는 것

    // start값은 고유하다.

    // start를 기준으로 정렬하고, 각 인덱스의 end값을 기준으로 가장 작은 start값을 찾기

    // 이때 이진탐색을 쓰자.

    const START = 0;
    const END = 1;

     const sortedList = intervals
        .map((arr, index) => ({ arr, index }))
        .sort((a, b) => a.arr[0] - b.arr[0]);

    const answer = []


    for(let i=0; i<len; i++){
        const target = intervals[i][END];
        
        // target보다 큰 가장 작은 START를 찾기

        let left = 0;
        let right = len-1;
        let mid;

        while(left <= right){
            mid = Math.floor((left+right)/2);

            if(target <= sortedList[mid].arr[START]){
                right = mid -1;
            }
            else{
                left = mid + 1;
            }
        }
        
        let minIndex = right+1;


        if(minIndex >= len || sortedList[minIndex].arr[START] < target) {
            answer.push(-1);
        }
        else{
            answer.push(sortedList[minIndex].index);
        }
    }

    return answer;
};