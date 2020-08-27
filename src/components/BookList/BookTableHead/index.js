import React from 'react';

function BookTableHead() {
  return (
    <thead>
      <tr>
        <th>Картинка</th>
        <th>Заголовок</th>
        <th>Список авторов</th>
        <th>Количество страниц</th>
        <th>Название издательства</th>
        <th>Год публикации</th>
        <th>Дата выхода в тираж</th>
        <th>ISBN</th>
        <th>Действия</th>
      </tr>
    </thead>
  );
}

export default BookTableHead;
