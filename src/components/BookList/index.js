import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BookTableHead from './BookTableHead';
import BookItem from './BookItem';
import styles from './styles.module.sass';

function BookList() {
  const books = useSelector((state) => state.books);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavLink to="/newBook">Добавить </NavLink>
      <table className={styles.table}>
        <BookTableHead />
        <tbody>
          {books && books.map((book) => (
            <BookItem key={book.id} book={book} showModal={showModal} setShowModal={setShowModal} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
