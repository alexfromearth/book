import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';

const store = createStore(reducer, composeWithDevTools());

store.subscribe(() => {
  try {
    const state = store.getState();
    const stringedState = JSON.stringify(state);
    window.localStorage.setItem('state', stringedState);
  } catch (e) { console.error(e); }
});

export default store;
