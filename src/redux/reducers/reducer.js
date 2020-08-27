import { loadState } from '../../utils/localStorage';

const initialState = {
  books: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

const preloadedState = loadState() || initialState;

const reducer = (state = preloadedState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
