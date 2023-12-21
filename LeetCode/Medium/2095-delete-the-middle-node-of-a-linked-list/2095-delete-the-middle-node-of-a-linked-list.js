/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    // 가운데 노드를 올림처리한 index요소를 삭제하고 지워야 한다.
    let count = 0;
    let current = head;

    while(current.next){
        count++;
        current = current.next;
    }

    const targetIdx = Math.ceil(count/2);
    count = 0;
    current = head;
    let prev = null;

    while(count < targetIdx){
        count++;
        prev = current;
        current = current.next;
    } 

    if(!prev?.next){
        head = head.next
    }
    else{
        prev.next = current.next;
    }

    return head;
};