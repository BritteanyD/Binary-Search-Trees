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
    console.log(arr);
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log(arr);
  }
  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
};


/*let arr = [3, 2, 1];
let tree = new Tree(arr);
tree.prettyPrint();
console.log(tree.isBalanced());*/
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
tree = new Tree(arr);
tree.prettyPrint();
/*
tree.insert(30);
tree.prettyPrint();
tree.insert(1);
tree.prettyPrint();
tree.insert(23);
tree.prettyPrint();
tree.delete(55);
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
