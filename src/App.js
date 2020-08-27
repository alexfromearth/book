import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import BookForm from './components/Forms/BookForm';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <>
          <Switch>
            <Route path="/books/:id">
              <BookForm />
            </Route>
            <Route path="/newBook">
              <BookForm />
            </Route>
            <Route path="/">
              <BookList />
            </Route>
          </Switch>
        </>
      </Provider>
    </Router>
  );
}

export default App;
