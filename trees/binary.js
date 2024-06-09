const BinaryTree = function () {
  let Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  };

  let root = null;

  this.getTree = function () {
    return root;
  };

  function getHeight(node) {
    if (node == null) return -1;
    return node.height;
  }

  this.isBalancedTree = function (tree) {
    if (tree === null) return true;

    return (
      Math.abs(getHeight(tree.left) - getHeight(tree.right)) <= 1 &&
      this.isBalancedTree(tree.left) &&
      this.isBalancedTree(tree.right)
    );
  };

  let insertNode = function (node, newNode) {
    //1. If new node value is less than node then go to left
    //2. If new node value is more than node then go to right

    if (newNode.value < node.value) {
      //Check if left of node is empty then insert it
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      //Check if right of node is empty then insert it
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    return node;
  };

  this.insert = function (value) {
    const node = new Node(value);

    //Check if root is null or not
    if (root == null) {
      root = node;
      return node;
    } else {
      return insertNode(root, node);
    }
  };

  this.search = function (value, node = root) {
    //If no tree then return false
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      console.log('Node found at ', node);
      return node;
    }

    if (value < node.value) {
      //Search in left
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  };

  this.minimum = function (node = root) {
    if (root === null) return null;

    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      console.log('Minimum', node.value);
      return node.value;
    }
    return null;
  };

  this.maximum = function (node = root) {
    if (root === null) return null;

    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      console.log('Maximum', node.value);
      return node.value;
    }
    return null;
  };

  function removeNode(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = removeNode(node.right, value);
      return node;
    } else {
      //Node found

      //1 .No left and right nodes
      //2. Either left or right node
      //3. Both left and right nodes are there

      if (node.left === null || node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //If both are present then find minimum from the right subtree, then give that value to the node which we want to remove, then now we have duplicates, so we need to remove original value from the right subtree
      if (node.left && node.right) {
        let findMinimum = this.minimum(node.right);
        node.value = findMinimum.value;
        node.right = removeNode(node.right, findMinimum.value);
        return node;
      }
    }
  }

  this.remove = function (value) {
    root = removeNode(root, value);
  };

  this.inOrderTraversal = function (tree) {
    const result = [];

    function inorderTraverse(node) {
      if (!node) return;

      inorderTraverse(node.left);
      result.push(node.value);
      inorderTraverse(node.right);
    }

    inorderTraverse(tree);

    return result;
  };

  this.preOrderTraversal = function (tree) {
    const result = [];

    function preorderTraverse(node) {
      if (!node) return;

      result.push(node.value);
      preorderTraverse(node.left);
      preorderTraverse(node.right);
    }

    preorderTraverse(tree);

    return result;
  };

  this.postOrderTraversal = function (tree) {
    const result = [];

    function postorderTraverse(node) {
      if (!node) return;

      postorderTraverse(node.left);
      postorderTraverse(node.right);
      result.push(node.value);
    }

    postorderTraverse(tree);

    return result;
  };

  this.isEmpty = function () {
    return root === null;
  };
};

export default BinaryTree;
