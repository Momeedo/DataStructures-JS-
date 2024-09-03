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

  //Recursive

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }

    return currentNode;
  }
  rInsert(value) {
    if (this.root === null) this.root = new Node(value);
    this.#rInsert(value);
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;
    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (value < currentNode.value) {
        currentNode.left = this.#deleteNode(value, currentNode.left);
      } else {
        //Deleting a Leaf Node
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        }
        //Deleting a Node with a Right Child and open on the Left
        else if (currentNode.left === null) {
          currentNode = currentNode.right;
        } else if (currentNode.right === null) {
          currentNode = currentNode.left;
        }
        //Deleting a Node with a Right & Left Childs
        else {
          let subTreeMin = this.minValue(currentNode.right);
          currentNode.value = subTreeMin;
          currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
        }
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }

  //Get the min Value of a Tree/Sub-Tree where currentNode is the Root
  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
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

console.log("My Tree contains 21: " + myTree.contains(21));
console.log("My Tree contains 20: " + myTree.contains(20));

console.log("\n\n----------------");
console.log("----------------\n\n");

console.log("My Tree contains (Using Recursive) 82: " + myTree.rContains(82));

console.log("\n\n----------------");
console.log("----------------\n\n");
