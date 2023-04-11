/* exported titleCase */
function titleCase(title) {
  const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'with', 'as', 'per'];
  let bookTitle = title.toLowerCase();
  if (bookTitle.includes('javascript: ')) {
    bookTitle = bookTitle.replace('javascript: ', 'JavaScript: ');
  }
  bookTitle = bookTitle.split(' ');
  for (let i = 0; i < bookTitle.length; i++) {
    const newBook = bookTitle[i];
    if (i === 0 || bookTitle[i - 1].slice(-1) === ':' || !minorWords.includes(newBook) || newBook.includes('-')) {
      bookTitle[i] = specialCases(newBook);
    }
  }
  return bookTitle.join(' ');
}

function specialCases(newBook) {
  if (newBook === 'javascript') {
    return 'JavaScript';
  } else if (newBook === 'api') {
    return newBook.toUpperCase();
  } else if (newBook.includes('-')) {
    const parts = newBook.split('-');
    let result = '';
    for (let i = 0; i < parts.length; i++) {
      result += specialCases(parts[i]);
      if (i < parts.length - 1) {
        result += '-';
      }
    }
    return result;
  }
  return newBook.charAt(0).toUpperCase() + newBook.slice(1);
}
