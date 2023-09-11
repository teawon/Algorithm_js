function solution(begin, target, words) {
    
    
    
    const wordLen = words.length;
    
    // 시작 단어를 기준으로, 변환이 가능한값이 바로 이동경로. 즉 각 단어당 최소거리를 저장한다.
    // 변환 가능한 값은 어떻게 연산?? i인덱스 빼고 같은게 있는지 확인
    
    const minCount = words.reduce((acc, word) => {
      acc[word] = 0;
      return acc;
    }, {});


    const queue = [begin];
    minCount[begin]= 1;
    
 
    while(queue.length > 0){
        const curWord = queue.shift();
        
        for(const targetWord of words){
            
            if(minCount[targetWord] === 0){
                for(let i=0; i<wordLen; i++){
                    let curSubStr =  curWord.slice(0,i) + curWord.slice(i+1);
                    let tarSubStr = targetWord.slice(0,i) + targetWord.slice(i+1);
                                        
                    if(curSubStr === tarSubStr){
                        minCount[targetWord] = minCount[curWord]+1;
                        queue.push(targetWord);
                        break;
                    }
                }
            }
        }
    }
    
    
    return minCount[target] ? minCount[target] - 1 : 0
}