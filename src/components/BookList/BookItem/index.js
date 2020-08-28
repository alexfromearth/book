import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.sass';

function BookItem({ book, setShowModal }) {
  return (
    <tr className={styles.wrapper}>
      <td>
        {book.img
          ? <img src={book.img} alt="avatar" className={styles.avatar} />
          : 'какая-то картинка'}
      </td>
      <td>{book.title}</td>
      <td>
        <ul>
          {book.authors.map(((author) => (
            <li key={author.id + author.firstName}>
              {author.firstName}
              {' '}
              {author.lastName}
            </li>
          )))}
        </ul>
      </td>
      <td>{book.numberOfPages}</td>
      {book.publishHouse ? <td>{book.publishHouse}</td> : <td>пусто</td>}
      {book.publishYear ? <td>{book.publishYear}</td> : <td>пусто</td>}
      {book.releaseDate ? <td>{book.releaseDate}</td> : <td>пусто</td>}
      {book.isbn ? <td>{book.isbn}</td> : <td>пусто</td>}
      <td>
        <NavLink to={`/books/${book.id}`}><button type="button" className={styles.actionBtns}><FontAwesomeIcon icon={faPen} /></button></NavLink>
        <button type="button" className={styles.actionBtns} onClick={() => setShowModal(book.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </td>
    </tr>
  );
}

export default BookItem;
