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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

	if (!root) {
		return false;
	}
	let result = false;

	function helper(node, acc) {

		if (!node) {
			if (acc === sum) {
				result = true;
				return;
			}
			return;
		}

		helper(node.left, acc + node.val);
		helper(node.right, acc + node.val);
	}

	helper(root, 0);

	return result;
};

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

/*
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
* */

const forth_b_right = new TreeNode(1);
const forth_a_right = new TreeNode(2);
const forth_a_left = new TreeNode(7);

const third_b_right = new TreeNode(4, null, forth_b_right);
const third_b_left = new TreeNode(13);
const third_a_left = new TreeNode(11, forth_a_left, forth_a_right);

const second_right = new TreeNode(8, third_b_left, third_b_right);
const second_left = new TreeNode(4, third_a_left);
const root = new TreeNode(5, second_left, second_right);

console.log('hasPathSum', hasPathSum(root, 22));
//console.log('hasPathSum', hasPathSum(new TreeNode(1, new TreeNode(2)), 1));
