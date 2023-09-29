/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
   let left = 0;
   let right = arr.length - 1;


   while(left <= right){
       
       let mid = Math.floor((left+right)/2);

       // 특정 인덱스를 조회했을때, 인덱스과 현재값 사이의 차이를 통해 "누락된 개수" 를 확인할 수 있다.

        // [2,3,4,7,11]에서 2번째 인덱스값을 봤는데 3이아니라 4? -> 1개가 누락되었다는 의미
        // [1,2,3,4,5]
        // [1,    5,6. 8,9,10]
        // arr[mid] - (mid+1) = 0 이라면 0개가 누락, 

         let missingCount = arr[mid] - (mid + 1);


        if(missingCount < k){
            // k개보다 적게 누락되었다면, 오른쪽을 탐색해서 더 많이 누락된 지점을 찾는다.
            left = mid + 1;
        } 
        else{
            right = mid - 1;
        }
   }

   // console.log(arr[left], left);
   // left와 left-1 원소 사이에 k번째의 누락된 수가 존재하게된다.
   // 7과 11 사이에는 8 9 10 11이 있는데, 7을 기준으로 3개가 누락되었으니, 2개를 더 누락시킨 값을 7에 더하기?

   // 단 left = 0이라면 ([4,5,6]) , k=1  그냥 k값이 정답   
   return left === 0 ? k : arr[left-1] + k - (arr[left-1]-(left));



};