import React from 'react';
import './styles.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function BookTableHead({ getClassNamesFor, requestSort }) {
  return (
    <thead className="tHead">
      <tr>
        <th scope="col">Картинка</th>
        <th scope="col">
          <button type="button" onClick={() => requestSort('title')} className={getClassNamesFor('title')}>
            <FontAwesomeIcon icon={faSort} />
            {' '}
          </button>
          Заголовок
        </th>
        <th scope="col">Список авторов</th>
        <th scope="col">Количество страниц</th>
        <th scope="col">Название издательства</th>
        <th scope="col">
          <button type="button" onClick={() => requestSort('publishYear')} className={getClassNamesFor('publishYear')}>
            <FontAwesomeIcon icon={faSort} />
            {' '}
          </button>
          Год публикации
        </th>
        <th scope="col">Дата выхода в тираж</th>
        <th scope="col">ISBN</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
  );
}

export default BookTableHead;
