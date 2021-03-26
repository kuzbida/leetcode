/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const {BinarySearchTree} = require('./binarySearchTree.js');
const {TreeNode} = require('./generateTree.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    let result = null;

    function traverse(node, acc) {
        if (node) {
            acc++;
            traverse(node.left, acc);
            traverse(node.right, acc)
        } else {
            if (acc < result || result === null) {
                result = acc;
            }
        }
    }

    traverse(root, 0);

    return result;
};

var minDepth2 = function (root) {

    function traverse(node, count) {
        if (!node) {
            return count;
        }
        count++;

        return Math.min(traverse(node.left, count), traverse(node.right, count));
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


const root = new TreeNode();
root.insert([2,null,3,null,4,null,5,null,6]);
console.log(minDepth(root));
// console.log(minDepth(tree.root));
// console.log(minDepth(zeroTree.root));
// console.log(minDepth(oneTree.root));

//     9
//   8     20
//  4    15  170
//1  6