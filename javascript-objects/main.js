const student = {
  firstName: 'Bryan',
  lastName: 'Amora',
  age: 28
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of student.fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'warehouse employee';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

const vehicle = {
  make: 'Honda',
  model: 'NSX',
  year: 1996
};

vehicle['color'] = 'Championship White';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Doodles',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
