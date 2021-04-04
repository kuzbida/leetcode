class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

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
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length) {
        const currentLevelValues = [];
        let length = queue.length, count = 0;

        while(count < length) {
            const currentNode = queue.shift();

            currentLevelValues.push(currentNode.val);

            if(currentNode.left) {
                queue.push(currentNode.left)
            }

            if(currentNode.right) {
                queue.push(currentNode.right)
            }

            count++;
        }

        result.push(currentLevelValues);
    }

    return result;
};


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log('Tree', tree);
console.log(levelOrder(tree.root))