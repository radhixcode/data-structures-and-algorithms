/**
 * Bubble sort - O(n²)
 * @param {Array} - input unsorted array
 * @returns {Array} - sorted array
 */
function bubbleSort(arr) {
  const arrLength = arr.length;

  if (!Array.isArray(arr)) {
    throw new Error("error: input is not an array");
  }
  if (arrLength === 0) {
    throw new Error("error: array is empty");
  }
  if (arrLength === 1) {
    return arr;
  }

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}

/**
 * Bubble sort effiicient
 * @param {Array} - input unsorted array
 * @returns {Array} - sorted array
 */

function bubbleSortEff(arr) {
  const arrLength = arr.length;
  let swapped = false;

  if (!Array.isArray(arr)) {
    throw new Error("error: input is not an array");
  }
  if (arrLength == 0) {
    throw new Error("error:input array is empty");
  }
  if (arrLength == 1) {
    return arr;
  }

  do {
    swapped = false;
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

module.exports = { bubbleSort, bubbleSortEff };
