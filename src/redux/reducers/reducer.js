const initialState = {
  books: [
    {
      title: 'JavaScript. Сильные стороны',
      authors: [{ firstName: 'Дуглас', lastName: 'Крокфорд' }],
      numberOfPages: 502,
      publishHouse: null,
      publishYear: 2012,
      releaseDate: '01.02.1820',
      isbn: null,
      img: null,
    },
    {
      title: 'Вы не знаете JS',
      authors: [{ firstName: 'Дуглас', lastName: 'Крокфорд' }],
      numberOfPages: 502,
      publishHouse: null,
      publishYear: 2012,
      releaseDate: '01.02.1820',
      isbn: null,
      img: null,
    },
    {
      title: 'Вы не знаете JS',
      authors: [{ firstName: 'Kyle', lastName: 'Simpson' }],
      numberOfPages: 502,
      publishHouse: null,
      publishYear: 2015,
      releaseDate: '01.02.1820',
      isbn: null,
      img: null,
    },
    {
      title: 'Выразительный Javascript',
      authors: [{ firstName: 'Марейн', lastName: 'Хавербек' }],
      numberOfPages: 502,
      publishHouse: null,
      publishYear: 2019,
      releaseDate: '01.02.1820',
      isbn: null,
      img: null,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
