/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const newString = function (string) {
    return string.replace(/[^\w]/g, '').split('').sort().join('');
  };
  if (newString(firstString) === newString(secondString)) {
    return true;
  }
  return false;
}
