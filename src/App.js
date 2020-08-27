import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import AddBookForm from './components/Forms/AddBookForm';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <>
          <Switch>
            <Route path="/newBook">
              <AddBookForm />
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
