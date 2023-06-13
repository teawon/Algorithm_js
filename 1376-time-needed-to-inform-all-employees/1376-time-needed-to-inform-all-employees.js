/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

// 처음에는 그래프형태로 다 탐색 -> 시간초과 
// 연결 리스트 형태로 형태를 구성하고 다시 작성 -> O
// n의 범위가 많을때에는 메모리를 우선시하는 리스트방식을 고려하자


var numOfMinutes = function(n, headID, manager, informTime) {
    
    const people = Array(n).fill().map(() => []);


    for (let i = 0; i < n; i++) {
    const header = manager[i];
        if (header !== -1) {
            people[header].push(i);
        }

    }


    const distance = Array(n).fill(Number.MAX_SAFE_INTEGER);
    const queue = [headID];
    distance[headID] = informTime[headID];
    let maxTime = distance[headID];
    

    while(queue.length > 0){
        
        const head = queue.shift();

        for(const employee of people[head]){  //상사를 가리키고 있다면
            queue.push(employee);
            distance[employee] = distance[head] + informTime[employee];
            maxTime = Math.max(maxTime , distance[employee]);
        }
    }

    return maxTime;
    
};