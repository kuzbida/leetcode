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
	if (!root) return 0;
	let answer = 0;

	function traverse(node, depth) {
		if (!node) {
			if (depth > answer) {
				answer = depth;
			}
			return;
		}
		depth++;

		traverse(node.left, depth);
		traverse(node.right, depth);

	}

	traverse(root.left, 1);
	traverse(root.right, 1);


	return answer;
};



/*
* Input: [1,null,2,3]
   1
    \
     2
    /
   3
* */

// OUTPUT: [1,3,2]

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

const forth = new TreeNode(4);
const third = new TreeNode(3, forth);
const second = new TreeNode(2, third);
const input = new TreeNode(1, undefined, second);

console.log('maxDepth', maxDepth(input));
