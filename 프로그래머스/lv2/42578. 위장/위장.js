function solution(clothes) {
    
    var answer = 1;
    
    let type_clothes = new Map();
    for(const type of clothes){
        type_clothes.set(type[1], (type_clothes.get(type[1]) || 0) + 1);
    }
    
    
    for(const num of type_clothes.values()){
        answer *= (num+1);
     }
    
    return answer-1;
}