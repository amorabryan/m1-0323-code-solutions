/* exported ransomCase */
function ransomCase(string) {
  const stringConcat = string.toLowerCase().split('');
  for (let i = 1; i < string.length; i += 2) {
    stringConcat[i] = stringConcat[i].toUpperCase();
  }
  return stringConcat.join('');
}
