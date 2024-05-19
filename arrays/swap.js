var swap = function (array, index1, index2) {
  if (array.length === 0) return array;
  //Indexes should fall under array
  if (index1 <= array.length - 1 && index2 <= array.length - 1) {
    //swap
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
  }

  return array;
};

const arr = [2, 3, 4, 5, 6];

console.log(swap(arr, 2, 3));
