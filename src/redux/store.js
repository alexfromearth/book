import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash.throttle';
import reducer from './reducers/reducer';
// import {all} from "@redux-saga/core/effects";
const SagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(SagaMiddleware)));

store.subscribe(() => {
  // throttle(() => {
  try {
    const state = store.getState();
    const stringedState = JSON.stringify(state);
    window.localStorage.setItem('state', stringedState);
  } catch {}
  // });
});

// SagaMiddleware.run(
//   function* () {
//     yield all([
//
//     ])
//   },
// );

export default store;
