/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let money5 = 0;
    let money10 = 0;

    for(let i=0; i<bills.length; i++){
        
        const revMoney = bills[i];
        if(revMoney === 5){
            money5++;
            continue;
        }

        if(revMoney === 10){
            // 5원이 없다면 false
            if(money5 < 1) return false;
            money5--;
            money10++;
            continue;
        }

        if(revMoney === 20){
            if(money10 > 0 && money5 > 0){
                money10--;
                money5--;
            }
            else if(money5 > 2){
                money5 -= 3;
            }
            else return false;
        }

    }

    return true;
    
};