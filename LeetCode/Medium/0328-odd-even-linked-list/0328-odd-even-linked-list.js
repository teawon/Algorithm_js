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
var oddEvenList = function(head) {
    if (!head) return null;
    
    let oddHead = head; // 첫 번째 노드는 홀수 인덱스
    let evenHead = head.next; // 두 번째 노드는 짝수 인덱스

    let oddCur = oddHead;
    let evenCur = evenHead;

    // 12 34 (null) 마지막 홀수 노드값 (null 직전)까지 구하기.
    // 1->3
    // 2->4->null
    // 3->(짝수) 
    while (evenCur && evenCur.next) {
        oddCur.next = evenCur.next;
        oddCur = oddCur.next; // 다음 홀수 인덱스 노드

        evenCur.next = oddCur.next;
        evenCur = evenCur.next; // 다음 짝수 인덱스 노드
    }

    // 홀수 인덱스 노드의 마지막을 짝수 인덱스 노드의 시작점과 연결
    oddCur.next = evenHead;

    return oddHead;
};
