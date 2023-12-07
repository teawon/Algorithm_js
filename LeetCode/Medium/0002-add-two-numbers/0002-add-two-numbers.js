/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0,null);
    let current = head;
    let carry = 0;

    while(l1 || l2){
        const sum = (l1?.val ?? 0)  + (l2?.val ?? 0) + carry;

        current.val = sum % 10;
        carry = Math.floor(sum / 10);

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

        // 마지막인지 아닌지에 따라 다음 원소값 처리
        if(l1 || l2)  current.next = new ListNode(0,null);
        else current.next = carry > 0 ? new ListNode(carry,null) : null;

        current = current.next;

     }   


    return head;
};