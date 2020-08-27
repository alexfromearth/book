import actionTypes from '../actionTypes/index';

export const addBook = (fieldsData) => ({ type: actionTypes.ADD_BOOK, payload: fieldsData });
export const removeBook = (id) => ({ type: actionTypes.REMOVE_BOOK, payload: { id } });
export const editBook = (fieldsData) => ({ type: actionTypes.EDIT_BOOK, payload: fieldsData });
