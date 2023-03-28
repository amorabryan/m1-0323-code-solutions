const num1 = 5;
const num2 = 8;
const num3 = 14;
const maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

const heroes = ['SpiderMan', 'Iron Man', 'Green Lantern', 'John Wick', 'Dad', 'Mom', 'Shrek'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

const library = [
  {
    title: 'Effective Java',
    author: 'Bloch, Joshua'
  },
  {
    title: 'The Timeless Way of Building',
    author: 'Alexander, Christopher'
  },
  {
    title: 'The Art of Sql',
    author: 'Faroult, Stephane'
  }
];

const lastBook = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Rauschmayer, Dr. Axel'
};
const css = {
  title: 'CSS Secrets',
  author: 'Verou, Lea'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

const fullName = 'Bryan Amora';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
