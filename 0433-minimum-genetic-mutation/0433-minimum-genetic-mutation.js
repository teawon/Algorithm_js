/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {

    const n = startGene.length;
    
    // 1. 어떤 문자에서 하나를 바꿨을때 bank가 될 수 있는지 반복하기

    // 2. 만약 있으면? 그 문자에 대해서 다시 반복하기

    // 3. 계속 바꾸다가 마지막에 정답과 일치한 문자가 완성되면 종료

    const queue = [[startGene,0]];
    
    while(queue.length > 0){
 
        const [str,len] = queue.shift();
        bank = bank.filter(bankStr => bankStr!==str);       
        if(str === endGene){
            return len;
        }

        for(let i=0; i<bank.length; i++){

            let count = 0;

            for(let j=0; j<n; j++){
                if(str[j] === bank[i][j]){
                    count++;
                }
            }

            if(count === n-1){
                queue.push([bank[i],len+1]);
            }
        }
    }

    return -1;
};