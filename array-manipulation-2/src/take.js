/* exported take */

/* - PSEUDOCODE -
Define a function, 'take', with two arguments, 'array' and 'count'.
  Create an empty array to hold the new results.
  Use a for loop that iterates through the input array, for  the variable 'i', from 0 to the length
  method of the array object.
    If the current index is not equal to the 'count' parameter,
      Use the push method to add the current element into the new array.
    If the current index is strictly equal to the count,
      Return the new array.
  Return the new array if the 'count' was not found in the input 'array'.
*/

function take(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== count) {
      newArray.push(array[i]);
    }
    if (i === count) {
      return newArray;
    }
  }
  return newArray;
}
