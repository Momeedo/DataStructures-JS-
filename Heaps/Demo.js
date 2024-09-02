class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap]; //Return a copy of #heap
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }
}

let myHeap = new Heap();
console.log(myHeap.getHeap());

console.log("\n\n----------------");
console.log("----------------\n\n");

myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(60);
myHeap.insert(59);
console.log(myHeap.getHeap());

console.log("\n\n----------------");
console.log("----------------\n\n");

myHeap.insert(100);
console.log(myHeap.getHeap());

console.log("\n\n----------------");
console.log("----------------\n\n");

myHeap.insert(75);
console.log(myHeap.getHeap());

console.log("\n\n----------------");
console.log("----------------\n\n");
