/* exported toObject */
function toObject(keyValuePair) {
  let object = {};
  let objectTwo = '';
  const i = 0;
  object[i] = keyValuePair[i];
  objectTwo = keyValuePair[i + 1];
  object = { [keyValuePair[i]]: objectTwo };
  return object;
}
