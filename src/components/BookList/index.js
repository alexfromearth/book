import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BookTableHead from './BookTableHead';
import BookItem from './BookItem';
import styles from './styles.module.sass';
import useSortData from '../../hooks/useSortData';
import ModalPortal from '../Modals/ModalPortal';
import modalStyles from '../Modals/ModalPortal/styles.module.sass';
import RemoveBookModal from '../Modals/RemoveBookModal';

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
            <Fragment key={book.id}>
              <BookItem book={book} showModal={showModal} setShowModal={setShowModal} />
              {showModal === book.id && (
              <ModalPortal className={modalStyles.myModal}>
                <RemoveBookModal id={book.id} setShowModal={setShowModal} />
              </ModalPortal>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
