import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import composeValidators, {
  maxCount, maxLength, minCount, minPublishYear, minReleaseDate, required,
} from '../../../utils/validators';
import { Input } from '../CustomFormItems/Input';
import styles from './styles.module.sass';
import { addBook } from '../../../redux/actionCreators';
import ModalPortal from '../../Modals/ModalPortal';
import AddAuthorModal from '../../Modals/AddAuthorModal';
import modalStyles from '../../Modals/ModalPortal/styles.module.sass';

function AddBookForm() {
  const [authors, setAuthors] = useState([]);
  const [showAuthorsModal, setShowAuthorsModal] = useState(false);
  const [ValidError, setValidError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const submitNewBook = (fieldsData) => {
    if (!fieldsData.title || !fieldsData.numberOfPages) return;
    if (authors.length === 0) {
      setValidError('В книге должен быть как минимум один автор');
      return;
    }
    dispatch(addBook({ ...fieldsData, authors, id: uuidv4() }));
    setValidError('');
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      {showAuthorsModal && (
      <ModalPortal className={modalStyles.myModal}>
        <AddAuthorModal setAuthors={setAuthors} setShowAuthorsModal={setShowAuthorsModal} />
      </ModalPortal>
      )}
      <button className={styles.goBack} onClick={() => history.push('/')}>Назад</button>
      <Form
        onSubmit={submitNewBook}
        render={({
          handleSubmit, pristine, submitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Заголовок книги</label>
            <div>
              <Field
                id="title"
                type="text"
                name="title"
                validate={composeValidators(required, maxLength(30))}
                render={(props) => <Input {...props} />}
              />
            </div>
            <label htmlFor="authors">Авторы</label>
            <br />
            <br />
            <div>
              <ul>
                {authors.length > 0 ? authors.map((author) => (
                  <li>
                    {author.firstName}
                    {' '}
                    {author.lastName}
                  </li>
                )) : 'Нет Авторов'}
              </ul>
              <button type="button" onClick={() => { setShowAuthorsModal(true); }}>Добавить автора</button>
              <br />
              {ValidError && <span style={{ color: 'red' }}>{ValidError}</span>}
            </div>
            <br />
            <label htmlFor="numberOfPages">Количество страниц</label>
            <div>
              <Field
                id="numberOfPages"
                type="text"
                name="numberOfPages"
                validate={composeValidators(required, minCount(1), maxCount(10000))}
                render={(props) => <Input {...props} />}
              />
            </div>
            <label htmlFor="publishHouse">Название издательства</label>
            <div>
              <Field
                id="publishHouse"
                type="text"
                name="publishHouse"
                validate={maxLength(30)}
                render={(props) => <Input {...props} />}
              />
            </div>
            <label htmlFor="publishYear">Год публикации</label>
            <div>
              <Field
                id="publishYear"
                type="number"
                name="publishYear"
                validate={minPublishYear(1800)}
                render={(props) => <Input {...props} />}
              />
            </div>
            <label htmlFor="release">Дата выхода в тираж</label>
            <div>
              <Field
                id="releaseDate"
                type="date"
                name="releaseDate"
                validate={minReleaseDate('01.01.1800')}
                render={(props) => <Input {...props} />}
              />
            </div>
            <label htmlFor="ISBN">ISBN код</label>
            <div>
              <Field
                id="ISBN"
                type="text"
                name="isbn"
                render={(props) => <Input {...props} />}
                // валидация isbn
              />
            </div>
            <div>
              {/* Загрузка изображения */}
            </div>
            <div className={styles.submitWrapper}>
              <button disabled={submitting || pristine}>Добавить</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default AddBookForm;
