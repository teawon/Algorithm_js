/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {

    const score = [];

    for(let i=0; i<operations.length; i++){
        switch(operations[i]){
            case "C" : 
              score.pop();
              break;
            case "D" :
             score.push(score[score.length-1] * 2);
             break;
            case "+":
             let newValue =  score[score.length-1] +  score[score.length-2];
             score.push(newValue);
             break;
            
            default :
              score.push(Number(operations[i]));
        }
    }

    return score.reduce((acc,value) => {
        return acc += value;
    },0);
};