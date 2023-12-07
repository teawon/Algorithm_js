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
var reverseList = function(head) {
    // 5->4 4->5
    // 현재값은 3인데, 다음값은 4. 
    // 이전값을 다음으로 연결하자
    function getReverseList(preNode,curNode){
        if(!curNode) return preNode;

        const nextNode = curNode.next;
        curNode.next = preNode;
        return getReverseList(curNode, nextNode);
    }

    return getReverseList(null, head);
};