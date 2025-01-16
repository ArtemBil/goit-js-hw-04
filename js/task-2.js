/**
 * Compose arrays by maxLength limit
 *
 * @param {string[]} firstArray - first array to be merged
 * @param {string[]} secondArray - second array to be merged
 * @param {number} maxLength - limit length to be for resulting array
 * @return {string[] | []}
 */
function makeArray(firstArray, secondArray, maxLength) {
  const composedArrays = [...firstArray, ...secondArray];

  if (firstArray.length + secondArray.length < maxLength) {
    return composedArrays;
  }

  return composedArrays.slice(0, maxLength);
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
