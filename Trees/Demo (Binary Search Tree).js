class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let temp = this.root;
      while (true) {
        if (newNode.value === temp.value) return undefined;
        if (newNode.value < temp.value) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          }
          temp = temp.left;
        } else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let myTree = new BST(1);
console.log(myTree);

console.log("\n\n----------------");
console.log("----------------\n\n");

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(52);
myTree.insert(82);
console.log(myTree);

console.log("\n\n----------------");
console.log("----------------\n\n");

console.log("My Tree contains 21: " + myTree.contains(21))
console.log("My Tree contains 20: " + myTree.contains(20))

console.log("\n\n----------------");
console.log("----------------\n\n");