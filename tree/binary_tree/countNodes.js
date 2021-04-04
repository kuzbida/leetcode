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
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) {
        return 0;
    }


    const getHeight = function (node, level) {
        if (!node) return level;

        return getHeight(node.left, level + 1)
    };

    const height = getHeight(root, 0);

    let maxNumbers = Math.pow(2, height) - 1;

    function traverse(node, level) {
        if (!node) {
            if (level === height - 1) {
                maxNumbers--;
            }
            return;
        }

        console.log('node', node.val);
        console.log('level', level);

        traverse(node.right, level + 1);


        traverse(node.left, level + 1);

    }

    traverse(root, 0);

    return maxNumbers;

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

const tree = new TreeNode();
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);

console.log(countNodes(tree));