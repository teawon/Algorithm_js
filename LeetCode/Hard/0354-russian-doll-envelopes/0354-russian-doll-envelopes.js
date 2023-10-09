/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    
/**

긴 수열 찾기에 대한 2차원 배열문제

[ [2,3], [5,4], [6,999], [6,5], [6,3] [7,8]]  
-> 
[ [ 2, 3 ] ]
[ [ 2, 3 ], [ 5, 4 ] ]
[ [ 2, 3 ], [ 5, 4 ], [ 6, 999 ] ]
[ [ 2, 3 ], [ 5, 4 ], [ 6, 5 ] ]
[ [ 2, 3 ], [ 6, 3 ], [ 6, 5 ] ] (여기서 w값을 비교해서 무시하는것도 가능할 듯) 6,3..
[ [ 2, 3 ], [ 6, 3 ], [ 6, 5 ], [ 7, 8 ] ]

따라서, 우선 w에 대해 정렬을 하지만 같은 길이라면 "내림차순"으로 정렬을 해야한다.
왜냐하면 값을 순회하면서 결국 h에 대한 긴수열을 찾기 때문에 덮어씌울 수 있음.. (같은 6이라면, 더 짧은 5로 덮어씌움)
 */

    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const arr = [];

     for (let envelop of envelopes) {
        const h = envelop[1];
        const idx = findIndex(h);
        if (idx === arr.length) {
            arr.push(envelop);
        } else {
            arr[idx] = envelop;
        }
    }
    return arr.length;


    function findIndex(target){
        let left = 0;
        let right = arr.length-1;

        while(left<=right){
            const mid = Math.floor((left+right)/2);
            if(arr[mid][1] < target){
                left = mid+1;
            }
            else{
                right = mid-1;
            }
        }
        return left;
    }
};