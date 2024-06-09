const AvlTree = function () {
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

  this.getHeight = function (node) {
    if (node == null) return -1;
    return node.height;
  };

  this.isBalancedTree = function (tree) {
    if (tree === null) return true;

    return (
      Math.abs(this.getHeight(tree.left) - this.getHeight(tree.right)) <= 1 &&
      this.isBalancedTree(tree.left) &&
      this.isBalancedTree(tree.right)
    );
  };

  this.insertNode = function (node, newNode) {
    //1. If new node value is less than node then go to left
    //2. If new node value is more than node then go to right

    if (newNode.value < node.value) {
      //Check if left of node is empty then insert it
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      //Check if right of node is empty then insert it
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    //rotate the tree to balance the tree from the unbalanced tree starting from the node before return to previous node
    return this.rotate(node);
  };

  this.rotate = function (node) {
    //First determine whether the tree is left heavy or right heavy based on that we will have left-right cases.
    //If height of left tree is more than 1 than height of the right tree of the node then it's left heavy case
    if (this.getHeight(node.left) - this.getHeight(node.right) > 1) {
      if (this.getHeight(node.left.left) - this.getHeight(node.left.right) > 0) {
        //Left-left case -> Right rotate on the node
        return this.rightRotate(node);
      }

      if (this.getHeight(node.left.left) - this.getHeight(node.left.right) < 0) {
        //Left-right case -> Right rotate on the node
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    //Right heavy
    if (this.getHeight(node.left) - this.getHeight(node.right) < -1) {
      if (this.getHeight(node.right.left) - this.getHeight(node.right.right) < 0) {
        //Right-right case -> Left rotate
        return this.leftRotate(node);
      }

      if (this.getHeight(node.right.left) - this.getHeight(node.right.right) > 0) {
        //Right-left case -> Left rotate
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  };

  this.rightRotate = function (node) {
    const c = node.left;
    const t = c.right;

    c.right = node;
    node.left = t;

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right) + 1);
    c.height = Math.max(this.getHeight(c.left), this.getHeight(c.right) + 1);

    return c;
  };

  this.leftRotate = function (node) {
    const p = node.right;
    const t = p.left;

    p.left = node;
    node.right = t;

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right) + 1);
    p.height = Math.max(this.getHeight(p.left), this.getHeight(p.right) + 1);

    return p;
  };

  this.insert = function (value) {
    const node = new Node(value);

    //Check if root is null or not
    if (root == null) {
      root = node;
      return node;
    } else {
      return this.insertNode(root, node);
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

export default AvlTree;
