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
    let slow = head; 
    let fast = head;
    let reverseFromMid = null;
    
    // 중간 지점 찾기
    while (fast && fast.next) {
        fast = fast.next.next;

        let nextSlow = slow.next;   // 다음 노드값을 변수에 저장
        slow.next = reverseFromMid; // 현재값을 기준으로 이전값을 가리키도록 역순으로 저장한다
        reverseFromMid = slow; // 이전값의 최신값을 현잭값으로 갱신

        slow = nextSlow; // 저장해둔 다음 노드값으로 업데이트
    }

    let leftList = reverseFromMid;
    let rightList = slow;

    let max = 0;

    while(leftList && rightList){
      max = Math.max(max , leftList.val+rightList.val);
      leftList = leftList.next;
      rightList = rightList.next;
    }

    return max;
}