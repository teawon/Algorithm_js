/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    
    let head = list1.val < list2.val ? list1 : list2;
    let current = head;

    if (head === list1) list1 = list1.next;
    else list2 = list2.next;
    
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 ? list1 : list2;

    return head
};