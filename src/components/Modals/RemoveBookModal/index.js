import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeBook } from '../../../redux/actionCreators';
import styles from './styles.module.sass';

function RemoveBookModal({ id, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleDelete() {
    if (id) {
      dispatch(removeBook(id));
      history.push('/');
      setShowModal(false);
    }
  }

  return (
    <div className={styles.removeWrapper}>
      <h3>Вы действительно хотите удалить книгу?</h3>
      <div>
        <button type="button" onClick={handleDelete}>Удалить</button>
        <button type="button" onClick={() => setShowModal(false)}>Отмена</button>
      </div>
    </div>
  );
}

export default RemoveBookModal;
