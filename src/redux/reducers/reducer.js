import deepcopy from 'deepcopy';
import { loadState } from '../../utils/localStorage';
import actionTypes from '../actionTypes';

const initialState = {
  books: [],
  sortConfig: null,
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
    case actionTypes.EDIT_BOOK: {
      const newState = deepcopy(state);
      newState.books = newState.books.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload.fieldsData };
        }
        return book;
      });
      return newState;
    }
    case actionTypes.SET_SORT_CONFIG: {
      return {
        ...state,
        sortConfig: action.payload.config,
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
