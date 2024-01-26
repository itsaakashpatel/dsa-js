function LinkedList() {
  let head = null; //Holds very first element
  let length = 0; //Size of the list

  /**
   *
   * @param {Int} element which needs to be added at the beginning of the list
   */
  function unshift(element) {
    const node = {
      element,
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
   * @param {Int} element which needs to be added at the last of the list
   */
  function append(element) {
    const node = {
      element,
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
   * @param {Int} element
   * @returns
   */

  function indexOf(element) {
    let index = 0;
    let current = head;

    while (current.element !== element) {
      current = current.next;
      index++;
    }

    return index;
  }

  /**
   *
   * @param {Int} position
   * @param {Int} element
   * @returns
   */
  function insertAt(position, element) {
    if (position >= 0 && position <= length) {
      const node = {
        element,
        next: null,
      };

      if (position === 0) {
        //Call unshift method
        unshift(element);
        return;
      } else if (position === length) {
        //Append at the last so called append method
        append(element);
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
        let previous = null;

        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;
      return current.element;
    } else {
      return;
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

  return {
    unshift,
    append,
    indexOf,
    insertAt,
    remove,
    removeAt,
    toString,
  };
}

export default LinkedList;
