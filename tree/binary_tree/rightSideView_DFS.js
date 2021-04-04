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
var rightSideViewBFS = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    function traverse(node, level) {
        if (!node) {
            return;
        }
        if (level > result.length - 1) {
            result.push(node.val);
        }

        traverse(node.right, level + 1);


        traverse(node.left, level + 1);
    }

    traverse(root, 0);

    return result;
};

class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

    insert(values) {
        const queue = [this];
        let i = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            for (let side of ["left", "right"]) {
                if (!current[side]) {
                    if (values[i] !== null) {
                        current[side] = new TreeNode(values[i]);
                    }
                    i++;
                    if (i >= values.length) return this;
                }
                if (current[side]) queue.push(current[side]);
            }
        }
        return this;
    }
}

const tree = new TreeNode(1);
tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]);

// [ 1, 3, 6, 7, 8 ]

console.log(rightSideViewBFS(tree));