/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 // 초기의 풀이. 특정 값을 찾고 왼쪽 오른쪽으로 최소값 을찾아감
// var findClosestElements = function(arr, k, x) {
    
//     // k값을 찾고, x만큼의 인덱스를 계산해서 배열을 return하기

//     let left = 0;
//     let right = arr.length-1;

//     while(left<=right){
//         const mid = Math.floor((left+right)/2);

//         if(arr[mid] < x){
//             // 크거나 같으면 오른쪽으로 이동해 더 큰 범위를 탐색
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }


//     // 찾은 인덱스로부터, 두 포인터를 활용해 가장 가까운 원소값들을 삽입 (left는 x값보다 크거나 같은 원소를 가리킴)
//     let leftIdx = left-1;
//     let rightIdx = left;
  
//     const answer = [];
    
//     while(answer.length < k){

//         if(rightIdx >= arr.length || (leftIdx >= 0 && Math.abs(x - arr[leftIdx]) <= Math.abs(x - arr[rightIdx]))) {
//             answer.push(arr[leftIdx]);
//             leftIdx--;
//         }
//         else{
//             answer.push(arr[rightIdx]);
//             rightIdx++;
//         }
//     }
    
//     return answer.sort((a,b) => a-b);

// };


// 개선된 풀이

var findClosestElements = function(arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if(arr[mid + k] - x < x - arr[mid]) {
        // 1 2 3 target 100 200 300
        // 현재 mid를 기준으로, 오른쪽 부분이 더 왼쪽에 가까움
        left = mid + 1
    }
    else{
        right = mid - 1;
    }    
  }

  return arr.slice(left, left + k);
};