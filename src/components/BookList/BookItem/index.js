import React from 'react';

function BookItem({ book }) {
  return (
    <tr>
      <td>какая-то картинка</td>
      <td>{book.title}</td>
      <td>
        {book.authors.map(((authors) => (
          <ul key={authors.firstName + authors.lastName}>
            <li>{authors.firstName}</li>
            <li>{authors.lastName}</li>
          </ul>
        )))}
      </td>
      <td>{book.numberOfPages}</td>
      <td>{book.publishHouse}</td>
      <td>{book.publishYear}</td>
      <td>{book.releaseDate}</td>
      <td>{book.isbn}</td>
      <td>
        <button>Изменить</button>
        <button>Удалить</button>
      </td>
    </tr>
  );
}

export default BookItem;
