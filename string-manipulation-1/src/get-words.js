/* exported getWords */
function getWords(string) {
  const splitString = string.split(' ');
  if (string === '') {
    return [];
  }
  return splitString;
}
