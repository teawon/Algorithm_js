/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};



/**
    초기의 BFS풀이 -> DFS를 사용하면 더 코드가 깔끔해진다.
    if(!root) return 0;

    let dept = 0;
    const que = [];

    que.push(root);

    while(que.length >0){
        let nextQue = [];
        // 현재 큐에 있는 모든 노드에대해 다음층 탐색
        while(que.length >0){
            const curIndex = que.shift();
            if(curIndex.left) {
                nextQue.push(curIndex.left);
            }
            if(curIndex.right){
                nextQue.push(curIndex.right);
            }
        }
        dept++;
        que.push(...nextQue);
    }   
    return dept;

 */