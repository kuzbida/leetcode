class Person {
    name = '';
    isAlive = true;
    #children = [];

    constructor(name) {
        this.name = name;
    }

    addChild(child) {
        this.#children.push(child);
    }

    getChildren() {
        return this.#children;
    }


}

class Monarchy {

    #root = '';
    #parentalMap = {};


    constructor(name) {
        const monarch = new Person(name);
        this.#root = monarch;
        this.#parentalMap[name] = monarch;
    }

    birth(child, parent) {
        if (!this.#parentalMap[parent] === undefined) {
            throw new Error('Parent not found');
        }

        const c = new Person(child);
        this.#parentalMap[child] = c;
        this.#parentalMap[parent].addChild(c);
    }

    depth(person) {
        const p = this.#parentalMap[person];
        p.isAlive = false;

    }

    getOrderOfSuccession() {
        const result = [];

        this.#dfs(this.#root, result);

        return result;
    }

    #dfs(node, result) {

        const children = node.getChildren();

        for (let i = 0; i < children.length; i++) {
            this.#dfs(children[i], result);
        }

        if (node.isAlive) {
            result.push(node.name)
        }

    }
}


const monarchy = new Monarchy('1');
monarchy.birth('2', '1');
monarchy.birth('3', '1');
monarchy.birth('4', '1');
monarchy.birth('5', '2');
monarchy.birth('6', '2');
monarchy.birth('7', '5');

// monarchy.depth('1');

console.log(monarchy.getOrderOfSuccession());

/*
* [
  '1', '2', '5',
  '7', '6', '3',
  '4'
]*/