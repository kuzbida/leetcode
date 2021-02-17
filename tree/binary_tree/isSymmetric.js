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
var isSymmetric = function (root) {
	if (!root) {
		return true;
	}
	let result = true;

	function traverse(a, b) {

		if (!a && b || a && !b) {
			result = false;
			return;
		}

		if (a === null && b === null) {
			return;
		}

		if (a.val !== b.val) {
			result = false;
			return;
		}

		traverse(a.left, b.right);
		traverse(a.right, b.left);
	}

	traverse(root.left, root.right);

	return result;
};

/*
	symmetric
    1
   / \
  2   2
 / \ / \
3  4 4  3

* */


function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

const forth = new TreeNode(4);
const third = new TreeNode(3);
const input = new TreeNode(1, new TreeNode(2, third, forth), new TreeNode(2, forth, third));

console.log('isSymmetric', isSymmetric(input));


/*
not symmetric

    1
   / \
  2   2
   \   \
   3    3

* */

const root = new TreeNode(1, new TreeNode(2, null, third), new TreeNode(2, null, third));

console.log('isSymmetric', isSymmetric(root));
