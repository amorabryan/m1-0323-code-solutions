/* exported getIndexes */
function getIndexes(array) {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    myArray.push(myArray.length);
  } return myArray;
}
