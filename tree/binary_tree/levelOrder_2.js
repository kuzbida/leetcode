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

	function traverse(node, level, parent) {
		if (!node) {
			return;
		}

		if (node.parent === undefined && parent) node.parent = parent;

		if (!result[level]) {
			result[level] = [];
		}

		if (!node.isVisited) result[level].push(node.val);

		node.isVisited = true;


		if (node.left && !node.left.isVisited) {
			traverse(node.left, level + 1, node);
		}

		if (node.right && !node.right.isVisited) {
			traverse(node.right, level + 1, node)
		}

		if (node.parent) {
			traverse(node.parent, level - 1)
		}
	}

	traverse(root, 0, null);

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

const left2 = new TreeNode(15);
const right2 = new TreeNode(7);

const right = new TreeNode(20, left2, right2);
const left = new TreeNode(9);
const input = new TreeNode(3, left, right);

console.log('levelOrder', levelOrder(input));

/*const rightD = new TreeNode(9);
const leftC = new TreeNode(8);
const rightB = new TreeNode(7);
const leftA = new TreeNode(6);

const right2 = new TreeNode(5,  leftC, rightD);
const left2 = new TreeNode(4, leftA, rightB);

const right = new TreeNode(3);
const left = new TreeNode(2, left2, right2);

const input = new TreeNode(1, left, right);

console.log('levelOrder', levelOrder(input));*/
