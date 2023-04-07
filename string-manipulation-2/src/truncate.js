/* exported truncate */

/* - PSEUDOCODE -
Define a function, named 'truncate', with two arguments, 'length' and 'string'.
  Write an if statement, where if the length of the string is less than or equal to the 'length' parameter,
  then return the string appends an ellipsis.
  If the string is longer than the 'length' parameter, then return the string sliced to the length given by the 'length'
  parameter, and appends an ellipsis.
*/

function truncate(length, string) {
  if (string.length <= length) {
    return string + '...';
  }
  return string.slice(0, length) + '...';
}
