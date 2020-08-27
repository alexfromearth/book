import React from 'react';
import styles from './styles.module.sass';

function BookTableHead() {
  return (
    <thead className={styles.tHead}>
      <tr>
        <th scope="col">Картинка</th>
        <th scope="col">Заголовок</th>
        <th scope="col">Список авторов</th>
        <th scope="col">Количество страниц</th>
        <th scope="col">Название издательства</th>
        <th scope="col">Год публикации</th>
        <th scope="col">Дата выхода в тираж</th>
        <th scope="col">ISBN</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
  );
}

export default BookTableHead;
