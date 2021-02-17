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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	//initialize result array
	const result = [];

	//helper function DFS recursively
	function traverse(node) {
		if (!node) return;

		traverse(node.left);
		result.push(node.val);
		traverse(node.right);
	}
	//run recursive helper
	traverse(root);
	return result;
};


function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

const third = new TreeNode(3);
const second = new TreeNode(2, third);
const input = new TreeNode(1, undefined, second);

/*
* Input: root = [1,null,2,3]
* Output: [1,3,2]
* */
console.log(inorderTraversal(input));

/*
* Input: root = []
* Output: []
*/
console.log(inorderTraversal());

/*
* Input: root = [1]
* Output: [1]
* */
console.log(inorderTraversal(new TreeNode(1)));

/*
* Input: root = [1,null,2]
* Output: [1,2]
* */

const right = new TreeNode(2);
const root = new TreeNode(1, undefined, right);
console.log(inorderTraversal(root));
