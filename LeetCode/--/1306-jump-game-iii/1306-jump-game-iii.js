/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    
    const visited = Array(arr.length).fill(false);
    const len = arr.length;
    const queue = [start];
    visited[start] = true;


    while(queue.length > 0){

        const index = queue.shift();
        const value = arr[index];

        if(value === 0){
            return true;
        }

        const left = index + value;
        const right = index - value;

        if(left < len && !visited[left] ){
            queue.push(left);
            visited[left] = true;
        }
        if(right >= 0 && !visited[right] ){
            queue.push(right);
            visited[right] = true;
        }
           
    }
    return false;
};