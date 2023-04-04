/* exported capitalize */
function capitalize(word) {
  const firstChar = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return firstChar;
}
