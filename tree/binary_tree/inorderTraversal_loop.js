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
	console.log('root', root);
	let pointer = root;
	const result = [];

	while (pointer) {
		if (pointer.isVisited) {
			if (!pointer.isAdded) {
				result.push(pointer.val);
				pointer.isAdded = true;
			} else {
				if (pointer.right && !pointer.right.isVisited) {
					pointer.right.parent = pointer;
					pointer = pointer.right;
				} else {
					pointer = pointer.parent;
				}
			}

			continue;
		}
		// Going down into left branch
		if (pointer.left) {
			pointer.isVisited = true;

			pointer.left.parent = pointer;
			pointer = pointer.left;
			continue;
		}

		if (!pointer.left) {
			pointer.isVisited = true;
			pointer.isAdded = true;
			result.push(pointer.val);

			// Checking whether there's right branch
			if (pointer.right) {
				pointer.right.parent = pointer;
				pointer = pointer.right;
				continue;
			}
			if (!pointer.right) {
				if (pointer.parent) {
					pointer = pointer.parent;
				}
			}
		}
	}

	return result;

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
