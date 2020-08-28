import React from 'react';
import { Field, Form } from 'react-final-form';
import { v4 as uuidv4 } from 'uuid';
import composeValidators, {
  maxLength,
  required,
} from '../../../utils/validators';
import { Input } from '../../Forms/CustomFormItems/Input';

function AddAuthorModal({ setAuthors, setShowAuthorsModal }) {
  function submitNewAuthor(fieldsData) {
    if (!fieldsData.firstName || !fieldsData.lastName) return;
    setAuthors((state) => [...state, { ...fieldsData, id: uuidv4() }]);
    setShowAuthorsModal(false);
  }

  return (
    <div>
      <div>
        <h3>Добавить автора</h3>
        <Form
          onSubmit={submitNewAuthor}
          render={({
            handleSubmit, pristine, submitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">Имя Автора</label>
              <div>
                <Field
                  id="firstName"
                  type="text"
                  name="firstName"
                  validate={composeValidators(required, maxLength(20))}
                  render={(props) => <Input {...props} />}
                />
              </div>
              <label htmlFor="lastName">Фамилия Автора</label>
              <div>
                <Field
                  id="lastName"
                  type="text"
                  name="lastName"
                  validate={composeValidators(required, maxLength(20))}
                  render={(props) => <Input {...props} />}
                />
              </div>
              <div>
                <br />
                <button type="submit" disabled={submitting || pristine}>Добавить</button>
                <button type="button" onClick={() => setShowAuthorsModal(false)}>Отмена</button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default AddAuthorModal;
