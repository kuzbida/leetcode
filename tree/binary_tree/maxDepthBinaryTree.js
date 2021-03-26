/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const {BinarySearchTree} = require('./binarySearchTree.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let result = 0;

    function traverse(node, acc) {
        if (node) {
            acc++;
            traverse(node.left, acc);
            traverse(node.right, acc)
        } else {
            if (acc > result) {
                result = acc;
            }
        }
    }

    traverse(root, 0);

    return result;
};

var maxDepth2 = function (root) {

    function traverse(node, count) {
        if (!node) {
            return count;
        }
        count++;

        return Math.max(traverse(node.left, count), traverse(node.right, count));
    }

    return traverse(root, 0);
};


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(8)
tree.insert(7)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

const zeroTree = new BinarySearchTree();
const oneTree = new BinarySearchTree();
oneTree.insert(9);
console.log(maxDepth2(tree.root));
console.log(maxDepth2(zeroTree.root));
console.log(maxDepth2(oneTree.root));

//     9
//   8     20
//  4    15  170
//1  6