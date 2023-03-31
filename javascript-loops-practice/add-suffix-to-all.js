/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr[i] = words[i] + suffix;
  } return newArr;
}
