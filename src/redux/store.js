import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducer';
// import {all} from "@redux-saga/core/effects";

const SagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(SagaMiddleware)));

// SagaMiddleware.run(
//   function* () {
//     yield all([
//
//     ])
//   },
// );

export default store;
