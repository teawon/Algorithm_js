/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length-1;

    let minWord = letters[0];

    while(left <= right){
        let mid = Math.floor((left+right)/2);
    
        // 자신보다 큰 것 중에 가장 작은 값을 찾아야 한다.
        if(letters[mid] > target){
            // 자신보다 크면? 그럼 더 왼쪽에서 더 작은 값을 찾는다.
            minWord = letters[mid];
            right = mid - 1;
        }
        else{
            // 자신보다 작으면? 오른쪽에서 값을 찾아야한다
            left = mid + 1;
        }
    }


    return minWord;

};