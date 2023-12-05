/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxMoney = 0;

    for(const account of accounts){
        const sumMoney = account.reduce((acc,money) => acc + money ,0);
        maxMoney = Math.max(sumMoney, maxMoney);
    }

    return maxMoney
};