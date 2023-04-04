/* exported getKeys */
function getKeys(object) {
  const arr = [];
  for (const i in object) {
    arr.push(i);
  }
  return arr;
}
