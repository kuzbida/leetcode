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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const result = [];
	let level = 0;

	function traverse(node) {
		if (!node) {
			return;
		}

		if (!result[level]) {
			result[level] = [];
		}
		result[level].push(node.val);

		if (node.left || node.right) {
			level++;
		}
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);

	return result;
};

/*
   3
   / \
  9  20
    /  \
   15   7

* */

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

/*const left2 = new TreeNode(15);
const right2 = new TreeNode(7);

const right = new TreeNode(20, left2, right2);
const left = new TreeNode(9);
const input = new TreeNode(3, left, right);

console.log('levelOrder', levelOrder(input));*/

const left3 = new TreeNode(6);
const right3 = new TreeNode(7);

const left2 = new TreeNode(4, left3, right3);
const right2 = new TreeNode(5);

const right = new TreeNode(3);
const left = new TreeNode(2, left2, right2);

const input = new TreeNode(1, left, right);

console.log('levelOrder', levelOrder(input));
