import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BookTableHead from './BookTableHead';
import BookItem from './BookItem';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <NavLink to="/newBook">Добавить </NavLink>
      <table>
        <BookTableHead />
        <tbody>
          {books && books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
