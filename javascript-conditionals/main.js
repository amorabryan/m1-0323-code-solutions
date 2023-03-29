/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } return false;
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } return 'invalid pH level';
}

function introduceWarnerBro(name) {
  let text = '';
  switch (name) {
    case 'yakko':
    case 'wakko':
      text = "We're the Warner Brothers!";
      break;
    case 'dot':
      text = "I'm cute~";
      break;
    default:
      text = 'Goodnight everybody!';
  } return text;
}

function recommendMovie(genre) {
  let text = '';
  switch (genre) {
    case 'action':
      text = 'Ant-Man';
      break;
    case 'comedy':
      text = 'Step-Brothers';
      break;
    case 'horror':
      text = 'Scream';
      break;
    case 'drama':
      text = 'Pride and Prejudice';
      break;
    case 'musical':
      text = 'Hamilton';
      break;
    case 'sci-fi':
      text = 'Star Wars';
      break;
    default:
      text = 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  } return text;
}
