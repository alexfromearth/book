import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducer';

const SagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(SagaMiddleware)));

store.subscribe(() => {
  try {
    const state = store.getState();
    const stringedState = JSON.stringify(state);
    window.localStorage.setItem('state', stringedState);
  } catch {}
});

export default store;
