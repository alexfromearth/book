import React from 'react';
import { Field, Form } from 'react-final-form';
import composeValidators, {
  maxCount, maxLength, minCount, minPublishYear, minReleaseDate, required,
} from '../../../utils/validators';
import { Input } from '../CustomFormItems/Input';
import styles from './styles.module.sass';

function AddBookForm() {
  const submitNewBook = (fieldsData) => {
    console.log(fieldsData);
  };

  return (
    <div className={styles.wrapper}>
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
            <div>
              {/* добавить Авторов модальное окно */}
            </div>
            <label htmlFor="numberOfPages">Количество страниц</label>
            <div>
              <Field
                id="numberOfPages"
                type="number"
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
                id="release"
                type="date"
                name="release"
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
