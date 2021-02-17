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
var preorderTraversal_recursive = function (root) {
	console.log('root', root);
	const result = [];

	function travers(node, parent) {
		console.log('travers', node);
		if (!node) {
			return;
		}

		if (node.isVisited) {
			if (node.right && !node.right.isVisited) {
				return travers(node.right, node);
			}

			if (node.parent) {
				return travers(node.parent);
			}

			return;
		}

		result.push(node.val);
		node.isVisited = true;
		if (parent) {
			node.parent = parent;
		}

		if (node.left && !node.left.isVisited) {
			return travers(node.left, node);
		}

		if (node.right && !node.right.isVisited) {
			return travers(node.right, node);
		}

		if (node.parent) {
			return travers(node.parent);
		}

	}

	travers(root, null);

	return result;
};

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

/*
* Input: [1,null,2,3]
   1
    \
     2
    /
   3
* */
/*const third = new TreeNode(3);
const second = new TreeNode(2, third);
const input = new TreeNode(1, undefined, second);

console.log('preorderTraversal', preorderTraversal_recursive(input));*/

const left = new TreeNode(1);
const right = new TreeNode(2);
const root = new TreeNode(3, left, right);

console.log('preorderTraversal', preorderTraversal_recursive(root));
