class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }
  buildTree = (arr) => {
    arr.sort(function (a, b) {
      return a - b;
    });
    const length = arr.length;
    return this.buildTreeHelper(arr, 0, length - 1);
  };
  buildTreeHelper = (arr, left, right) => {
    //base case
    if (left > right) {
      return null;
    }
    const mid = left + Math.floor((right - left) / 2);
    const value = arr[mid];
    const newNode = new Node(value);
    newNode.left = this.buildTreeHelper(arr, left, mid - 1);
    newNode.right = this.buildTreeHelper(arr, mid + 1, right);
    return newNode;
  };
  isBalanced = () => {
    const res = this.isBalancedHelper();
    return res === -1 ? false : true;
  };
  isBalancedHelper = (cur = this.root) => {
    //bc
    if (cur === null) {
      return 0;
    }
    const left = this.isBalancedHelper(cur.left),
      right = this.isBalancedHelper(cur.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    } else {
      return Math.max(this.height(cur.left), this.height(cur.right)) + 1;
    }
  };

  height = (currentNode) => {
    //base case
    if (currentNode === null) {
      return 0;
    }
    const leftHeight = this.height(currentNode.left),
      rightHeight = this.height(currentNode.right);
    return Math.max(leftHeight, rightHeight) + 1;
  };
  insert = (value) => {
    const newNode = new Node(value);
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  };
  deleteNode = (value) => {
    let currentNode = this.root, parentNode = null
    while (currentNode !== value) {
        parentNode = currentNode
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        
        currentNode = currentNode.left;
      }
    }
    //node value doesn't exist
    if(currentNode === null){
        return
    }
    // leaf node
    if (currentNode.left === null && currentNode.right === null) {
        if (value < parentNode.value) {
            parentNode.left = null
        }
        else { 
            parentNode.right = null
        }
    }
  }


  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

let arr = [3, 2, 1];
let tree = new Tree(arr);
tree.prettyPrint();
console.log(tree.isBalanced());
arr = [10, 9, 8, 7, 6, 5, 4, 3, 2];
tree = new Tree(arr);
tree.prettyPrint();

tree.insert(30);
tree.prettyPrint();
tree.insert(1);
tree.prettyPrint();
tree.insert(23);
tree.prettyPrint();
/*tree.delete(55);
tree.prettyPrint();
tree.delete(33);
tree.prettyPrint();
tree.delete(29);
tree.prettyPrint();
console.log(tree.find(7));
console.log(tree.find(73));
console.log(tree.levelOrderIterative());
tree.levelOrderIterative(({ value }) => {
  console.log(`value: ${value}`);
});
console.log(tree.levelOrderRecursive());
tree.levelOrderRecursive(({ value }) => {
  console.log(`value: ${value}`);
});
console.log(tree.inorder());
tree.inorder(({ value }) => {
  console.log(`value: ${value}`);
});
console.log(tree.preorder());
tree.preorder(({ value }) => {
  console.log(`value: ${value}`);
});
console.log(tree.postorder());
tree.postorder(({ value }) => {
  console.log(`value: ${value}`);
});
console.log(tree.height());
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced());

// Function to generate an array of random numbers
function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Driver script
function driverScript() {
  // Create a binary search tree from an array of random numbers < 100
  const randomArray = generateRandomArray(10, 100);
  const tree = new Tree(randomArray);
  console.log("Initial Tree:");
  tree.prettyPrint();

  // Confirm that the tree is balanced
  console.log("Is the tree balanced? ", tree.isBalanced());

  // Print out all elements in level, pre, post, and in order
  console.log("Level Order:", tree.levelOrderIterative());
  console.log("Pre Order:", tree.preorder());
  console.log("Post Order:", tree.postorder());
  console.log("In Order:", tree.inorder());

  // Unbalance the tree by adding several numbers > 100
  tree.insert(101);
  tree.insert(102);
  tree.insert(103);
  console.log("Tree After Adding Elements > 100:");
  tree.prettyPrint();

  // Confirm that the tree is unbalanced
  console.log("Is the tree balanced after additions? ", tree.isBalanced());

  // Balance the tree by calling rebalance
  tree.rebalance();
  console.log("Tree After Rebalancing:");
  tree.prettyPrint();

  // Confirm that the tree is balanced
  console.log("Is the tree balanced after rebalancing? ", tree.isBalanced());

  // Print out all elements in level, pre, post, and in order
  console.log("Level Order After Rebalancing:", tree.levelOrderIterative());
  console.log("Pre Order After Rebalancing:", tree.preorder());
  console.log("Post Order After Rebalancing:", tree.postorder());
  console.log("In Order After Rebalancing:", tree.inorder());
}

// Running the driver script
driverScript();*/
