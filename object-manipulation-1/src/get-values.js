/* exported getValues */
function getValues(object) {
  const arr = [];
  for (const i in object) {
    arr.push(object[i]);
  }
  return arr;
}
