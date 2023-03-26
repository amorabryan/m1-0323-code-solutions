function convertMinutesToSeconds(minutes) {
  const conversion = minutes * 60;
  return conversion;
}
console.log('convertMinutesToSecondsResult:', convertMinutesToSeconds(5));

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
console.log('greetResult:', greet('Beavis'));

function getArea(width, height) {
  const rectangle = width * height;
  return rectangle;
}
console.log('getAreaResult:', getArea(17, 42));

function getFirstName(person) {
  const personFirstName = person.firstName;
  return personFirstName;
}
console.log('getFirstNameResult:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const element = array[array.length - 1];
  return element;
}
console.log('getLastElementResult:', getLastElement(['propane', 'and', 'propane', 'accessories']));
