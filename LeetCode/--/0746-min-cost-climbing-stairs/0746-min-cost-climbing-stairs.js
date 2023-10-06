/**
 * @param {number[]} cost
 * @return {number}
 */

 /**
     n번째 단계에 도달하려면 n-2번째에서 비용을 지불했거나, n-1에서 비용을 지불하고 이동했다는 것을 의미한다.
     f(n) = f(n-2)+cost or f(n-1)+cost
  */
var minCostClimbingStairs = function(cost) {
    
    let list = [0,0]
    for(let i=2; i<=cost.length; i++){
        list[i]= Math.min(list[i-1]+cost[i-1],list[i-2]+cost[i-2]);
    }

    return list[cost.length];
};