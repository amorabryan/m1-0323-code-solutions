/* exported getFirstChar */
/* - PSEUDOCODE -
Define a function, named getFirstChar that accepts one argument, 'string'.
Declare a variable named 'firstChar' and assign it to the 'string' argument with the 'charAt()' method to find the first
character in a string.
Return the value of the 'firstChar' variable.
*/

function getFirstChar(string) {
  const firstChar = string.charAt(0);
  return firstChar;
}
