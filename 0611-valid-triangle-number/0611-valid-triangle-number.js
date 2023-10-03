/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    // 삼각형의 조건 - 두 변의 길이의 합이 나머지 한 변의 길이보다 커야함 (제일 작은 두 변의 합 > 큰 변)
    
    const len = nums.length;
    let count = 0;

    // nums = nums.sort((a,b) => a-b);

    // for(let i = 0; i<len; i++){
    //     for(let j=i+1; j<len; j++){
    //         for(let k=j+1; k<len; k++){
    //             if(nums[i]+nums[j] <= nums[k]){
    //                 // 크거나 같아지는 시점의 뒷 부분은 모두 삼각형이 될 수 없으므로 생략
    //                 k = len;
    //             }
    //             else{
    //                 count++;
    //             }
    //         }
    //     }
    // }

    // return count;


    // 1. k는 고정, i와 j에 대해 연산을 수행한다. [특정 k에 대해 조합가능한 i와 j의 경우의 수를 계산함]
    // 2. 이때 계산의 방향은 가장 큰 값에서 줄여나가는 방향으로
    // 3. i - - - - - - j k 일때, i+j > k 라면 바로 계산 후 j값을 줄여간다. (i,j,k, i+1,j,k, i+2,j,k ...) j-i 개
    // 4. i - - - - - - j k 일때  i+j <= k 라면 i값을 늘려야한다.

    nums = nums.sort((a,b) => a-b);
    for(k = len-1; k>1; k--){
        let i = 0;
        let j = k-1;

        while(i<j){

            if(nums[i]+nums[j] > nums[k]){
                count += (j-i);
                j--;
            }
            else{
                i++;
            }
        }
    }

    return count;
}