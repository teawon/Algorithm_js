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
    let stack1 = [], stack2 = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let head = null;

    // 스택을 사용하여 두 숫자를 더함
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        let sum = carry;
        if (stack1.length > 0) sum += stack1.pop();
        if (stack2.length > 0) sum += stack2.pop();

        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        newNode.next = head;
        head = newNode;
    }

    return head;
};