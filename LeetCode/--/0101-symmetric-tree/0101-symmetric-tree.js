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
 * @return {boolean}
 */

var isSymmetric = function(root) {
    
    return checkMirror(root.left, root.right);
};


    function checkMirror(left, right){
        //자기 자신이면
        if(!left && !right){
            return true;
        }
        
        // 왼쪽과 오른쪽의 값이 일치하지 않으면
        if(!left || !right || left.val !== right.val){
            return false;
        }

        return checkMirror(left.left , right.right) && checkMirror(left.right, right.left);
    }
