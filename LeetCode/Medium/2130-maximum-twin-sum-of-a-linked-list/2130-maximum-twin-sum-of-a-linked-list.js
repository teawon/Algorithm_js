/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let curNode = head;
    let value = [];
    while(curNode){
        value.push(curNode.val);
        curNode = curNode.next;
    }

    let max = 0;
    for(let i=0; i<value.length / 2; i++){
        max = Math.max(max, value[i]+value[value.length-i-1]);
    }

    return max;
};