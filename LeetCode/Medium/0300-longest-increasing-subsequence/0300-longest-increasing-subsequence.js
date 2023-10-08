/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
 
  // 100 200 300 400 -> 1 200 300 400 -> 1 200 205 400 -> ...
  // 값을 업데이트 하는데, 현재 배열에서 적절한 위치에 배치시킨다. 

  const arr = [];

  for(num of nums){
    // arr배열에 대해, num값의 인덱스를 찾아 값을 배치시킨다.
    // 만약 마지막 끝 이라면 추가
    let index = findIndex(num);
    if(index === arr.length){
      arr.push(num);
    }
    else{
      arr[index] = num;
    }
  }

  return arr.length;


  function findIndex(target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
      const mid = Math.floor((left+right)/2);

      if(arr[mid] < target){
        left = mid+1
      }
      else{
        right = mid-1;
      }
    }

    return left;
  }

};