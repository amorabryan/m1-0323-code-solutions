/* exported isPalindromic */
function isPalindromic(word) {
  const modifyWord = word.replace(/[^0-9a-z]/gi, '');
  let newString = '';
  for (let i = modifyWord.length - 1; i >= 0; i--) {
    newString += modifyWord[i];
  }
  return newString === modifyWord;
}
