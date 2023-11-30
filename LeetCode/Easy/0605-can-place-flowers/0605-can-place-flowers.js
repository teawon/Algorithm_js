/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // 양 옆에 1이 없는 경우라면 심을 수 있다. 
    // 값을 순회하면서, 심을 수 있다면 값을 1로 바꾸기?

    function canPlant(index){
        if(flowerbed[index] === 1){
            return false;
        }

        if(flowerbed[index+1] === 1 || flowerbed[index-1] === 1){
            return false;
        }

        return true;
    }

    let spareFlower = n;

    for(let i=0; i<flowerbed.length; i++){
        if(canPlant(i)){
            flowerbed[i] = 1;
            if (spareFlower === 0) return true;
            spareFlower--;
            i++; // 어처피 다음에는 못심는다.
        }
    }

   return spareFlower === 0;
};