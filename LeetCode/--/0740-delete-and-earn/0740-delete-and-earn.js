/**
 * @param {number[]} nums
 * @return {number}
 */


 // 지우면 해당값 +- 1에 해당하는 배열값도 지워진다.
 // 만약 4 5가 있다면? 당연히 5를 지워한다. -> 즉 큰 수부터 지우는게 좋음
 // 그러나 4 4 4 4 5가 있다면 5를 지우면 안된다. 4가 다 지워지니까
 // 어떤 수를 지웠을때 지워지는 값의 합이 더 크면 안된다. 
 // 어떤 수 n을 지운 합 vs (n-1) , (n+1)을 지운 합을 계산해서 비교하면?
 // 순차적으로 접근해보자
 // [2, 3, 4]
 // 처음에는 2를 고른다
 // 그 후 3을 골랐을때를 비교한다. (3을지우기 vs 2를 지운값)
 // 즉 N번째 값을 지웠을때 이득 vs N-1번째 값을 지웠을때 이득을 비교한다.
 // 이 문제는 "연속되는 두 수를 고르지 못하고 최대 값을 구하는 이전 문제와 유사하다"
 /* 1부터 시작해서 , 현재 n번째 까지 값을 고려했을때 최대 포인트는
    i[n] = Max( i[n-1]  , i[n-2] + 현재값 ) 

    근데 값이 중간에 빈다면? 배열에 미리 연산을한다?
 */



var deleteAndEarn = function(nums) {
  
    var list = Array(Math.max(...nums)+1).fill(0);

    for(let num of nums){
        list[num] += num;
    }

    // console.log(list);
    var totalSum = [0,list[1]];

    if(list.length < 2){
        return list[1];
    }

    for(let i=2; i<list.length; i++){
        totalSum[i] = Math.max(totalSum[i-1] , totalSum[i-2] + list[i]);
    }
    
    // console.log(totalSum)

    return totalSum[list.length-1]
    
};