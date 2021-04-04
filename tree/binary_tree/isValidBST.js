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
var isValidBST = function (root) {
    let result = true;

    function checkNode(node, acc) {
        if (!node) return;

        for (let i = 0; i < acc.length; i++) {
            if (node.val < acc[i].val !== acc[i].predicate) {
                result = false;
                return;
            }
        }

        checkNode(node.left, [...acc, {val: node.val, predicate: true}]);
        checkNode(node.right, [...acc, {val: node.val, predicate: false}]);
    }

    checkNode(root, []);

    return result;
};
var isValidBST_optimized = function (root) {
    let result = true;

    function checkNode(node, acc) {
        if (!node) return;

        if (acc.lesser !== undefined && node.val >= acc.lesser) {
            result = false;
            return;
        }

        if (acc.greater !== undefined && node.val <= acc.greater) {
            result = false;
            return;
        }

        checkNode(node.left, {...acc, lesser: node.val});
        checkNode(node.right, {...acc, greater: node.val});
    }

    checkNode(root, {});

    return result;
};

class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

// ------- Code to generate our binary tree -------
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (val < currentNode.val) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(isValidBST(tree.root));
console.log(isValidBST_optimized(tree.root));