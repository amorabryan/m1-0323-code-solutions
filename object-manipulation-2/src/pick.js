/* exported pick */

/* -PSEUDOCODE -
Create a function, 'pick', with two arguments: 'source', any JS Object, and 'keys', an array of JS Strings.
  Create an empty object to store the picked properties and assign it to the variable result.
  Create a for loop that iterates over the length of the 'key' array.
    Store the current 'key' at the index into the variable 'key'.
    Check if the 'key' exists in the 'source' object. If it does, add the property into the 'result' object.
  Return the new object with the picked properties.
*/

function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
