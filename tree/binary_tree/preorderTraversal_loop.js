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
var preorderTraversal = function (root) {
	//console.log('root', root);
	const result = [];
	let node = root;

	while (node) {
		//console.log('node', node);
		if (node.isVisited) {
			if (node.right && !node.right.isVisited) {
				node.right.parent = node;
				node = node.right;

				continue;
			}

			if (node.parent) {
				node = node.parent;
				continue;
			}

			break;
		}

		result.push(node.val);
		node.isVisited = true;

		if (node.left && !node.left.isVisited) {
			node.left.parent = node;
			node = node.left;

			continue;
		}

		if (node.right && !node.right.isVisited) {
			node.right.parent = node;
			node = node.right;
			continue;
		}

		if (node.parent) {
			node = node.parent;
		}
	}

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
const third = new TreeNode(3);
const second = new TreeNode(2, third);
const input = new TreeNode(1, undefined, second);

console.log('preorderTraversal', preorderTraversal_recursive(input));

/*const left = new TreeNode(1);
const right = new TreeNode(2);
const root = new TreeNode(3, left, right);

console.log('preorderTraversal', preorderTraversal_recursive(root));*/
