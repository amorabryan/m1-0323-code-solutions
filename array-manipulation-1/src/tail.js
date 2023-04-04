/* exported tail */
function tail(array) {
  const arrayWithoutFirst = [];
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    arrayWithoutFirst[j] = array[i];
    j++;
  }
  return arrayWithoutFirst;
}
