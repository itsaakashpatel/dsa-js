function DoublyLinkedList() {
  let head = null; //Holds very first element
  let length = 0; //Size of the list

  function newNode(element) {
    return {
      element,
      next: null,
      previous: null,
    };
  }

  /**
   *
   * @param {Int} element which needs to be added at the beginning of the list
   */
  function unshift(element) {
    const node = newNode(element);

    node.next = head;
    node.previous = null;
    if (head !== null) {
      head.previous = node;
    }
    head = node;
    length++;
  }

  /**
   *
   * @param {Int} element which needs to be added at the last of the list
   */
  function append(element) {
    const node = newNode(element);
    let current = head;

    if (head === null) {
      //list is empty
      unshift(element);
      return;
    }

    //Go to the last node
    while (current.next !== null) {
      current = current.next;
    }

    node.previous = current;
    node.next = null;
    current.next = node;

    length++;
  }

  /**
   *
   * @param {Int} element
   * @returns
   */

  function indexOf(element) {
    let index = 0;
    let current = head;

    while (current) {
      if (current.element !== element) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   *
   * @param {Int} position
   * @param {Int} element
   * @returns
   */
  function insertAt(position, element) {
    if (position >= 0 && position <= length) {
      let current = head;
      let node = newNode(element);

      if (head === null) {
        unshift(element);
        return;
      } else if (position === length) {
        append(element);
        return;
      } else {
        let index = 0;
        let previousElement = null;

        while (index++ < position) {
          previousElement = current;
          current = current.next;
        }

        node.previous = previousElement;
        node.next = current;
        previousElement.next = node;
        current.previous = node;
        length++;
      }
    } else {
      return false;
    }
  }

  /**
   *
   * @param {Int} element
   */
  function remove(element) {
    const elementIndex = indexOf(element);
    return removeAt(elementIndex);
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
        let previousElement = null;

        while (index++ < position) {
          previousElement = current;
          current = current.next;
        }

        previousElement.next = current.next;
        current.next.prev = previousElement;

        length--;
      }
    } else {
      return false;
    }
  }

  function toString() {
    let result = "";
    let current = head;
    while (current) {
      result += `${current.element}${current.next ? " -> " : ""}`;
      current = current.next;
    }
    return result;
  }

  function toStringInReverse() {
    let result = "";
    let current = head;
    let last = null;
    while (current.next !== null) {
      current = current.next;
      last = current;
    }

    while (last !== null) {
      result += `${last.element}${last.previous ? " -> " : ""}`;
      last = last.previous;
    }
    return result;
  }

  return {
    unshift,
    append,
    indexOf,
    insertAt,
    remove,
    removeAt,
    toString,
    toStringInReverse,
  };
}

export default DoublyLinkedList;
