/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // 0 1 2 3 4 5 4 3 2 1
    
    // 값이 올라가다가, 작아지는 구간을 찾아야한다.
    // 왼쪽보다는 크고, 오른쪽보다 큰 특정 구간에 대해 이진탐색을 반복

    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        
        let mid = Math.floor((left+right)/2);

        if(arr[mid-1] < arr[mid] &&  arr[mid+1] < arr[mid]){
            return mid;
        }

        if(arr[mid-1] > arr[mid]){
            // 5 4 
            // 왼쪽범위를 탐색해서 산의 왼쪽부분으로 이동한다.
            right = mid - 1;
        }
        else{
            // 3 4
            // 오른쪽 범위를 탐색해서 산의 오른쪽부분으로 이동한다.
            left = mid + 1;
        }
    }  

    return -1;
};