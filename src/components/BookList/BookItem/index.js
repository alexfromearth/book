import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalPortal from '../../Modals/ModalPortal';
import modalStyles from '../../Modals/ModalPortal/styles.module.sass';
import RemoveBookModal from '../../Modals/RemoveBookModal';

function BookItem({ book, showModal, setShowModal }) {
  return (
    <tr>
      <td>какая-то картинка</td>
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
        <NavLink to={`/books/${book.id}`}>Изменить</NavLink>
        <button type="button" onClick={() => setShowModal('delete')}>Удалить</button>
        {showModal === 'delete' && (
          <ModalPortal className={modalStyles.myModal}>
            <RemoveBookModal id={book.id} setShowModal={setShowModal} />
          </ModalPortal>
        )}
      </td>
    </tr>
  );
}

export default BookItem;
