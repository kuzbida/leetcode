function Node(character, isEnd = false) {
    this.character = character;
    this.isEnd = isEnd;
    this.children = {};
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.tree = {}

    this.getTree = function () {
        return this.tree;
    }
};


/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    const characters = word.split('');
    let currentNode = this.tree;
    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        const lastChar = i === characters.length - 1;

        if (currentNode[char]) {
            if (lastChar) {
                currentNode[char].isEnd = lastChar;
            }
            currentNode = currentNode[char].children;
        } else {
            currentNode[char] = new Node(char, lastChar);
            currentNode = currentNode[char].children;
        }
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const characters = word.split('');
    let currentNode = this.tree;
    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];

        if (i === characters.length - 1) {
            return currentNode[char] && currentNode[char].isEnd || false;
        }

        if (currentNode[char]) {
            currentNode = currentNode[char].children;
        } else {
            return false
        }
    }

    return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    const characters = prefix.split('');
    let currentNode = this.tree;
    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];

        if (currentNode[char]) {
            currentNode = currentNode[char].children;
        } else {
            return false
        }
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


/*
* trie.insert('apple')
* search('dog') // false
* insert('dog')
* search('dog') // true
* startWith('app') // true
* search('app') // false
* insert('app')
* search('app') // true
* */

const trie = new Trie();

trie.insert('apple');
console.log(trie.search('dog')) // false
trie.insert('dog')
console.log(trie.search('dog')) // true
console.log(trie.startsWith('app')) // false
console.log(trie.search('app')) // false
trie.insert('app')
console.log(trie.search('app')) // true
trie.getTree();

console.log(trie);