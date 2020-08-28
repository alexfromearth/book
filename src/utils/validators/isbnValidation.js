function isOddNumber(value) {
  return value % 2 !== 0;
}

function isValidISBN10(isbn) {
  let result = 'Неверное значение ISBN';
  const regEx = new RegExp(/^\d{9}(\d|X){1}$/);
  if (regEx.test(isbn)) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += isbn[i] * (i + 1);
    }
    sum += isbn[9] === 'X' ? 10 : isbn[9] * 10;
    result = sum % 11 === 0 ? undefined : result;
  }
  return result;
}

function isValidISBN13(isbn) {
  let result = 'Неверное значение ISBN';
  if (!Number.isNaN(isbn)) {
    let index = 0;
    let sum = 0;

    for (let i = 0; i < isbn.length; i++) {
      sum += isbn[i] * (isOddNumber(index++) ? 3 : 1);
    }

    result = sum % 10 === 0 ? undefined : result;
  }

  return result;
}

function IsbnValidation(isbn) {
  let result;
  if (isbn) {
    isbn = isbn.replace(/-/gi, '');
    isbn = isbn.replace(/ /gi, '');

    switch (isbn.length) {
      case 10: {
        result = isValidISBN10(isbn);
        break;
      }
      case 13: {
        result = isValidISBN13(isbn);
        break;
      }
      default:
        result = 'Неверное значение ISBN';
        break;
    }
  }
  return result;
}

export default IsbnValidation;
