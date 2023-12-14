/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const answer = [];

    let deleteCount = 0;
    for(let i=s.length-1; i>=0; i--){
        if(s[i] === "*") {
            deleteCount++;
            continue;
        }

        if(deleteCount > 0) {
            deleteCount--;
            continue;
        }

        answer.push(s[i])
    }

    return answer.reverse().join("");
};