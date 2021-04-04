class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._comparator = comparator;
        this._heap = [];
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this._heap.length === 0;
    }

    pick() {
        return this._heap[0];
    }

    push(val) {
        this._heap.push(val);
        this._siftUp();

        return this.size();
    }

    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }

        const value = this._heap.pop();

        this._siftDown();

        console.log('pop', this._heap);

        return value;
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;
        let parentIdx = this._parent(nodeIdx);
        console.log('_siftUp:before', this._heap);

        while (this._compare(nodeIdx, parentIdx) && nodeIdx > 0) {
            this._swap(nodeIdx, parentIdx);
            nodeIdx = parentIdx;
            parentIdx = this._parent(nodeIdx);
        }

        console.log('_siftUp:after', this._heap);

    }

    _siftDown() {
        let nodeIdx = 0;
        let leftIdx = this._left(nodeIdx);
        let rightIdx = this._right(nodeIdx);

        while (leftIdx < this.size()) {

            const greaterIdx = rightIdx < this.size() && this._compare(rightIdx, leftIdx) ? rightIdx : leftIdx;
            if (this._compare(greaterIdx, nodeIdx)) {
                this._swap(greaterIdx, nodeIdx);
                nodeIdx = greaterIdx;
                leftIdx = this._left(nodeIdx);
                rightIdx = this._right(nodeIdx);
            } else {
                break;
            }

        }

    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _left(idx) {
        return idx * 2 + 1;
    }

    _right(idx) {
        return idx * 2 + 2;
    }

    _swap(i, j) {
        const temp = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = temp;
    }

    _compare(i, j) {
        this._comparator(this._heap[i], this._heap[j]);
    }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);


console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());