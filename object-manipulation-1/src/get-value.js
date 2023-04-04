/* exported getValue */

/* - PSEUDOCODE -
Define a function, named 'getValue', with two arguments, 'object' and 'key'.
  Declare a variable named 'value', and assign it to the value in object found at the key property.
  Return the value of the 'value' variable.
*/

function getValue(object, key) {
  const value = object[key];
  return value;
}
