/* exported initial */
function initial(array) {
  const arrayWithoutLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayWithoutLast.push(array[i]);
  }
  return arrayWithoutLast;
}
