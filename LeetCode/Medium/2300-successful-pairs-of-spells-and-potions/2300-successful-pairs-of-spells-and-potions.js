/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    // 정렬을 사용하고, 두 포인터를 사용해 O(ln N)복잡도로 계산하기?
    // postions는 뒤에서부터, spells는 작은 수 부터 계산해

    potions.sort((a,b) => a-b);

    let indexedSpells = spells.map((val, idx) => ({idx,val}));
    indexedSpells.sort((a,b)=> a.val-b.val);
    
    let potionsIdx = 0;
    let spellsIdx = spells.length-1;

    let count = Array(spells.length).fill(0);

    while(potionsIdx < potions.length && spellsIdx >= 0){
 
        if(potions[potionsIdx] * indexedSpells[spellsIdx].val >= success){
        // 5 * 제일 작은 index라면, 그 다음 값도 다 성공일 것 
        // 이후 작은 posion값을 이동
        count[indexedSpells[spellsIdx].idx] = potions.length-potionsIdx;
        spellsIdx--;
        }
        else{
            potionsIdx++;
        }
    }

    return count;
};