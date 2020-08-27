import deepcopy from 'deepcopy';
import { loadState } from '../../utils/localStorage';
import actionTypes from '../actionTypes';

const initialState = {
  books: [
    {
      id: 5,
      title: 'JavaScript. Сильные стороны',
      authors: [{ id: 1, firstName: 'Дуглас', lastName: 'Крокфорд' }],
      numberOfPages: 502,
      publishHouse: null,
      publishYear: 2012,
      releaseDate: '01.02.1820',
      isbn: null,
      img: null,
    },
    {
      id: 6,
      title: 'Вы не знаете JS',
      authors: [{ id: 2, firstName: 'Дуглас', lastName: 'Крокфорд' }],
      numberOfPages: 502,
      publishHouse: null,
      publishYear: 2012,
      releaseDate: '01.02.1820',
      isbn: null,
      img: null,
    },
    {
      id: 7,
      title: 'Выразительный Javascript',
      authors: [{ id: 3, firstName: 'Марейн', lastName: 'Хавербек' }],
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
    case actionTypes.ADD_BOOK: {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    }
    case actionTypes.REMOVE_BOOK: {
      const newState = deepcopy(state);
      newState.books = newState.books.filter((book) => book.id !== action.payload.id);
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
