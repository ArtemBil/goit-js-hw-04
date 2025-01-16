/**
 * Filter an array by minimum threshold value
 *
 * @param {number[]} numbers - array to be filtered
 * @param {number} value - min threshold to pass filtered value
 * @return {number[] | []}
 */
function filterArray(numbers, value) {
  const filteredArray = [];

  for (const current of numbers) {
    if (current > value) {
      filteredArray.push(current);
    }
  }

  return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
