function LinkedList() {
  let head = null; //Holds very first value
  let length = 0; //Size of the list

  /**
   *
   * @param {Int} value which needs to be added at the beginning of the list
   */
  function unshift(value) {
    const node = {
      value,
      next: null,
    };

    if (head === null) {
      //List is empty
      head = node;
    } else {
      let current = head;
      node.next = current;
      head = node;
    }

    length++;
  }

  /**
   *
   * @param {Int} value which needs to be added at the last of the list
   */
  function append(value) {
    const node = {
      value,
      next: null,
    };

    if (head === null) {
      //list is empty
      head = node;
    } else {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  }

  /**
   *
   * @param {Int} value
   * @returns
   */

  function indexOf(value) {
    let index = 0;
    let current = head;

    while (current.value !== value) {
      current = current.next;
      index++;
    }

    return index;
  }

  /**
   *
   * @param {Int} position
   * @param {Int} value
   * @returns
   */
  function insertAt(position, value) {
    if (position >= 0 && position <= length) {
      const node = {
        value,
        next: null,
      };

      if (position === 0) {
        //Call unshift method
        unshift(value);
        return;
      } else if (position === length) {
        //Append at the last so called append method
        append(value);
        return;
      } else {
        let current = head;
        let previous;

        for (let index = 1; index < position; index++) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      length++;
    } else {
      return;
    }
  }

  /**
   *
   * @param {Int} value
   */
  function remove(value) {
    const valueIndex = indexOf(value);
    return removeAt(valueIndex);
  }

  /**
   *
   * @param {Int} position
   * @returns
   */
  function removeAt(position) {
    if (position >= 0 && position <= length) {
      let current = head;

      if (position === 0) {
        head = current.next;
      } else {
        let index = 0;
        let previous = null;

        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;
      return current.value;
    } else {
      return;
    }
  }

  function insertRec(value, position) {
    if (position >= 0 && position <= length) {
      head = insertValue(position, value, head);
    } else {
      return;
    }
  }

  function insertValue(currentIndex, value, node) {
    if (currentIndex === 0) {
      const newNode = {
        value,
        next: node,
      };
      length++;
      return newNode;
    }

    node.next = insertValue(--currentIndex, value, node.next);
    return node;
  }

  function toString(list = null) {
    let result = "";
    let current = list ? list : head;
    while (current) {
      result += `${current.value}${current.next ? " -> " : ""}`;
      current = current.next;
    }
    return result;
  }

  function size() {
    if (!head) return 0;
    let temp = head;
    let sum = 0;
    while (temp) {
      sum++;
      temp = temp.next;
    }
    return sum;
  }

  function sort() {
    if (!head) return null;

    let temp = head;
    let sorted = false;

    while (!sorted) {
      let p1 = temp;
      let p2 = temp.next;

      while (p2 !== null) {
        if (p1.val >= p2.val) {
          //Swap
          let dummyNode = p2.next;
          p2.next = p1;
          p1.next = dummyNode;
          sorted = true;

          //Move pointers
          p1 = p1.next;
          p2 = p2.next;
        } else {
          p1 = p1.next;
          p2 = p2.next;
        }
      }
    }
    return head;
  }

  function getHead() {
    return head;
  }

  function middleNode() {
    const mid = Math.floor(length / 2);

    let temp = head;
    let count = mid;
    while (count > 0) {
      temp = temp.next;
      count--;
    }

    return temp;
  }

  return {
    unshift,
    append,
    indexOf,
    insertAt,
    remove,
    removeAt,
    toString,
    insertRec,
    size,
    sort,
    getHead,
    middleNode,
  };
}

export default LinkedList;
