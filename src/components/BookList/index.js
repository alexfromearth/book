import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BookTableHead from './BookTableHead';
import BookItem from './BookItem';
import styles from './styles.module.sass';
import useSortData from '../../hooks/useSortData';

function BookList() {
  const books = useSelector((state) => state.books);
  const { items, requestSort, sortConfig } = useSortData(books);
  const [showModal, setShowModal] = useState(false);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <>
      <NavLink to="/newBook">Добавить </NavLink>
      <table className={styles.table}>
        <BookTableHead getClassNamesFor={getClassNamesFor} requestSort={requestSort} />
        <tbody>
          {items && items.map((book) => (
            <BookItem key={book.id} book={book} showModal={showModal} setShowModal={setShowModal} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
