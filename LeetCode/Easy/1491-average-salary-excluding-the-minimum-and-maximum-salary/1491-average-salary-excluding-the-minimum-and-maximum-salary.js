/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let minSal = Infinity;
    let maxSal = 0;

    let sum = 0;
    for(let i=0; i<salary.length; i++){
        minSal = Math.min(minSal, salary[i]);
        maxSal = Math.max(maxSal, salary[i]);
        sum += salary[i];
    }

    const sumExceptMaxMin = sum - minSal - maxSal;
    
    return sumExceptMaxMin / (salary.length-2)
};