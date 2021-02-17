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
var postorderTraversal = function (root) {
	let pointer = root;
	const result = [];

	while (pointer) {
		if (!pointer) {
			break;
		}
		if (pointer.left && !pointer.left.isAdded) {
			pointer.left.parent = pointer;
			pointer = pointer.left;
			continue;
		}

		if (pointer.right && !pointer.right.isAdded) {
			pointer.right.parent = pointer;
			pointer = pointer.right;
			continue;
		}

		if (!pointer.isAdded) {
			result.push(pointer.val);
			pointer.isAdded = true;
			pointer = pointer.parent;
			continue;
		}

		if (pointer.isAdded) {
			pointer = pointer.parent;
		}
	}

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
* Output: [3,2,1]
* */
console.log(postorderTraversal(input));

/*
* Input: root = []
* Output: []
*/
console.log(postorderTraversal());

/*
* Input: root = [1]
* Output: [1]
* */
console.log(postorderTraversal(new TreeNode(1)));

/*
* Input: root = [1,null,2]
* Output: [2,1]
* */

const right = new TreeNode(2);
const root = new TreeNode(1, undefined, right);
console.log(postorderTraversal(root));
